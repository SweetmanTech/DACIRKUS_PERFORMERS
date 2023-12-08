import { createContext, useContext, useMemo, useState } from "react"
import { CACCS, CTYPES } from "../lib/character"
import getRandomInt from "../lib/getRandomInt"

const CharacterContext = createContext(null)

const CharacterProvider = ({ children }) => {
  const [cType, setCType] = useState(0)
  const [cAcc, setCAcc] = useState(0)

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
  
  const randomCAcc = () => {
    const acc = getRandomInt(CACCS.length)
    setCAcc(acc)
  }

  const nextCAcc = () => {
    if (cAcc === CACCS.length - 1) {
      setCAcc(0)
      return
    }

    setCAcc(cAcc + 1)
  }

  const prevCAcc = () => {
    if (cAcc === 0) {
        setCAcc(CACCS.length - 1)
        return
      }
  
      setCAcc(cAcc - 1)
  }
  
  const value = useMemo(() => ({
      cType,
      cAcc,
      randomCType,
      nextCType,
      prevCType,
      randomCAcc,
      nextCAcc,
      prevCAcc
    }), 
    [
      cType,
      cAcc,
      randomCType,
      nextCType,
      prevCType,
      randomCAcc,
      nextCAcc,
      prevCAcc
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
