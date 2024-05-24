import abi from "@/lib/abi/zora-drop.json"
import { DROP_ADDRESS } from "../consts"
import { publicClient } from "./publicClients"

const getSaleStatus = async () => {
  //@ts-ignore
  const response = await publicClient.readContract({
    address: DROP_ADDRESS as `0x${string}`,
    abi,
    functionName: "saleDetails",
  })
  return response
}

export default getSaleStatus
