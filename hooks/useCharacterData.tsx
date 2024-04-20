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
  const [dummyRandom, setDummyRandom] = useState([])

  const randomAttr = (quantity = 1) => {
    return Array.from({length: quantity}).map(() => {
      const type = randomCType()
      const acc = randomCAcc()
      const eye = randomCEye()
      const hair = randomCHair()
      const color = randomCColor()
      const outfit = randomCOutFit()
      const skin = randomCSkin()
      return {type, acc, eye, hair, color, outfit, skin}
    })
  }

  const randomCType = () => {
    const type =getRandomInt(CTYPES.length)
    setCType(type)
    return type
  }

  const nextCType = () => {
    setCType(cType === CTYPES.length - 1 ? 0 : cType + 1)
  }

  const prevCType = () => {
    setCType(cType === 0 ? CTYPES.length - 1 : cType - 1)
  }

  const randomCAcc = () => {
    const acc = getRandomInt(CACCS.length)
    setCAcc(acc)
    return acc
  }

  const nextCAcc = () => {
    setCAcc(cAcc === CACCS.length - 1 ? 0 : cAcc + 1)
  }

  const prevCAcc = () => {
    setCAcc(cAcc === 0 ? CACCS.length - 1 : cAcc - 1)
  }

  const randomCEye = () => {
    const eye = getRandomInt(CEYES.length)
    setCEye(eye)
    return eye
  }

  const nextCEye = () => {
    setCEye(cEye === CEYES.length - 1 ? 0 : cEye + 1)
  }

  const prevCEye = () => {
    setCEye(cEye === 0 ? CEYES.length - 1 : cEye - 1)
  }

  const randomCHair = () => {
    const hair = getRandomInt(CHAIRS.length)
    setCHair(hair)
    return hair
  }

  const nextCHair = () => {
    setCHair(cHair === CHAIRS.length - 1 ? 0 : cHair + 1)
  }

  const prevCHair = () => {
    setCHair(cHair === 0 ? CHAIRS.length - 1 : cHair - 1)
  }

  const randomCColor = () => {
    const color = getRandomInt(CCOLORS.length)
    setCColor(color)
    return color
  }

  const nextCColor = () => {
    setCColor(cColor === CCOLORS.length - 1 ? 0 : cColor + 1)
  }

  const prevCColor = () => {
    setCColor(cColor === 0 ? CCOLORS.length - 1 : cColor - 1)
  }

  const randomCOutFit = () => {
    const outfit = getRandomInt(COUTFITS.length)
    setCOutFit(outfit)
    return outfit
  }

  const nextCOutFit = () => {
    setCOutFit(cOutFit === COUTFITS.length - 1 ? 0 : cOutFit + 1)
  }

  const prevCOutFit = () => {
    setCOutFit(cOutFit === 0 ? COUTFITS.length - 1 : cOutFit - 1)
  }

  const randomCSkin = () => {
    const skin = getRandomInt(CSKINS.length)
    setCSkin(skin)
    return skin
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
    randomAttr,
    dummyRandom,
    setDummyRandom
  }
}

export default useCharacterData