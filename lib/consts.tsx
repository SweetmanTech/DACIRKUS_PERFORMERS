import { Address } from "viem"
import { Chain, base, baseSepolia } from "viem/chains"

export const IS_TESTNET = process.env.NEXT_PUBLIC_TESTNET
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
export const COMMENT = "!!!"
export const MINT_REFERRAL = process.env.NEXT_PUBLIC_MINT_REFERRAL
