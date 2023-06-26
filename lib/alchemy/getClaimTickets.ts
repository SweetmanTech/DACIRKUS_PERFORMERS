import { Alchemy, Network, NftTokenType } from "alchemy-sdk"

const settings = {
  apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
  network: process.env.NEXT_PUBLIC_TESTNET ? Network.ETH_GOERLI : Network.ETH_MAINNET,
}

const alchemy = new Alchemy(settings)

export const getClaimTickets = async (address: string) => {
  const reponse = await alchemy.nft.getMintedNfts(address, {
    contractAddresses: [process.env.NEXT_PUBLIC_CRE8ORS_CLAIM_TICKET_ADDRESS],
    tokenType: NftTokenType.ERC721,
  })
  return reponse
}

export const getLatestClaimTicket = async (address: string) => {
  const response = await getClaimTickets(address)
  const latestClaimTicket = response?.nfts?.pop() || null
  return latestClaimTicket
}
