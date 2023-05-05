/* eslint-disable @next/next/no-img-element */
const MyMessage = ({ message }) => (
  <div className="flex flex-row-reverse items-center mb-4">
    <div className="flex flex-col items-center flex-none ml-4 space-y-1">
      <img alt="" className="w-6 h-8 rounded-full" src="/CRE8ORSLOGO_ICON.svg" />
    </div>
    <div className="relative flex-1 p-2 mb-2 text-gray-800 bg-gray-300 rounded-lg">
      <div>{message.data}</div>

      <div className="absolute right-0 w-2 h-2 transform rotate-45 translate-x-1/2 bg-gray-300 top-1/2" />
    </div>
  </div>
)

export default MyMessage
