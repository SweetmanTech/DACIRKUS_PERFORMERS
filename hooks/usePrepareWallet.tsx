import { useLogin, usePrivy } from "@privy-io/react-auth"

// eslint-disable-next-line no-console
const usePreparePrivyWallet = (onComplete: any = () => console.log) => {
  const { user, authenticated } = usePrivy()
  const { login } = useLogin({ onComplete })

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
