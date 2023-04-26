import Image from "next/image"
import customLoader from "../../../../lib/customLoader"

const ChatSendAction = ({ handleSendMessage, newMessage }) => (
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
)

export default ChatSendAction
