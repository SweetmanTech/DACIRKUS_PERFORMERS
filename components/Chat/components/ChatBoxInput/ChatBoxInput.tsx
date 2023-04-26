const ChatBoxInput = ({ newMessage, handleNewMessageChange, handleSendMessage }) => (
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
)

export default ChatBoxInput
