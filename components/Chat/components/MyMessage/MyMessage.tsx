/* eslint-disable @next/next/no-img-element */
const MyMessage = ({ message }) => (
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

      <div className="absolute right-0 w-2 h-2 transform rotate-45 translate-x-1/2 bg-gray-300 top-1/2" />
    </div>
  </div>
)

export default MyMessage
