import balanceOf from "@/lib/balanceOf"
import { whitelistedAddresses } from "@/lib/whitelistAddresses"
import { useEffect, useState } from "react"
import { Address } from "viem"

const useCheckWhitelist = (address: Address) => {
  const [isWhitelist, setIsWhitelist] = useState<any>(null)

  useEffect(() => {
    const init = async () => {
      const lowercaseAddress = address.toLowerCase()
      const whitelisted = whitelistedAddresses.map((addr) => addr.toLowerCase())

      const balance = await balanceOf(address)

      setIsWhitelist(balance === 0 && whitelisted.includes(lowercaseAddress))
    }
    if (!address) return
    init()
  }, [address])

  return {
    isWhitelist,
  }
}

export default useCheckWhitelist
