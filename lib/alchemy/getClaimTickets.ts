import getNFTs from "./getNFTs"

export const getClaimTickets = async (address: string) => {
  console.log("SWEETS address", address)
  console.log("SWEETS process.env.NEXT_PUBLIC_CRE8ORS_CLAIM_TICKET_ADDRESS", process.env.NEXT_PUBLIC_CRE8ORS_CLAIM_TICKET_ADDRESS)
  console.log("SWEETS process.env.NEXT_PUBLIC_TESTNET", process.env.NEXT_PUBLIC_TESTNET)

  const res = await getNFTs(
    address,
    process.env.NEXT_PUBLIC_CRE8ORS_CLAIM_TICKET_ADDRESS,
    process.env.NEXT_PUBLIC_TESTNET ? 5 : 1,
  )
  console.log("SWEETS res", res)
  return res?.ownedNfts
}
export const getLatestClaimTicket = async (address: string) => {
  const response = await getClaimTickets(address)
  const count = response?.length
  console.log("SWEETS COUNT", count)

  console.log("SWEETS response", response)
  const latestClaimTicket = response?.pop() || null
  console.log("SWEETS latestClaimTicket", latestClaimTicket)
  console.log("SWEETS COUNT", response?.length)

  return { ticket: latestClaimTicket, noOfTickets: count }
}
