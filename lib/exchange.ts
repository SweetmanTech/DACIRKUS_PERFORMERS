import { Contract, ContractInterface, Signer } from "ethers"
import { ILogObj, Logger } from "tslog"

const log: Logger<ILogObj> = new Logger({ hideLogPositionForProduction: true })
export const approveClaimTicket = async (
  signer: Signer,
  abi: ContractInterface,
  claimTicketId: number | string,
) => {
  log.debug("approveClaimTicketFX", claimTicketId)
  const contract = new Contract(process.env.NEXT_PUBLIC_CRE8ORS_CLAIM_TICKET_ADDRESS, abi, signer)
  try {
    log.debug("starting transaction")
    const tx = await contract.approve(
      process.env.NEXT_PUBLIC_CRE8ORS_EXCHANGE_ADDRESS,
      claimTicketId,
    )
    const res = await tx.wait()
    return res
  } catch (e) {
    log.error(e)
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
    log.error(e)
    return e
  }
}
