import handleTxError from "@/lib/handleTxError"
import getZoraFee from "@/lib/viem/getZoraFee"
import { CHAIN_ID, COMMENT, DROP_ADDRESS } from "@/lib/consts"
import abi from "@/lib/abi/zora-drop.json"
import { numberToHex } from "viem"
import { toast } from "react-toastify"
import getTokenId from "@/lib/getTokenId"
import { usePrivy } from "@privy-io/react-auth"
import useConnectedWallet from "./useConnectedWallet"
import useWalletSendTransaction from "./useWalletSendTransaction"

const useZoraPremint = () => {
  const { externalWallet } = useConnectedWallet()
  const { sendTransaction: sendTxByWallet } = useWalletSendTransaction()
  const { connectWallet } = usePrivy()

  const mint = async (quantity = 1) => {
    try {
      if (!externalWallet?.address) {
        await connectWallet()
        return { error: true }
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

      const response = await sendTxByWallet(
        DROP_ADDRESS,
        CHAIN_ID,
        abi,
        "purchasePresaleWithComment",
        args,
        hexValue,
      )
      const { error: walletError } = response as any
      if (walletError) {
        return { error: true }
      }
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
