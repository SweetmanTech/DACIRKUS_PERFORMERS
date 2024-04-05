import useCharacterData from "@/hooks/useCharacterData"
import { createContext, useContext, useMemo } from "react"

const CharacterContext = createContext(null)

const CharacterProvider = ({ children }) => {
  const characterData = useCharacterData()

  const value = useMemo(
    () => ({
      ...characterData,
    }),
    [characterData],
  )

  return <CharacterContext.Provider value={value}>{children}</CharacterContext.Provider>
}

export const useCharacter = () => {
  const context = useContext(CharacterContext)
  if (!context) {
    throw new Error("useCharacter must be used within a CharacterProvider")
  }
  return context
}

export default CharacterProvider
