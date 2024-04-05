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
import { useUserProvider } from "@/providers/UserProvider"
import useWalletSendTransaction from "./useWalletSendTransaction"
import getTokenId from "@/lib/getTokenId"

const useZoraMintByPrivy = () => {
  const { publicSalePrice } = useSaleStatus()
  const { connectedWallet, externalWallet } = useConnectedWallet()
  const { sendTransaction: sendTxByPrivy } = usePrivySendTransaction()
  const { sendTransaction: sendTxByWallet } = useWalletSendTransaction()
  const { prepare } = usePreparePrivyWallet()
  const [loading, setLoading] = useState(false)
  const { isLoggedByEmail } = useUserProvider()

  const mintWithRewards = async () => {
    try {
      if (!prepare()) return { error: true }
      if (!connectedWallet && isLoggedByEmail) return { error: true }

      setLoading(true)
      const quantity = 1
      const zoraFee = (await getZoraFee(1)) as any
      const comment = "!!!"
      const mintReferral = process.env.NEXT_PUBLIC_MINT_REFERRAL
      console.log("SWEETS mintReferral", mintReferral)
      console.log("SWEETS externalWallet.address", externalWallet?.address)
      console.log(
        "SWEETS isLoggedByEmail ? connectedWallet : externalWallet.address",
        isLoggedByEmail ? connectedWallet : externalWallet?.address,
      )

      const args = [
        isLoggedByEmail ? connectedWallet : externalWallet?.address,
        quantity,
        comment,
        mintReferral,
      ]
      const price = BigNumber.from(publicSalePrice).add(zoraFee[1]).toString()
      const hexValue = numberToHex(BigInt(price))

      if (isLoggedByEmail) {
        const response = (await sendTxByPrivy(
          DROP_ADDRESS,
          CHAIN_ID,
          abi,
          "mintWithRewards",
          args,
          hexValue,
          "Collect",
          "Collect",
        )) as any

        const { error: privyError } = response
        if (privyError) {
          setLoading(false)
          return { error: true }
        }
        toast.success("Collected!")
        setLoading(false)
        return getTokenId(response.logs[3].topics[3])
      }

      const response = await sendTxByWallet(
        DROP_ADDRESS,
        CHAIN_ID,
        abi,
        "mintWithRewards",
        args,
        hexValue,
      )
      const { error: walletError } = response as any
      if (walletError) {
        setLoading(false)
        return { error: true }
      }
      setLoading(false)
      toast.success("Collected!")
      return getTokenId(response.logs[3].topics[3])
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

export default useZoraMintByPrivy
