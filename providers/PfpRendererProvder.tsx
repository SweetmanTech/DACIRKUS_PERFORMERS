"use client"

import usePfpRendererData from "@/hooks/usePfpRendererData"
import { createContext, useContext, useMemo } from "react"

const PfpRendererContext = createContext(null)

const PfpRendererProvider = ({ children }) => {
  const rendererData = usePfpRendererData()

  const value = useMemo(
    () => ({
      ...rendererData,
    }),
    [rendererData],
  ) as any

  return <PfpRendererContext.Provider value={value}>{children}</PfpRendererContext.Provider>
}

export const usePfpRenderer = () => {
  const context = useContext(PfpRendererContext)
  if (!context) {
    throw new Error("usePfpRenderer must be used within a PfpRendererProvider")
  }
  return context
}

export default PfpRendererProvider
