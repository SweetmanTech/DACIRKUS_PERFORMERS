import { STEPS } from "@/lib/createStep"
import { useState } from "react"

const useCreateData = () => {
    const [currentStep, setCurrentStep] = useState(STEPS.CHOOSE_CHARACTER_TYPE)
    const [characterType, setCharacterType] = useState(1)
    const [mintedTokenId, setMintedTokenId] = useState(1)
    return {
      currentStep,
      setCurrentStep,
      characterType,
      setCharacterType,
      mintedTokenId,
      setMintedTokenId
    }
}

export default useCreateData