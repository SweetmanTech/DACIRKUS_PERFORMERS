import { usePrivy } from "@privy-io/react-auth"

const usePreparePrivyWallet = () => {
  const { user, login, authenticated } = usePrivy()

  const prepare = () => {
    if (!user || !authenticated) {
      login()
      return false
    }
    return true
  }

  return { prepare }
}

export default usePreparePrivyWallet
