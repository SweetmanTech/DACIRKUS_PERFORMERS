import { usePrivy } from "@privy-io/react-auth"

const SignButton = ({ className = "" }) => {
  const { authenticated, logout, login } = usePrivy()

  const handleClick = () => {
    if (authenticated) {
      logout()
      return
    }

    login()
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`text-[18px] font-bold uppercase bg-gray rounded-full
      px-[10px] py-[10px] ${className}`}
    >
      {authenticated ? "Logout" : "Connect"}
    </button>
  )
}

export default SignButton
