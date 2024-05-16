import { usePrivy } from "@privy-io/react-auth"
import useConnectedWallet from "./useConnectedWallet"

// eslint-disable-next-line no-console
const usePreparePrivyWallet = () => {
  const { externalWallet } = useConnectedWallet()
  const { connectWallet } = usePrivy()

  const prepare = async () => {
    if (!externalWallet?.address) {
      await connectWallet()
      return false
    }

    return true
  }

  return {
    prepare,
  }
}

export default usePreparePrivyWallet
