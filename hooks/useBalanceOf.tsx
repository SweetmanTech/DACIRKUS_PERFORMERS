import { Contract } from "ethers"
import { useAccount } from "wagmi"
import { useCallback, useEffect, useMemo, useState } from "react"
import abi from "../lib/abi/zora-drop.json"
import getDefaultProvider from "../lib/getDefaultProvider"
import { CHAIN_ID } from "../lib/consts"

const useBalanceOf = () => {
  const { address } = useAccount()
  const [loading, setLoading] = useState(true)
  const [balance, setBalance] = useState(0)
  const dropContract = useMemo(
    () => new Contract(process.env.NEXT_PUBLIC_DROP_ADDRESS, abi, getDefaultProvider(CHAIN_ID)),
    [],
  )

  const fetchBalance = useCallback(async () => {
    if (!address) return
    setLoading(true)
    const balanceOf = await dropContract.balanceOf(address)
    setBalance(balanceOf.toNumber())
    setLoading(false)
  }, [dropContract, address])

  useEffect(() => {
    fetchBalance()
  }, [dropContract, fetchBalance])

  return {
    balance,
    loadingBalance: loading,
    fetchBalance,
  }
}

export default useBalanceOf
