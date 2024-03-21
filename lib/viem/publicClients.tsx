import { createPublicClient, http } from "viem"
import { CHAIN } from "../consts"

export const publicClient = createPublicClient({
  chain: CHAIN,
  transport: http(),
})