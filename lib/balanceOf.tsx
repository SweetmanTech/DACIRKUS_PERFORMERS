import { erc721Abi, Address } from "viem"
import { publicClient } from "./viem/publicClients"

const balanceOf = async (owner: Address) => {
  const contractAddress = process.env.NEXT_PUBLIC_DROP_ADDRESS

  const response = (await publicClient.readContract({
    address: contractAddress as Address,
    functionName: "balanceOf",
    args: [owner],
    abi: erc721Abi as any,
  })) as string

  const balance = response.toString()
  return parseInt(balance, 10)
}

export default balanceOf
