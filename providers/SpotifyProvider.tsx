/* eslint-disable camelcase */
import { useRouter } from "next/router"
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"
import { SPOTIFY_CLIENT_ID, SPOTIFY_REDIRECT_URI } from "../lib/consts"
import generateRandomString from "../lib/spotify/generateRandomString"
import generateCodeChallenge from "../lib/spotify/generateCodeChallenge"

const SpotifyContext = createContext(null)

const SpotifyProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null)
  const [deviceId, setDeviceId] = useState(null)
  const { query } = useRouter()

  const login = useCallback(() => {
    const clientId = SPOTIFY_CLIENT_ID
    const redirectUri = SPOTIFY_REDIRECT_URI

    const codeVerifier = generateRandomString(128)

    generateCodeChallenge(codeVerifier).then((codeChallenge) => {
      const state = generateRandomString(16)
      const scope = "user-read-private user-read-email streaming"

      localStorage.setItem("code_verifier", codeVerifier)

      const args = new URLSearchParams({
        response_type: "code",
        client_id: clientId,
        scope,
        redirect_uri: redirectUri,
        state,
        code_challenge_method: "S256",
        code_challenge: codeChallenge,
      })

      window.location = `https://accounts.spotify.com/authorize?${args}` as any
    })
  }, [])

  const playSong = useCallback(async () => {
    await fetch(`https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`, {
      method: "PUT",
      body: JSON.stringify({ uris: ["spotify:track:5aDNHHNXc16VktqV1gSq23"] }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    })

    await fetch(`https://api.spotify.com/v1/me/following?type=artist&ids=4srTg3mp6K9FuZK91G2yeC`, {
      method: "PUT",
      body: JSON.stringify({ ids: ["4srTg3mp6K9FuZK91G2yeC"] }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    })

    await fetch(`https://api.spotify.com/v1/me/tracks?ids=5aDNHHNXc16VktqV1gSq23`, {
      method: "PUT",
      body: JSON.stringify({ ids: ["5aDNHHNXc16VktqV1gSq23"] }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    })
  }, [accessToken, deviceId])

  useEffect(() => {
    if (!accessToken) return
    const script = document.createElement("script")
    script.src = "https://sdk.scdn.co/spotify-player.js"
    script.async = true

    document.body.appendChild(script)

    const anyWin = window as any
    anyWin.onSpotifyWebPlaybackSDKReady = () => {
      const newPlayer = new anyWin.Spotify.Player({
        name: "Web Playback SDK",
        getOAuthToken: (cb) => {
          cb(accessToken)
        },
        volume: 0.5,
      })

      newPlayer.addListener("ready", ({ device_id }) => {
        setDeviceId(device_id)
      })

      newPlayer.connect()
    }
  }, [accessToken])

  useEffect(() => {
    const init = async () => {
      const codeVerifier = localStorage.getItem("code_verifier")
      const body = new URLSearchParams({
        grant_type: "authorization_code",
        code: query.code as any,
        redirect_uri: SPOTIFY_REDIRECT_URI,
        client_id: SPOTIFY_CLIENT_ID,
        code_verifier: codeVerifier,
      })
      await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body,
      })
        .then(async (response) => {
          if (!response.ok) {
            console.error(response)
          }
          return response.json()
        })
        .then(async (data) => {
          localStorage.setItem("access_token", data.access_token)
          setAccessToken(data.access_token)
        })
        .catch((error) => {
          console.error("Error:", error)
        })
    }
    init()
  }, [query])

  const value = useMemo(() => ({ deviceId, login, playSong }), [deviceId, login, playSong])

  return <SpotifyContext.Provider value={value}>{children}</SpotifyContext.Provider>
}

export const useSpotifyProvider = () => {
  const context = useContext(SpotifyContext)
  if (!context) {
    throw new Error("useSpotifyProvider must be used within a SpotifyProvider")
  }
  return context
}

export default SpotifyProvider
