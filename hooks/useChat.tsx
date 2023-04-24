import { useEffect, useRef, useState } from "react"
import * as Ably from "ably/promises"
import { configureAbly } from "@ably-labs/react-hooks"

const useChat = (channelRoom: string) => {
  const [messages, setMessages] = useState([])
  const [channel, setChannel] = useState<Ably.Types.RealtimeChannelPromise | null>(null)
  const [ably, setAbly] = useState<Ably.Types.RealtimePromise | null>(null)
  const messageEnd = useRef(null)

  useEffect(() => {
    messageEnd.current.scrollIntoView({ behaviour: "smooth" })
  })

  useEffect(() => {
    const tempAbly: Ably.Types.RealtimePromise = configureAbly({
      authUrl: "/api/createTokenRequest",
    })

    const tempChannel = tempAbly.channels.get(channelRoom)

    tempChannel.subscribe((message: Ably.Types.Message) => {
      const history = messages.slice(-199)
      setMessages([...history, message])
    })
    setChannel(tempChannel)
    setAbly(tempAbly)

    return () => {
      tempChannel.unsubscribe()
    }
  }, [setChannel, setMessages, messages, channelRoom])
  const sendChatMessage = (message) => {
    channel.publish({ name: channelRoom, data: message })
  }
  return { messages, channel, ably, messageEnd, sendChatMessage }
}

export default useChat
