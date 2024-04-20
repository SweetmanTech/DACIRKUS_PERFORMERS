import { Address } from "viem"
import { BigNumber } from "ethers"
import { CHAIN, CHAIN_ID } from "@/lib/consts"
import useConnectedWallet from "./useConnectedWallet"
import usePrivyWalletClient from "./usePrivyWalletClient"

const useWalletSendTransaction = () => {
  const { externalWallet } = useConnectedWallet()
  const { walletClient } = usePrivyWalletClient()

  const sendTransaction = async (
    to: Address,
    chainId: any,
    abi: any,
    functionName: string,
    args,
    value = BigNumber.from("0").toHexString(),
    gasLimit = 0,
  ) => {
    if (!externalWallet) return { error: true }
    try {
      const privyChainId = externalWallet.chainId
      if (privyChainId !== `eip155:${chainId}`) {
        await externalWallet.switchChain(CHAIN_ID)
        return { error: true }
      }
      if (walletClient) {
        const data = {
          value,
        } as any
        if (gasLimit) {
          data.gasLimit = gasLimit
        }
        const hash = await walletClient.writeContract({
          address: to,
          abi,
          chain: CHAIN,
          functionName,
          account: externalWallet.address as Address,
          args,
          value,
        })
        return hash
      }
      return { error: true }
    } catch (error) {
      return { error }
    }
  }

  return {
    sendTransaction,
  }
}

export default useWalletSendTransaction
