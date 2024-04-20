import { usePrivy, useWallets } from "@privy-io/react-auth"
import { useMemo } from "react"

const useConnectedWallet = () => {
  const { wallets } = useWallets()
  const { ready, authenticated, user } = usePrivy()
  const isLoggedByEmail = Boolean(user?.email?.address)
  const isAuthenticated = ready && authenticated
  const privyWallet = wallets?.find((wallet) => wallet.walletClientType === "privy")
  const externalWallets = useMemo(
    () => wallets?.filter((wallet) => wallet.walletClientType !== "privy"),
    [wallets],
  )
  const externalWallet = externalWallets?.length ? externalWallets[0] : null
  const wallet = isLoggedByEmail ? privyWallet : externalWallet
  const loggedInWallet = isAuthenticated ? wallet : null
  const connectedWallet = loggedInWallet?.address

  return {
    connectedWallet,
    externalWallet,
    wallet: loggedInWallet,
  }
}

export default useConnectedWallet
