import handleTxError from "@/lib/handleTxError"
import { useState } from "react"
import getZoraFee from "@/lib/viem/getZoraFee"
import { CHAIN_ID, COMMENT, DROP_ADDRESS, MINT_REFERRAL } from "@/lib/consts"
import abi from "@/lib/abi/zora-drop.json"
import { numberToHex } from "viem"
import { BigNumber } from "ethers"
import { toast } from "react-toastify"
import { useUserProvider } from "@/providers/UserProvider"
import getTokenId from "@/lib/getTokenId"
import { usePrivy } from "@privy-io/react-auth"
import useConnectedWallet from "./useConnectedWallet"
import usePrivySendTransaction from "./usePrivySendTransaction"
import useSaleStatus from "./useSaleStatus"
import useWalletSendTransaction from "./useWalletSendTransaction"

const useZoraMintByPrivy = () => {
  const { publicSalePrice } = useSaleStatus()
  const { connectedWallet, externalWallet } = useConnectedWallet()
  const { sendTransaction: sendTxByPrivy } = usePrivySendTransaction()
  const { sendTransaction: sendTxByWallet } = useWalletSendTransaction()
  const { isLoggedByEmail } = useUserProvider()
  const { logout } = usePrivy()

  const mintWithRewards = async (quantity = 1) => {
    try {
      if (!connectedWallet && isLoggedByEmail) return { error: true }
      if (!externalWallet?.address && !isLoggedByEmail) {
        await logout()
        return { error: true }
      }

      const zoraFee = (await getZoraFee(quantity)) as any
      const args = [
        isLoggedByEmail ? connectedWallet : externalWallet?.address,
        quantity,
        COMMENT,
        MINT_REFERRAL,
      ]
      const price = BigNumber.from(publicSalePrice).mul(quantity)
      const totalPrice = price.add(zoraFee[1]).toString()
      const hexValue = numberToHex(BigInt(totalPrice))

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
          return { error: true }
        }
        toast.success("Collected!")
        return getTokenId(response)
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
        return { error: true }
      }
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
