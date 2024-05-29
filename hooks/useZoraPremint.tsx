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

  const proofs = {
    "0xcfBf34d385EA2d5Eb947063b67eA226dcDA3DC38": [
      "0x79ae2e7ba528b36d9095a66991f47b7f3ac877be97dda6d556bc14baa58fd48c",
      "0xe53af2c068a9cdc44419aab8ef2c87391de598b03c3ffb96bd7cbf6596b1401c",
      "0xd21f5feddcc3d35cd8be74a8fab3d273bcf105802e994e6cd38148a3f0bb409b",
    ],
    "0x99Fc221482ca78664d0288FfC6531cb6dfEB0c5a": [
      "0xc747f46b8f122cd0590c39817a019cbc336648ee109c705a235361b3ae9089df",
      "0xe53af2c068a9cdc44419aab8ef2c87391de598b03c3ffb96bd7cbf6596b1401c",
      "0xd21f5feddcc3d35cd8be74a8fab3d273bcf105802e994e6cd38148a3f0bb409b",
    ],
    "0x2d9cBC4ECFBd1B8F66Aa798FD51585AE058dAA8B": [
      "0x435b4b6f4febd0edd0411b79d734142bf8c880d2db1774963bb4dfe5572cc469",
      "0xbf5a93086a031f88f7d1f69c8c1ab220538b7ad30c0f18677d027da4fda42b7b",
      "0xd21f5feddcc3d35cd8be74a8fab3d273bcf105802e994e6cd38148a3f0bb409b",
    ],
    "0x7A631B4a6b1D0a6b1e433d92690d7C8Aba4F23b4": [
      "0xde37fa6315e7360a88d171177da36b4a8a78f077b54d641d3c06c3fa71c82bc1",
      "0xbf5a93086a031f88f7d1f69c8c1ab220538b7ad30c0f18677d027da4fda42b7b",
      "0xd21f5feddcc3d35cd8be74a8fab3d273bcf105802e994e6cd38148a3f0bb409b",
    ],
    "0xD6C09962E907428112069273d5C0dc861e7B1C57": [
      "0xb2fba823c6055838ce2e24ec6811b5c6c4f1d1f534accd2ffe1d2337e77781b3",
      "0xe92dbb07144ca4e089c008c40b719e36aeedca2f9bbd53e93d5798be6a786190",
      "0xf71a76852c04934569812e34ed297ac538e514d698a7ceb323a478c7fa743b48",
    ],
    "0x5a5811E0A22695FEC271fe908E2a1A64Dc3b06F9": [
      "0x2806457768f3484cf8e28f881ac1ef1e160d4b2c4762d797bdf989ff517fb7c9",
      "0x9d8778a3ec8c707da2db94e35372c92afb6d39d87a703745cb3742a6d1bf479b",
      "0xd21f5feddcc3d35cd8be74a8fab3d273bcf105802e994e6cd38148a3f0bb409b",
    ],
    "0x254768D47Cf8958a68242ce5AA1aDB401E1feF2B": [],
    "0xA0EA34448738357e0c2e58147b5719A19022ac76": [
      "0x0ba6f3024273ff5ad6a1f2b31edc007340a4506dac805115ba4a6357d03cfdb6",
      "0xb963774743ecd20c08006daac20e62eddd7ce74623fa596939b0a316fa9f5dd6",
      "0xf71a76852c04934569812e34ed297ac538e514d698a7ceb323a478c7fa743b48",
    ],
  }

  const mint = async (quantity = 1) => {
    try {
      if (!externalWallet?.address) {
        const connectionResult: any = await connectWallet()
        if ((connectionResult as { error: any })?.error) {
          toast.error("Failed to connect wallet")
          return { error: true }
        }
      }

      const zoraFee = await getZoraFee(quantity)
      const presaleMaxQuantity = BigInt(1000)
      const pricePerToken = BigInt(0)
      const userProof = proofs[externalWallet.address]
      console.log(externalWallet.address)
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

      if (hash.error) {
        toast.error("Rejected transaction")
        console.error("Transaction rejected:", hash)
        return { error: true }
      }

      const response = await publicClient.waitForTransactionReceipt({
        hash: hash as Address,
      })

      toast.success("Collected!")
      return getTokenId(response)
    } catch (err) {
      handleTxError(err)
      toast.error("Transaction rejected")
      console.error("Transaction error:", err)
      return { error: err }
    }
  }

  return { mint }
}

export default useZoraPremint
