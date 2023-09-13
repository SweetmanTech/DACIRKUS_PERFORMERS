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

  return (
    <div>
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
      <iframe src="/game/index.html" title="Hypersurveilled" className="h-[100vh] w-[100vw]" />
    </div>
  )
}

export default GamePage
