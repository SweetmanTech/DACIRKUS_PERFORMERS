import Image from "next/image"
import customLoader from "../../../../lib/customLoader"

const ChatBoxAction = ({ setOpenChat }) => (
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
)

export default ChatBoxAction
