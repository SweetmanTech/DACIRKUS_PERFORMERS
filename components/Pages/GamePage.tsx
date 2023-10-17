/* eslint-disable no-underscore-dangle */
/* eslint-disable camelcase */
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import StartModal from "../StartModal"
import PowerUpsButton from "../PowerUpsButton"
import { SPOTIFY_CLIENT_ID, SPOTIFY_REDIRECT_URI } from "../../lib/consts"

const GamePage = () => {
  const [openModal, setOpenModal] = useState(true)
  const { query } = useRouter()
  const [player, setPlayer] = useState(null)
  const [accessToken, setAccessToken] = useState(null)
  console.log("SWEETS player", player)

  const handleClick = () => {
    setOpenModal(false)
  }

  useEffect(() => {
    if (!accessToken) return
    console.log("SWEETS SETUP PLAYER with ACCESST TOKEN", accessToken)
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

      setPlayer(newPlayer)

      newPlayer.addListener("ready", ({ device_id }) => {
        console.log("SWEETS Ready with Device ID", device_id)
        const play = async ({ spotify_uri }) => {
          await fetch(`https://api.spotify.com/v1/me/player/play?device_id=${device_id}`, {
            method: "PUT",
            body: JSON.stringify({ uris: [spotify_uri] }),
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          })

          await fetch(
            `https://api.spotify.com/v1/me/following?type=artist&ids=4srTg3mp6K9FuZK91G2yeC`,
            {
              method: "PUT",
              body: JSON.stringify({ ids: ["4srTg3mp6K9FuZK91G2yeC"] }),
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
              },
            },
          )

          const playResponse = await fetch(
            `https://api.spotify.com/v1/me/tracks?ids=5aDNHHNXc16VktqV1gSq23`,
            {
              method: "PUT",
              body: JSON.stringify({ ids: ["5aDNHHNXc16VktqV1gSq23"] }),
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
              },
            },
          )
          console.log("SWEETS playResponse", playResponse)
        }

        console.log("SWEETS PLAYING spotify:track:5aDNHHNXc16VktqV1gSq23")

        play({
          spotify_uri: "spotify:track:5aDNHHNXc16VktqV1gSq23",
        })
      })

      newPlayer.addListener("not_ready", ({ device_id }) => {
        console.log("SWEETS Device ID has gone offline", device_id)
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

  return (
    <div>
      {openModal && (
        <StartModal handleClick={handleClick}>
          <PowerUpsButton onClick={handleClick} />
        </StartModal>
      )}

      {/* <iframe
        id="godotGame"
        src="/game/index.html"
        title="Hypersurveilled"
        className="h-[100vh] w-[100vw]"
      /> */}
    </div>
  )
}

export default GamePage
