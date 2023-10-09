import { useEffect, useState } from "react"
import _ from "lodash"
import useBalanceOf from "../../hooks/useBalanceOf"
import useZoraMint from "../../hooks/useZoraMint"
import Spinner from "../Spinner"
import { useAccount } from "wagmi"
import { useConnectModal } from "@rainbow-me/rainbowkit"

const PowerUpsButton = ({ onClick }) => {
  const [clicked, setClicked] = useState(false)
  const { mintWithRewards } = useZoraMint()
  const { balance, fetchBalance, cameraCount, moneyCount, heartCount } = useBalanceOf()
  const { isConnected } = useAccount()
  const { openConnectModal } = useConnectModal()

  // MessageChannel for communication
  const channel = new MessageChannel()

  function callGodotFunction() {
    const iframe = document.querySelector("#godotGame") as HTMLIFrameElement
    if (!iframe) {
      console.error("Iframe not found!")
      return
    }

    // Transfer port2 to the iframe
    // [heart, camera, money]
    console.log("SWEETS cameraCount", cameraCount)
    console.log("SWEETS moneyCount", moneyCount)
    console.log("SWEETS heartCount", heartCount)
    iframe.contentWindow.postMessage([heartCount, cameraCount, moneyCount], "*", [channel.port2])
  }

  console.log("SWEETS BALANCE", balance)

  const handleClick = async () => {
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
    console.log("SWEETS PASS DATA TO GAME")
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
