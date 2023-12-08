import { createContext, useContext, useMemo, useState } from "react"
import { STEPS } from "../lib/createStep"

const CreateContext = createContext(null)

const CreateProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(STEPS.CHOOSE_CHARACTER_TYPE)
  const [characterType, setCharacterType] = useState(1)

  const value = useMemo(
    () => ({
      currentStep,
      setCurrentStep,
      characterType,
      setCharacterType,
    }),
    [currentStep, setCurrentStep, characterType, setCharacterType],
  )

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
