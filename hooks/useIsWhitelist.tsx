import { whitelist } from "@/lib/consts"
import useConnectedWallet from "./useConnectedWallet"

const useIsWhitelist = () => {
  const { externalWallet } = useConnectedWallet()

  const isWhitelist = whitelist.includes(externalWallet?.address)

  return isWhitelist
}

export default useIsWhitelist
