import { useState } from "react"
import Image from "next/image"
import useChat from "../../../../hooks/useChat"
import customLoader from "../../../../lib/customLoader"
/* eslint-disable @next/next/no-img-element */
const ChatBox = ({ setOpenChat, roomName }) => {
  const [newMessage, setNewMessage] = useState("")
  const { messages, ably, messageEnd, sendChatMessage } = useChat(
    roomName.toLowerCase().replace(" ", "-"),
  )

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value)
  }
  const handleSendMessage = () => {
    sendChatMessage(newMessage)
    setNewMessage("")
  }

  const myMessage = (message) => (
    <div className="flex flex-row-reverse items-center mb-4">
      <div className="flex flex-col items-center flex-none ml-4 space-y-1">
        <img
          alt=""
          className="w-10 h-10 rounded-full"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        />
      </div>
      <div className="relative flex-1 p-2 mb-2 text-gray-800 bg-gray-300 rounded-lg">
        <div>{message.data}</div>

        <div className="absolute w-4 h-4 transform rotate-45 translate-x-1/2 bg-gray-300 right-1 top-1/2" />
      </div>
    </div>
  )

  const otherMessage = (message) => (
    <div className="flex items-center mb-4">
      <div className="flex flex-col items-center flex-none mr-4 space-y-1">
        <img
          alt=""
          className="w-10 h-10 p-0.5 border-2 border-black rounded-md "
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        />
        <div className="text-sm text-black">{message.connectionId}</div>
      </div>
      <div className="relative flex-1 p-2 mb-2 text-gray-800 bg-gray-300 rounded-lg">
        <div>{message.data}</div>

        {/* <!-- arrow --> */}
        <div className="absolute w-4 h-4 transform rotate-45 -translate-x-1/2 bg-gray-300 left-1 top-1/2" />
        {/* <!-- end arrow --> */}
      </div>
    </div>
  )
  return (
    // <!-- chat box -->

    <div className="flex flex-col bg-white border-4 border-black rounded-lg shadow-md lg:md:w-[400px] w-72 lg:md:h-[600px] h-96">
      <div className="flex items-center justify-between p-2 border-b-4 border-black">
        {/* <!-- user info --> */}
        <div className="flex items-center">
          <div className="pl-2">
            <div className="font-semibold">
              <div className="text-2xl text-black hover:underline">Chat</div>
            </div>
          </div>
        </div>
        {/* <!-- end user info --> */}
        {/* <!-- chat box action --> */}
        <div>
          <button
            className="inline-flex p-2 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
            type="button"
            onClick={() => setOpenChat(false)}
          >
            <Image
              src="/chatbox/BUTTON_MINIMIZE.svg"
              alt="Minimize Chat"
              width={20}
              height={20}
              loader={customLoader}
            />
          </button>
        </div>
        {/* <!-- end chat box action --> */}
      </div>

      <div className="flex-1 h-full px-4 py-4 overflow-y-auto">
        {messages.map((message) => {
          if (message.connectionId === ably.connection.id) {
            return myMessage(message)
          }
          return otherMessage(message)
        })}
        <div
          ref={(element) => {
            messageEnd.current = element
          }}
        />
      </div>

      <div className="flex items-center p-2 border-t-4 border-black">
        <div className="w-full focus:outline-none">
          <input
            className="w-full h-12 p-2 text-black border-4 border-black rounded-md focus:border-black focus:ring-0"
            type="text"
            value={newMessage}
            placeholder="Aa"
            onChange={(e) => handleNewMessageChange(e)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.stopPropagation()
                e.preventDefault()
                handleSendMessage()
              }
            }}
          />
        </div>

        {/* <!-- chat send action --> */}

        <div>
          <button
            className="inline-flex p-2 disabled:cursor-not-allowed disabled:opacity-25"
            type="button"
            onClick={() => handleSendMessage()}
            disabled={newMessage.length === 0}
          >
            <Image
              src="/chatbox/BUTTON_SEND.svg"
              alt="Send Message"
              width={40}
              height={40}
              loader={customLoader}
            />
          </button>
        </div>

        {/* <!-- end chat send action --> */}
      </div>
    </div>
  )
}
// <!-- end chat box -->

export default ChatBox
