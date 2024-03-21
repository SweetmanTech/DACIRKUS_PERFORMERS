import { useWallets } from "@privy-io/react-auth"
import { useMemo } from "react"

const useConnectedWallet = () => {
  const { wallets } = useWallets()
  const privyWallet = wallets?.find((wallet) => wallet.walletClientType === "privy")
  const metamaskWallet = useMemo(
    () => wallets?.find((wallet) => wallet.walletClientType === "metamask"),
    [wallets],
  )
  const connectedWallet = privyWallet?.address

  return { connectedWallet, privyWallet, metamaskWallet }
}

export default useConnectedWallet
