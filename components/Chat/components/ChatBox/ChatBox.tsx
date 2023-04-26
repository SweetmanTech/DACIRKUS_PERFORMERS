import { useState } from "react"
import { useChatProvider } from "../../../../providers/ChatProvider"
import ChatBoxAction from "../ChatBoxAction"
import UserInfo from "../UserInfo"
import MyMessage from "../MyMessage"
import OtherMessage from "../OtherMessage"
import ChatSendAction from "../ChatSendAction"
import ChatBoxInput from "../ChatBoxInput"
/* eslint-disable @next/next/no-img-element */
const ChatBox = () => {
  const [newMessage, setNewMessage] = useState("")
  const { messages, ably, messageEnd, sendChatMessage, setOpenChat } = useChatProvider()

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value)
  }
  const handleSendMessage = () => {
    sendChatMessage(newMessage)
    setNewMessage("")
  }

  return (
    <div className="flex flex-col bg-white border-4 border-black rounded-lg shadow-md lg:md:w-[400px] w-72 lg:md:h-[600px] h-96">
      <div className="flex items-center justify-between p-2 border-b-4 border-black">
        <UserInfo />
        <ChatBoxAction setOpenChat={setOpenChat} />
      </div>

      <div className="flex-1 h-full px-4 py-4 overflow-y-auto">
        {messages.map((message) => {
          if (message.connectionId === ably.connection.id) {
            return <MyMessage message={message} key={message} />
          }
          return <OtherMessage message={message} key={message} />
        })}
        <div
          ref={(element) => {
            messageEnd.current = element
          }}
        />
      </div>

      <div className="flex items-center p-2 border-t-4 border-black">
        <ChatBoxInput
          handleNewMessageChange={handleNewMessageChange}
          newMessage={newMessage}
          handleSendMessage={handleSendMessage}
        />
        <ChatSendAction handleSendMessage={handleSendMessage} newMessage={newMessage} />
      </div>
    </div>
  )
}
// <!-- end chat box -->

export default ChatBox
