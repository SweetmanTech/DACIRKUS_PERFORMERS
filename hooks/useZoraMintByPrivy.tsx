import handleTxError from "@/lib/handleTxError"
import useSaleStatus from "./useSaleStatus"
import { useState } from "react"
import getZoraFee from "@/lib/viem/getZoraFee"
import useConnectedWallet from "./useConnectedWallet"
import usePrivySendTransaction from "./usePrivySendTransaction"
import { CHAIN_ID, DROP_ADDRESS } from "@/lib/consts"
import abi from "@/lib/abi/zora-drop.json"
import { numberToHex } from "viem"
import { BigNumber } from "ethers"
import usePreparePrivyWallet from "./usePrepareWallet"
import { toast } from "react-toastify"

const useZoraMinByPrivy = () => {
  const { publicSalePrice } = useSaleStatus()
  const { connectedWallet } = useConnectedWallet()
  const { sendTransaction: sendTxByPrivy } = usePrivySendTransaction()
  const { prepare } = usePreparePrivyWallet()
  const [loading, setLoading] = useState(false)

  const mintWithRewards = async () => {
    try {
      if (!prepare() || !connectedWallet) return {error: true}
      
      setLoading(true)
      const quantity = 1
      const zoraFee = await getZoraFee(1) as any
      const comment = "!!!"
      const mintReferral = process.env.NEXT_PUBLIC_MINT_REFERRAL
      const args = [connectedWallet, quantity, comment, mintReferral]
      const price = BigNumber.from(publicSalePrice).add(zoraFee[1]).toString()
      const hexValue = numberToHex(BigInt(price))

      const response = await sendTxByPrivy(
        DROP_ADDRESS,
        CHAIN_ID,
        abi,
        "mintWithRewards",
        args,
        hexValue,
        "Collect",
        "Collect",
      )

      const { error: privyError } = response as any
      if (privyError) {
        setLoading(false)
        return {error: true}
      }
      setLoading(false)
      toast.success('Collected!')
      return response
    } catch (err) {
      setLoading(false)
      // eslint-disable-next-line no-console
      console.error(err)
      handleTxError(err)
      return { error: err }
    }
  }

  return { mintWithRewards, loading }
}

export default useZoraMinByPrivy
