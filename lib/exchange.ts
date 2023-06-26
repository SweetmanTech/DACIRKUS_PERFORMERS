import { Contract, ContractInterface, Signer } from "ethers"

export const approveClaimTicket = async (
  signer: Signer,
  abi: ContractInterface,
  claimTicketId: number | string,
) => {
  const contract = new Contract(process.env.NEXT_PUBLIC_CRE8ORS_CLAIM_TICKET_ADDRESS, abi, signer)
  try {
    const tx = await contract.approve(
      process.env.NEXT_PUBLIC_CRE8ORS_EXCHANGE_ADDRESS,
      claimTicketId,
    )
    const res = await tx.wait()
    return res
  } catch (e) {
    return e
  }
}

export const exchangeClaimTicket = async (
  signer: Signer,
  abi: ContractInterface,
  claimTicketId: number | string,
) => {
  try {
    const contract = new Contract(process.env.NEXT_PUBLIC_CRE8ORS_EXCHANGE_ADDRESS, abi, signer)
    const tx = await contract.claimPassport(claimTicketId)
    await tx.wait()
    return tx
  } catch (e) {
    return e
  }
}
