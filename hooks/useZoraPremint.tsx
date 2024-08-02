import handleTxError from "@/lib/handleTxError"
import getZoraFee from "@/lib/viem/getZoraFee"
import { CHAIN_ID, COMMENT, DROP_ADDRESS } from "@/lib/consts"
import abi from "@/lib/abi/zora-drop.json"
import { Address, numberToHex, zeroAddress } from "viem"
import { toast } from "react-toastify"
import getTokenId from "@/lib/getTokenId"
import { usePrivy } from "@privy-io/react-auth"
import { publicClient } from "@/lib/viem/publicClients"
import useConnectedWallet from "./useConnectedWallet"
import useWalletSendTransaction from "./useWalletSendTransaction"
import proofs from "@/lib/whitelistProof"
import { IS_TESTNET } from "@/lib/consts"

const useZoraPremint = () => {
  const { externalWallet } = useConnectedWallet() as any
  const { sendTransaction: sendTxByWallet } = useWalletSendTransaction() as any
  const { connectWallet } = usePrivy()

  const mint = async (quantity = 1) => {
    try {
      if (!externalWallet?.address) {
        const connectionResult: any = await connectWallet()
        if ((connectionResult as { error: any })?.error) {
          toast.error("Failed to connect wallet")
          return { error: true }
        }
      }

      const zoraFee: any = await getZoraFee(quantity)
      const presaleMaxQuantity = BigInt(1000)
      const pricePerToken = BigInt(0)
      const userProof = proofs[externalWallet.address]
      if (!userProof || userProof.length === 0) {
        toast.error("No proof found for address")
        return { error: true }
      }

      const args = [quantity, presaleMaxQuantity, pricePerToken, userProof, COMMENT]
      const price = zoraFee[1] * BigInt(quantity)
      const totalPrice = price.toString()
      const hexValue = numberToHex(BigInt(totalPrice))

      let methodName = "purchasePresaleWithComment"
      if (IS_TESTNET) {
        methodName = "purchasePresaleWithRewards"
        args.push(zeroAddress)
      }

      const hash = await sendTxByWallet(DROP_ADDRESS, CHAIN_ID, abi, methodName, args, hexValue)

      if ((hash as { error: any })?.error) {
        toast.error("Rejected transaction")
        return { error: true }
      }

      const response = await publicClient.waitForTransactionReceipt({
        hash: hash as Address,
      })

      toast.success("Collected!")
      return getTokenId(response)
    } catch (err) {
      handleTxError(err)
      return { error: err }
    }
  }

  return { mint }
}

export default useZoraPremint
