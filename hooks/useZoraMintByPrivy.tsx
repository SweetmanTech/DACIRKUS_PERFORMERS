import handleTxError from "@/lib/handleTxError"
import getZoraFee from "@/lib/viem/getZoraFee"
import { CHAIN_ID, COMMENT, DROP_ADDRESS, MINT_REFERRAL } from "@/lib/consts"
import abi from "@/lib/abi/zora-drop.json"
import { BigNumber } from "ethers"
import { toast } from "react-toastify"
import getTokenId from "@/lib/getTokenId"
import useConnectedWallet from "./useConnectedWallet"
import useSaleStatus from "./useSaleStatus"
import useWalletSendTransaction from "./useWalletSendTransaction"
import { Address, numberToHex } from "viem"
import { publicClient } from "@/lib/viem/publicClients"

const useZoraMintByPrivy = () => {
  const { publicSalePrice } = useSaleStatus()
  const { externalWallet } = useConnectedWallet()
  const { sendTransaction: sendTxByWallet } = useWalletSendTransaction()

  const mintWithRewards = async (quantity = 1) => {
    try {
      const zoraFee = (await getZoraFee(quantity)) as any
      const args = [externalWallet?.address, quantity, COMMENT, MINT_REFERRAL]
      const price = BigNumber.from(publicSalePrice).mul(quantity)
      const totalPrice = price.add(zoraFee[1]).toString()
      const hexValue = numberToHex(BigInt(totalPrice))

      const hash = await sendTxByWallet(
        DROP_ADDRESS,
        CHAIN_ID,
        abi,
        "mintWithRewards",
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

  return { mintWithRewards }
}

export default useZoraMintByPrivy
