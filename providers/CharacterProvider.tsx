import { createContext, useContext, useMemo, useState } from "react"
import { CTYPES } from "../lib/character"
import getRandomInt from "../lib/getRandomInt"

const CharacterContext = createContext(null)

const CharacterProvider = ({ children }) => {
  const [cType, setCType] = useState(0)

  const randomCType = () => {
    const type = getRandomInt(CTYPES.length)
    setCType(type)
  }

  const nextCType = () => {
    if (cType === CTYPES.length - 1) {
      setCType(0)
      return
    }

    setCType(cType + 1)
  }

  const prevCType = () => {
    if (cType === 0) {
        setCType(CTYPES.length - 1)
        return
      }
  
      setCType(cType - 1)
  }
  
  const value = useMemo(() => ({
      cType,
      randomCType,
      nextCType,
      prevCType
    }), 
    [
      cType,
      randomCType,
      nextCType,
      prevCType
    ]
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
