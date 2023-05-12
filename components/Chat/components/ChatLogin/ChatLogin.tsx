import { signIn } from "next-auth/react"
import Button3D from "../../../Button3D"
import WalletConnectButton from "../../../WalletConnectButton"
import ChatBoxAction from "../ChatBoxAction"
import { useChatProvider } from "../../../../providers/ChatProvider"

const ChatLogin = () => {
  const { setOpenChat, setUserType } = useChatProvider()
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-2 bg-white border rounded-md shadow-md w-80 h-96">
      <ChatBoxAction setOpenChat={() => setOpenChat(false)} />
      <div className="text-2xl text-center font-eigerdals">Login To Start Chatting</div>
      <Button3D
        text="Twitter"
        onClick={() => {
          setUserType("twitter")
          signIn("twitter", { callbackUrl: `${window.location.pathname}` })
        }}
      />
      <WalletConnectButton>
        <Button3D text="Wallet" onClick={() => setUserType("wallet")} />
      </WalletConnectButton>
      <Button3D text="Annonymous" onClick={() => setUserType("anonymous")} />
    </div>
  )
}

export default ChatLogin
