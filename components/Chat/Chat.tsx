import dynamic from "next/dynamic"
import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { useAccount } from "wagmi"
import ChatButton from "./components/ChatButton"
import { useChatProvider } from "../../providers/ChatProvider"
import ChatLogin from "./components/ChatLogin"

const ChatBox = dynamic(() => import("./components/ChatBox"), { ssr: true })

const Chat = () => {
  const { openChat } = useChatProvider()
  const [loggedIn, setLoggedIn] = useState(false)
  const { data: session }: any = useSession()
  const { address } = useAccount()
  useEffect(() => {
    setLoggedIn(session?.user || address)
  }, [session, address])
  return (
    <div className="fixed z-40 bottom-4 right-4">
      <div className="flex space-x-4">
        <ChatButton />
        {openChat && loggedIn && <ChatBox />}
        {openChat && !loggedIn && <ChatLogin />}
      </div>
    </div>
  )
}

export default Chat
