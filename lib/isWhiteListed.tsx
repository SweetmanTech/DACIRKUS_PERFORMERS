import { whitelistedAddresses } from "@/lib/whitelistAddresses"

export const checkIfWhitelisted = (address) => {
  if (!address) return false
  const lowercaseAddress = address.toLowerCase()
  const whitelisted = whitelistedAddresses.map((addr) => addr.toLowerCase())
  return whitelisted.includes(lowercaseAddress)
}
