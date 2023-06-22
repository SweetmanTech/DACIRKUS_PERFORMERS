import { Button } from "../../shared/Button"
import WalletConnectButton from "../WalletConnectButton"

interface ConnectWalletProps {
  handleClose: () => void
}

const ConnectWallet = ({ handleClose }: ConnectWalletProps) => (
  <div
    className="bg-[url('/assets/Common/popup.svg')] w-full m-6 md:w-[400px] h-[400px] samsungS8:h-[500px] md:h-[600px] bg-center shadow-[0px_5px_9px_rgba(0,0,0,0.25)]
            rounded-[20px] flex flex-col justify-center items-center gap-[20px] relative"
  >
    <div className="bg-[black] absolute top-[10px] right-[10px] w-6 h-6 m-2 rounded-full cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="white"
        onClick={handleClose}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </div>
    <div className="font-eigerdals text-[36px]">Connect</div>
    <WalletConnectButton>
      <Button
        id="wallet_connect_btn_in_redeem"
        className="!uppercase w-[200px] !bg-[black] !text-white !shadow-[0px_4px_4px_rgb(0,0,0,0.25)]"
      >
        Wallet Connect
      </Button>
    </WalletConnectButton>
    <Button
      id="cross_mint_btn_in_redeem"
      className="!uppercase w-[200px] !bg-[black] !text-white !shadow-[0px_4px_4px_rgb(0,0,0,0.25)]"
    >
      Cross Mint
    </Button>
  </div>
)

export default ConnectWallet
