import { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react"
import * as Ably from "ably/promises"
import { configureAbly } from "@ably-labs/react-hooks"
import { ChatContext } from "./ChatContext"

export const useChatProvider = () => useContext(ChatContext)

export const ChatProvider = ({ children }) => {
  const [openChat, setOpenChat] = useState(false)
  const [messages, setMessages] = useState([])
  const [channel, setChannel] = useState<Ably.Types.RealtimeChannelPromise | null>(null)
  const [ably, setAbly] = useState<Ably.Types.RealtimePromise | null>(null)
  const messageEnd = useRef(null)
  useEffect(() => {
    messageEnd?.current?.scrollIntoView({ behaviour: "smooth" })
  })
  useEffect(() => {
    const tempAbly: Ably.Types.RealtimePromise = configureAbly({
      authUrl: "/api/createTokenRequest",
    })

    const tempChannel = tempAbly.channels.get(`[?rewind=60s]cre8ors`)
    tempChannel.subscribe((message: Ably.Types.Message) => {
      const history = messages.slice(-199)
      setMessages([...history, message])
    })
    setChannel(tempChannel)
    setAbly(tempAbly)

    return () => {
      tempChannel.unsubscribe()
    }
  }, [setChannel, setMessages, messages])

  const sendChatMessage = useCallback(
    (message) => {
      channel.publish({ name: "cre8ors", data: message })
    },
    [channel],
  )
  const value = useMemo(
    () => ({
      openChat,
      setOpenChat,
      sendChatMessage,
      messages,
      channel,
      ably,
      messageEnd,
    }),
    [openChat, setOpenChat, sendChatMessage, messages, channel, ably, messageEnd],
  )
  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>
}
