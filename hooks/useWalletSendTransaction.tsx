import { BigNumber, Contract } from "ethers"
import useConnectedWallet from "./useConnectedWallet"
import { CHAIN_ID } from "@/lib/consts"
import usePrivyEthersSigner from "./usePrivyEthersSigner"

const useWalletSendTransaction = () => {
  const { externalWallet } = useConnectedWallet()
  const { signer } = usePrivyEthersSigner()

  const sendTransaction = async (
    to,
    chainId: any,
    abi: any,
    functionName: string,
    args,
    value = BigNumber.from("0").toHexString(),
    gasLimit = 0,
  ) => {
    if (!externalWallet) return {error: true}
    try {
      const privyChainId = externalWallet.chainId
      if (privyChainId !== `eip155:${chainId}`) {
        await externalWallet.switchChain(CHAIN_ID)
        return {error: true}
      }
      const contract = new Contract(to, abi, signer)
      if (signer) {
        const data = {
          value,
        } as any
        if (gasLimit) {
          data.gasLimit = gasLimit
        }
        const tx = await contract[functionName](...args, data)
        const txHash = tx.wait()
        return txHash
      }
      return { error: true }
    } catch (error) {
      console.log(error)
      return { error }
    }
  }

  return {
    sendTransaction,
  }
}

export default useWalletSendTransaction
