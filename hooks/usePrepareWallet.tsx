import { usePrivy } from "@privy-io/react-auth"

const usePreparePrivyWallet = () => {
  const { ready, user, login, authenticated } = usePrivy()

  const prepare = () => {
    if (!user && ready && !authenticated) {
      login()
      return false
    }
    return true
  }

  return { prepare }
}

export default usePreparePrivyWallet
