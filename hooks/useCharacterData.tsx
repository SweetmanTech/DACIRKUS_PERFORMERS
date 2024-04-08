import { useState } from "react"
import { CACCS, CCOLORS, CEYES, CHAIRS, COUTFITS, CSKINS, CTYPES } from "../lib/character"
import getRandomInt from "../lib/getRandomInt"

const useCharacterData = () => {
  const [cType, setCType] = useState(0)
  const [cAcc, setCAcc] = useState(0)
  const [cEye, setCEye] = useState(0)
  const [cHair, setCHair] = useState(0)
  const [cColor, setCColor] = useState(0)
  const [cOutFit, setCOutFit] = useState(0)
  const [cSkin, setCSkin] = useState(0)

  const randomeAttr = () => {
    randomCType()
    randomCAcc()
    randomCEye()
    randomCHair()
    randomCColor()
    randomCOutFit()
    randomCSkin()
  }

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

  const randomCHair = () => {
    setCHair(getRandomInt(CHAIRS.length))
  }

  const nextCHair = () => {
    setCHair(cHair === CHAIRS.length - 1 ? 0 : cHair + 1)
  }

  const prevCHair = () => {
    setCHair(cHair === 0 ? CHAIRS.length - 1 : cHair - 1)
  }

  const randomCColor = () => {
    setCColor(getRandomInt(CCOLORS.length))
  }

  const nextCColor = () => {
    setCColor(cColor === CCOLORS.length - 1 ? 0 : cColor + 1)
  }

  const prevCColor = () => {
    setCColor(cColor === 0 ? CCOLORS.length - 1 : cColor - 1)
  }

  const randomCOutFit = () => {
    setCOutFit(getRandomInt(COUTFITS.length))
  }

  const nextCOutFit = () => {
    setCOutFit(cOutFit === COUTFITS.length - 1 ? 0 : cOutFit + 1)
  }

  const prevCOutFit = () => {
    setCOutFit(cOutFit === 0 ? COUTFITS.length - 1 : cOutFit - 1)
  }

  const randomCSkin = () => {
    setCSkin(getRandomInt(CSKINS.length))
  }

  const nextCSkin = () => {
    setCSkin(cSkin === CSKINS.length - 1 ? 0 : cSkin + 1)
  }

  const prevCSkin = () => {
    setCSkin(cSkin === 0 ? CSKINS.length - 1 : cSkin - 1)
  }

  return {
    cType,
    cAcc,
    cEye,
    cHair,
    cColor,
    cOutFit,
    cSkin,
    randomCType,
    nextCType,
    prevCType,
    randomCAcc,
    nextCAcc,
    prevCAcc,
    randomCEye,
    nextCEye,
    prevCEye,
    nextCColor,
    prevCColor,
    randomCColor,
    nextCHair,
    prevCHair,
    randomCHair,
    randomCOutFit,
    nextCOutFit,
    prevCOutFit,
    randomCSkin,
    prevCSkin,
    nextCSkin,
    randomeAttr,
  }
}

export default useCharacterData