import abi from "@/lib/abi/zora-drop.json"
import { DROP_ADDRESS } from "../consts"
import { publicClient } from "./publicClients"

const getZoraFee = async (quantity) => {
  const response = await publicClient.readContract({
    address: DROP_ADDRESS as `0x${string}`,
    abi,
    functionName: "zoraFeeForAmount",
    args: [quantity],
  })
  return response
}

export default getZoraFee
