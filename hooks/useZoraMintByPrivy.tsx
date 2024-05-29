import handleTxError from "@/lib/handleTxError"
import getZoraFee from "@/lib/viem/getZoraFee"
import { CHAIN_ID, COMMENT, DROP_ADDRESS } from "@/lib/consts"
import abi from "@/lib/abi/zora-drop.json"
import { BigNumber } from "ethers"
import { toast } from "react-toastify"
import getTokenId from "@/lib/getTokenId"
import useSaleStatus from "./useSaleStatus"
import useWalletSendTransaction from "./useWalletSendTransaction"
import { Address, numberToHex } from "viem"
import { publicClient } from "@/lib/viem/publicClients"

const useZoraMintByPrivy = () => {
  const { publicSalePrice } = useSaleStatus()
  const { sendTransaction: sendTxByWallet } = useWalletSendTransaction()

  const purchaseWithComment = async (quantity = 1) => {
    try {
      const zoraFee = (await getZoraFee(quantity)) as any
      const args = [quantity, COMMENT]
      const price = BigNumber.from(publicSalePrice).mul(quantity)
      const totalPrice = price.add(zoraFee[1]).toString()
      const hexValue = numberToHex(BigInt(totalPrice))

      const hash = await sendTxByWallet(
        DROP_ADDRESS,
        CHAIN_ID,
        abi,
        "purchaseWithComment",
        args,
        hexValue,
      )

      if ((hash as { error: any })?.error) {
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

  return { purchaseWithComment }
}

export default useZoraMintByPrivy
