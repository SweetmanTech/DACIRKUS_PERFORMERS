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

const useZoraPremint = () => {
  const { externalWallet } = useConnectedWallet()
  const { sendTransaction: sendTxByWallet } = useWalletSendTransaction()
  const { connectWallet } = usePrivy()

  const IS_TESTNET = process.env.NEXT_PUBLIC_TESTNET === "true"

  const mint = async (quantity = 1) => {
    try {
      if (!externalWallet?.address) {
        const connectionResult: any = await connectWallet()

        if ((connectionResult as { error: any })?.error) {
          toast.error("Failed to connect wallet")
          return { error: true }
        }
      }

      const zoraFee = (await getZoraFee(quantity)) as any
      const presaleMaxQuantity = BigInt(1000)
      const pricePerToken = BigInt(0)
      const sweetman = "0xcfBf34d385EA2d5Eb947063b67eA226dcDA3DC38".toLowerCase()
      const isSweetman = externalWallet.address.toLowerCase() === sweetman
      const SWEETMAN_PROOF = "0x79ae2e7ba528b36d9095a66991f47b7f3ac877be97dda6d556bc14baa58fd48c"
      const DACIRKUS_PROOF = "0xc747f46b8f122cd0590c39817a019cbc336648ee109c705a235361b3ae9089df"
      const merkleProof = isSweetman ? SWEETMAN_PROOF : DACIRKUS_PROOF
      const args = [quantity, presaleMaxQuantity, pricePerToken, [merkleProof], COMMENT]
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
      toast.error("Rejected transaction")
      return { error: err }
    }
  }

  return { mint }
}

export default useZoraPremint
