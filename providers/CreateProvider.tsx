"use client"

import useCreateData from "@/hooks/useCreateData"
import { createContext, useContext, useMemo } from "react"

const CreateContext = createContext(null)

const CreateProvider = ({ children }) => {
  const createData = useCreateData()

  const value = useMemo(
    () => ({
      ...createData,
    }),
    [createData],
  ) as any

  return <CreateContext.Provider value={value}>{children}</CreateContext.Provider>
}

export const useCreate = () => {
  const context = useContext(CreateContext)
  if (!context) {
    throw new Error("useCreate must be used within a CreateProvider")
  }
  return context
}

export default CreateProvider
