import { BigNumber, Contract } from "ethers"
import { useAccount } from "wagmi"
import { toast } from "react-toastify"
import abi from "../lib/abi/zora-drop.json"
import { useEthersSigner } from "./useEthersSigner"
import handleTxError from "../lib/handleTxError"
import useCheckNetwork from "./useCheckNetwork"
import useSaleStatus from "./useSaleStatus"
import { CHAIN_ID } from "../lib/consts"

const useZoraMint = () => {
  const signer = useEthersSigner({ chainId: CHAIN_ID })
  const { publicSalePrice } = useSaleStatus()
  const { checkNetwork } = useCheckNetwork()
  const { address } = useAccount()

  const mintWithRewards = async () => {
    try {
      if (!checkNetwork()) {
        throw new Error("switch your network")
      }
      const quantity = 1
      const contract = new Contract(process.env.NEXT_PUBLIC_DROP_ADDRESS, abi, signer)
      const zoraFee = await contract.zoraFeeForAmount(quantity)
      const zoraFeeWei = zoraFee.fee
      const comment = "relief is here!"
      const mintReferral = process.env.NEXT_PUBLIC_MINT_REFERRAL
      const tx = await contract.mintWithRewards(address, quantity, comment, mintReferral, {
        value: BigNumber.from(publicSalePrice).add(zoraFeeWei).toString(),
        gasLimit: 300293,
      })
      const receipt = await tx.wait()
      toast.success("unlocked!")
      return receipt
    } catch (err) {
      handleTxError(err)
      return { err }
    }
  }

  return {
    mintWithRewards,
  }
}
export default useZoraMint
