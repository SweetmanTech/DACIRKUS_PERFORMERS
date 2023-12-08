import { createContext, useContext, useMemo, useState } from "react"
import { CACCS, CEYES, CTYPES } from "../lib/character"
import getRandomInt from "../lib/getRandomInt"

const CharacterContext = createContext(null)

const CharacterProvider = ({ children }) => {
  const [cType, setCType] = useState(0)
  const [cAcc, setCAcc] = useState(0)
  const [cEye, setCEye] = useState(0)

  const randomCType = () => {
    setCType(getRandomInt(CTYPES.length))
  }

  const nextCType = () => {
    setCType(cType === CTYPES.length - 1 ? 0 : cType + 1)
  }

  const prevCType = () => {
    setCType(cType === 0 ? CTYPES.length - 1 : cType - 1)
  }

  const randomCAcc = () => {
    setCAcc(getRandomInt(CACCS.length))
  }

  const nextCAcc = () => {
    setCAcc(cAcc === CACCS.length - 1 ? 0 : cAcc + 1)
  }

  const prevCAcc = () => {
    setCAcc(cAcc === 0 ? CACCS.length - 1 : cAcc - 1)
  }

  const randomCEye = () => {
    setCEye(getRandomInt(CEYES.length))
  }

  const nextCEye = () => {
    setCEye(cEye === CEYES.length - 1 ? 0 : cEye + 1)
  }

  const prevCEye = () => {
    setCEye(cEye === 0 ? CEYES.length - 1 : cEye - 1)
  }

  const value = useMemo(
    () => ({
      cType,
      cAcc,
      cEye,
      randomCType,
      nextCType,
      prevCType,
      randomCAcc,
      nextCAcc,
      prevCAcc,
      randomCEye,
      nextCEye,
      prevCEye,
    }),
    [
      cEye,
      cType,
      cAcc,
      randomCType,
      nextCType,
      prevCType,
      randomCAcc,
      nextCAcc,
      prevCAcc,
      randomCEye,
      nextCEye,
      prevCEye,
    ],
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
