import { erc721Abi } from "viem"
import { publicClient } from "./viem/publicClients"

const tokenMinted = async (contractAddress: string, tokenId: string) => {
  const response = (await publicClient.readContract({
    address: contractAddress as `0x${string}`,
    functionName: "totalSupply",
    args: [],
    abi: erc721Abi as any,
  })) as string
  const totalSupply = response.toString()

  if (parseInt(tokenId, 10) > parseInt(totalSupply, 10)) return false

  return true
}

export default tokenMinted
