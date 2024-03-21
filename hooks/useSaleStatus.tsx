import { useCallback, useEffect, useState } from "react"
import getSaleStatus from "@/lib/viem/getSaleStatus"

const useSaleStatus = () => {
  const [presaleActive, setPresaleActive] = useState<any>(null)
  const [presaleStart, setPresaleStart] = useState(0)
  const [publicSaleActive, setPublicSaleActive] = useState<any>(null)
  const [publicSaleStart, setPublicSaleStart] = useState(0)
  const [publicSalePrice, setPublicSalePrice] = useState("0")
  const [loading, setLoading] = useState(true)

  const initializeStatus = useCallback(async () => {
    setPresaleActive(null)
    setPublicSaleActive(null)
    setPublicSaleStart(0)
    setPublicSaleActive(0)

    setLoading(true)
    const details = await getSaleStatus() as any
    setPublicSaleActive(details.publicSaleActive)
    setPresaleActive(details.presaleActive)
    setPresaleStart(Math.floor(parseInt(details.presaleStart, 10) / 1000000))
    setPublicSaleStart(Math.floor(parseInt(details.publicSaleStart, 10) / 1000000))
    setPublicSalePrice(details.publicSalePrice.toString())
    setLoading(false)
  }, [])

  useEffect(() => {
    initializeStatus()
  }, [initializeStatus])

  return {
    loadingSaleStatus: loading,
    presaleStart,
    presaleActive,
    publicSaleActive,
    publicSaleStart,
    publicSalePrice,
    initializeStatus,
  }
}

export default useSaleStatus
