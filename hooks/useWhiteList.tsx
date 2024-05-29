import { useEffect } from "react"
import { whitelistedAddresses } from "@/lib/whitelistAddresses"
import useConnectedWallet from "@/hooks/useConnectedWallet"
const useWhitelist = () => {
  const { externalWallet } = useConnectedWallet()

  useEffect(() => {
    checkIfWhitelisted()
    if (externalWallet?.address) {
      checkIfWhitelisted()
    }
  }, [externalWallet])

  const checkIfWhitelisted = () => {
    const address = externalWallet?.address
    const isWhitelistedAddress = whitelistedAddresses.includes(address)
    const istrue = isWhitelistedAddress
    return istrue
  }

  return { checkIfWhitelisted }
}

export default useWhitelist
