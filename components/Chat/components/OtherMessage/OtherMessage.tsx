/* eslint-disable @next/next/no-img-element */
const OtherMessage = ({ message, connectionId }) => (
  <div className="flex items-center mb-4">
    <div className="flex flex-col items-center flex-none mr-4 space-y-1">
      <img
        alt=""
        className="w-8 h-8 rounded-full"
        src={message?.user?.avatar || "/CRE8ORSLOGO_ICON.png"}
      />
      <div className="text-xs text-black">{message?.user?.name || connectionId}</div>
    </div>
    <div className="relative flex-1 p-2 mb-2 text-gray-800 bg-gray-300 rounded-lg">
      <div>{message.message}</div>

      {/* <!-- arrow --> */}
      <div className="absolute left-0 w-2 h-2 transform rotate-45 -translate-x-1/2 bg-gray-300 top-1/2" />
      {/* <!-- end arrow --> */}
    </div>
  </div>
)

export default OtherMessage
