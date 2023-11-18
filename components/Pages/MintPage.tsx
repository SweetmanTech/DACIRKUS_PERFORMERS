import { ConnectButton } from "@rainbow-me/rainbowkit"
import MintButton from "../MintButton"

const MintPage = () => (
  <div className="flex flex-col justify-center items-center h-[100vh] gap-10">
    <ConnectButton />
    <MintButton />
  </div>
)

export default MintPage
