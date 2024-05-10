import useSheetRendererData from "@/hooks/useSheetRendererData"
import { createContext, useContext, useMemo } from "react"

const SheetRendererContext = createContext(null)

const SheetRendererProvider = ({ children }) => {
  const rendererData = useSheetRendererData()

  const value = useMemo(
    () => ({
      ...rendererData,
    }),
    [rendererData],
  )

  return <SheetRendererContext.Provider value={value}>{children}</SheetRendererContext.Provider>
}

export const useSheetRenderer = () => {
  const context = useContext(SheetRendererContext)
  if (!context) {
    throw new Error("useSheetRenderer must be used within a SheetRendererProvider")
  }
  return context
}

export default SheetRendererProvider
