import { useState } from "react"
import dynamic from "next/dynamic"
import ChatButton from "./components/ChatButton"

const ChatBox = dynamic(() => import("./components/ChatBox"), { ssr: false })

const Chat = () => {
  const [openChat, setOpenChat] = useState(false)

  return (
    <div className="fixed z-40 bottom-4 right-4">
      <div className="flex space-x-4">
        <ChatButton setOpenChat={setOpenChat} openChat={openChat} />
        {openChat && <ChatBox setOpenChat={setOpenChat} roomName="cre8ors" />}
      </div>
    </div>
  )
}

export default Chat
