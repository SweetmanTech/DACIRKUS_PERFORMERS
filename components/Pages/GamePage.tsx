import { useAccount } from "wagmi"
import { useState } from "react"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import TokenGateModal from "../TokenGateModal"
import useBalanceOf from "../../hooks/useBalanceOf"
import useZoraMint from "../../hooks/useZoraMint"
import Button from "../Button"
import Spinner from "../Spinner"

const GamePage = () => {
  const [minting, setMinting] = useState(false)
  const { mintWithRewards } = useZoraMint()
  const { isConnected } = useAccount()
  const { balance, fetchBalance } = useBalanceOf()
  const openModal = !isConnected || balance < 1

  const mint = async () => {
    setMinting(true)
    await mintWithRewards()
    await fetchBalance()
    setMinting(false)
  }
  // MessageChannel for communication
  const channel = new MessageChannel()

  function onMessage(event) {
    // Handle incoming messages here
    console.log("Received message:", event.data)
  }

  function callGodotFunction() {
    const iframe = document.querySelector("#godotGame") as HTMLIFrameElement
    if (!iframe) {
      console.error("Iframe not found!")
      return
    }

    console.log(iframe)
    console.log("onload called")

    // Listen for messages on port1
    channel.port1.onmessage = onMessage

    // Transfer port2 to the iframe
    // [heart, camera, money]
    iframe.contentWindow.postMessage([1, 1, 1], "*", [channel.port2])

    console.log("WE DID IT ISAIAH")
  }

  return (
    <div>
      <button type="button" className="text-white" onClick={callGodotFunction}>
        SEND DATA TO GODOT
      </button>
      {openModal && (
        <TokenGateModal title={isConnected ? "unlock" : "connect"}>
          {isConnected ? (
            <div>
              {minting ? (
                <Spinner />
              ) : (
                <Button onClick={mint} id="mint">
                  MINT to unlock
                </Button>
              )}
            </div>
          ) : (
            <ConnectButton />
          )}
        </TokenGateModal>
      )}

      <iframe
        id="godotGame"
        src="/game/index.html"
        title="Hypersurveilled"
        className="h-[90vh] w-[100vw]"
      />
    </div>
  )
}

export default GamePage
