import { useEffect, useState } from "react"
import useConnectedWallet from "./useConnectedWallet"

const usePrivyEthersSigner = () => {
  const { externalWallet } = useConnectedWallet()
  const [signer, setSigner] = useState(null)

  useEffect(() => {
    const init = async () => {
      const provider = await externalWallet.getEthersProvider()
      const ethSigner = provider.getSigner()
      setSigner(ethSigner)
    }

    if (!externalWallet) return
    init()
  }, [externalWallet])

  return { signer }
}

export default usePrivyEthersSigner
