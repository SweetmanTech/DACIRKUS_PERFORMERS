import { Address } from "viem"
import { Chain, base, baseSepolia } from "viem/chains"

export const IS_TESTNET = process.env.NEXT_PUBLIC_TESTNET === "true"
export const CHAIN = (IS_TESTNET ? baseSepolia : base) as Chain
export const CHAIN_ID = CHAIN.id
export const SPOTIFY_CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID
export const SPOTIFY_CLIENT_SECRET = process.env.NEXT_PUBLIC_CLIENT_SECRET
export const SPOTIFY_REDIRECT_URI = process.env.NEXT_PUBLIC_REDIRECT_URI
export const SPOTIFY_STATE_KEY = "spotify_auth_state"
export const RELIEF_TRACK_ID = "5aDNHHNXc16VktqV1gSq23"
export const HENO_ARTIST_ID = "3mr6jeVpPIXBp8IMMb60aD"
export const TITLE = "DaPerformers"
export const ARTIST = "DaCirkus"
export const DROP_ADDRESS = process.env.NEXT_PUBLIC_DROP_ADDRESS as Address
export const ZORA_COLLECTION_URL = IS_TESTNET
  ? `https://testnets.opensea.io/assets/base-sepolia/${DROP_ADDRESS}`
  : `https://zora.co/collect/base:${DROP_ADDRESS}`

export const DOMAIN_URL = "https://daperformers.com"
export const COMMENT = "Da Performers are coming!!!"
export const MINT_REFERRAL = process.env.NEXT_PUBLIC_MINT_REFERRAL

export const whitelist = [
  "0x2d9cBC4ECFBd1B8F66Aa798FD51585AE058dAA8B",
  "0x7A631B4a6b1D0a6b1e433d92690d7C8Aba4F23b4",
  "0xD6C09962E907428112069273d5C0dc861e7B1C57",
  "0x5a5811E0A22695FEC271fe908E2a1A64Dc3b06F9",
  "0x254768D47Cf8958a68242ce5AA1aDB401E1feF2B",
  "0xb5acDED340D66678f01097818940A0F028DAFB8d", // sweetman.eth
  "0x99Fc221482ca78664d0288FfC6531cb6dfEB0c5a", // dacirkus.eth
]
