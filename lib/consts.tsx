import { zora, zoraTestnet } from "@wagmi/core/chains"

export const CHAIN_ID = process.env.NEXT_PUBLIC_TESTNET ? zoraTestnet.id : zora.id
