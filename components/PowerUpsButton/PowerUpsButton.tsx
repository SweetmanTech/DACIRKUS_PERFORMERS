import { useEffect, useState } from "react"
import _ from "lodash"
import { useAccount } from "wagmi"
import { useConnectModal } from "@rainbow-me/rainbowkit"
import useBalanceOf from "../../hooks/useBalanceOf"
import useZoraMint from "../../hooks/useZoraMint"
import Spinner from "../Spinner"
import spotifyLogin from "../../lib/spotify/spotifyLogin"
import axios from "axios"
import { SPOTIFY_CLIENT_ID, SPOTIFY_REDIRECT_URI } from "../../lib/consts"
import generateRandomString from "../../lib/spotify/generateRandomString"
import generateCodeChallenge from "../../lib/spotify/generateCodeChallenge"

const PowerUpsButton = ({ onClick }) => {
  const [clicked, setClicked] = useState(false)
  const { mintWithRewards } = useZoraMint()
  const { balance, fetchBalance, cameraCount, moneyCount, heartCount } = useBalanceOf()
  const { isConnected } = useAccount()
  const { openConnectModal } = useConnectModal()
  const channel = new MessageChannel()

  function callGodotFunction() {
    const iframe = document.querySelector("#godotGame") as HTMLIFrameElement
    if (!iframe) {
      return
    }
    iframe.contentWindow.postMessage([heartCount, cameraCount, moneyCount], "*", [channel.port2])
  }

  const handleClick = async () => {
    console.log("SWEETS POWER UP CLICKED")
    const clientId = SPOTIFY_CLIENT_ID
    const redirectUri = SPOTIFY_REDIRECT_URI

    const codeVerifier = generateRandomString(128)

    generateCodeChallenge(codeVerifier).then((codeChallenge) => {
      const state = generateRandomString(16)
      const scope = "user-read-private user-read-email"

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

    console.log("SWEETS POWER UP CLICKED response")

    if (!isConnected) {
      openConnectModal()
      return
    }
    if (_.isNull(balance)) return
    setClicked(true)
    if (balance === 0) {
      await mintWithRewards()
      await fetchBalance()
      return
    }
    callGodotFunction()
    onClick()
    setClicked(false)
  }

  useEffect(() => {
    const loading =
      _.isNull(balance) || _.isNull(heartCount) || _.isNull(moneyCount) || _.isNull(cameraCount)
    if (loading && isConnected) {
      setClicked(true)
      return
    }
    setClicked(false)
  }, [balance, isConnected, heartCount, moneyCount, cameraCount])

  return (
    <button onClick={handleClick} type="button" className="text-xs md:text-xl text-white">
      {clicked ? <Spinner /> : "play with power-ups"}
    </button>
  )
}

export default PowerUpsButton
