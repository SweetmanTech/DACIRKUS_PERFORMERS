import { erc721Abi } from "viem"
import { publicClient } from "./viem/publicClients"

const getTotalSupply = async () => {
  const contractAddress = process.env.NEXT_PUBLIC_DROP_ADDRESS

  const response = (await publicClient.readContract({
    address: contractAddress as `0x${string}`,
    functionName: "totalSupply",
    args: [],
    abi: erc721Abi as any,
  })) as string
  const totalSupply = response.toString()

  return parseInt(totalSupply, 10)
}

export default getTotalSupply
