import { useAccount } from "wagmi"
import useBalanceOf from "../../hooks/useBalanceOf"
import { useSpotifyProvider } from "../../providers/SpotifyProvider"
import Button from "../Button"

const StartGameWithPowerUpButton = ({ onClick }) => {
  const { cameraCount, moneyCount, heartCount } = useBalanceOf()
  const { deviceId } = useSpotifyProvider()
  const { address } = useAccount()

  const channel = new MessageChannel()

  const callGodotFunction = () => {
    const iframe = document.querySelector("#godotGame") as HTMLIFrameElement
    if (!iframe) {
      return
    }
    const spotifyMoney = deviceId ? 5 : 0
    iframe.contentWindow.postMessage(
      [heartCount, cameraCount, moneyCount, spotifyMoney, address || ""],
      "*",
      [channel.port2],
    )
  }

  const handleClick = () => {
    callGodotFunction()
    onClick()
  }

  return (
    <Button className="text-xl md:text-4xl pb-4 md:pb-8" id="play-button" onClick={handleClick}>
      Start Game
    </Button>
  )
}

export default StartGameWithPowerUpButton
