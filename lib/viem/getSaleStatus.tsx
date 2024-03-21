import { DROP_ADDRESS } from "../consts"
import { publicClient } from "./publicClients"
import abi from "@/lib/abi/zora-drop.json"

const getSaleStatus = async () => {
  const response = await publicClient.readContract({
    address: DROP_ADDRESS as `0x${string}`,
    abi,
    functionName: "saleDetails",
  })
  return response
}

export default getSaleStatus
