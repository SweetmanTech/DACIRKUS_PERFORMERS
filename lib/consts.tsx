import { base, baseSepolia } from "viem/chains"

export const IS_TESTNET = process.env.NEXT_PUBLIC_TESTNET
export const CHAIN = IS_TESTNET ? baseSepolia : base
export const CHAIN_ID = CHAIN.id
export const SPOTIFY_CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID
export const SPOTIFY_CLIENT_SECRET = process.env.NEXT_PUBLIC_CLIENT_SECRET
export const SPOTIFY_REDIRECT_URI = process.env.NEXT_PUBLIC_REDIRECT_URI
export const SPOTIFY_STATE_KEY = "spotify_auth_state"
export const RELIEF_TRACK_ID = "5aDNHHNXc16VktqV1gSq23"
export const HENO_ARTIST_ID = "3mr6jeVpPIXBp8IMMb60aD"
export const TITLE = "DaPerformers"
export const ARTIST = "DaCirkus"
export const DROP_ADDRESS = process.env.NEXT_PUBLIC_DROP_ADDRESS
export const OPENSEA_COLLECTION_URL = `https://${IS_TESTNET && "testnets."}opensea.io/assets/${
  IS_TESTNET ? "base-sepolia" : "base"
}/${DROP_ADDRESS}`
export const DOMAIN_URL = "http://localhost:3000"
