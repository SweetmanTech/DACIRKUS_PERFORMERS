import { useEffect, useState } from "react"
import { Chain, WalletClient, createWalletClient, custom } from "viem"
import { CHAIN } from "@/lib/consts"
import useConnectedWallet from "./useConnectedWallet"

const usePrivyWalletClient = (chain = CHAIN as Chain) => {
  const { externalWallet } = useConnectedWallet()
  const [walletClient, setWalletClient] = useState<WalletClient | null>(null)

  useEffect(() => {
    const init = async () => {
      const provider = await externalWallet.getEthereumProvider()
      const response = createWalletClient({
        chain,
        account: externalWallet.address as `0x${string}`,
        transport: custom(provider),
      })
      setWalletClient(response)
    }

    if (!externalWallet.address || !chain) return
    init()
  }, [externalWallet.address, chain])

  return { walletClient }
}

export default usePrivyWalletClient
