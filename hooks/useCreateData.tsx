import { STEPS } from "@/lib/createStep"
import { useCharacter } from "@/providers/CharacterProvider"
import { useEffect, useState } from "react"
import useZoraMintByPrivy from "./useZoraMintByPrivy"
import useZoraPremint from "./useZoraPremint"
import { IS_TESTNET } from "@/lib/consts"
import getAttributes from "@/lib/getAttributes"
import { CACCS, CBGNAMES, CCOLORS, CEYES, CHAIRS, COUTFITS, CSKINS, CTYPES } from "@/lib/character"
import addMetadata from "@/lib/firebase/addMetadata"
import { useAnimatedBook } from "@/providers/AnimatedBookProvider"
import { STATUS } from "@/lib/bookStatus"
import { usePfpRenderer } from "@/providers/PfpRendererProvder"
import handleTxError from "@/lib/handleTxError"

const useCreateData = () => {
  const [currentStep, setCurrentStep] = useState(STEPS.CHOOSE_CHARACTER_TYPE)
  const [characterType, setCharacterType] = useState(1)
  const [mintedTokenId, setMintedTokenId] = useState(1)
  const [quantity, setQuantity] = useState(1)

  const {
    cType,
    cAcc,
    cEye,
    cHair,
    cColor,
    cOutFit,
    cSkin,
    cBG,
    randomAttr,
    setDummyRandom,
    dummyRandom,
  } = useCharacter()
  const { mintWithRewards } = useZoraMintByPrivy()
  const { mint: zoraMint } = useZoraPremint()
  const { setCurrentStatus } = useAnimatedBook()
  const { renderSinglePfp, renderMultiplePfps } = usePfpRenderer()

  const singleMint = async () => {
    const firstMintedTokenId = (IS_TESTNET ? await mintWithRewards() : await zoraMint()) as any
    const { error } = firstMintedTokenId
    if (error) {
      return
    }
    const attributes = getAttributes(
      CTYPES[cType],
      CSKINS[cSkin],
      CACCS[cAcc],
      CEYES[cEye],
      CHAIRS[cHair],
      CCOLORS[cColor],
      COUTFITS[cOutFit],
      CBGNAMES[cBG],
    )
    const sheet = {
      type: cType,
      skin: cSkin,
      acc: cAcc,
      eye: cEye,
      hair: cHair,
      color: cColor,
      outfit: cOutFit,
      bg: cBG,
    }

    const cid = await renderSinglePfp()
    await addMetadata(firstMintedTokenId + 1, attributes, sheet, `ipfs://${cid}`)
    setMintedTokenId(firstMintedTokenId + 1)
    setCurrentStatus(STATUS.LEFTFLIP)
    setCurrentStep(STEPS.SUCCESS)
  }

  const multipleMint = async (quantity) => {
    setQuantity(quantity)
    const firstMintedTokenId = (await mintWithRewards(quantity)) as any
    const { error: mintError } = firstMintedTokenId
    if (mintError) {
      handleTxError(mintError)
      return
    }
    const cids = await renderMultiplePfps(quantity)
    const metadataPromise = dummyRandom.slice(0, quantity).map(async (sheet, i) => {
      const attribute = getAttributes(
        CTYPES[sheet.type],
        CSKINS[sheet.skin],
        CACCS[sheet.acc],
        CEYES[sheet.eye],
        CHAIRS[sheet.hair],
        CCOLORS[sheet.color],
        COUTFITS[sheet.outfit],
        CBGNAMES[sheet.bg],
      )
      await addMetadata(firstMintedTokenId + i + 1, attribute, sheet, `ipfs://${cids[i]}`)
    })
    await Promise.all(metadataPromise)
    const { error } = firstMintedTokenId
    if (error) {
      return
    }
    setMintedTokenId(firstMintedTokenId + 1)
    setCurrentStatus(STATUS.LEFTFLIP)
    setCurrentStep(STEPS.SUCCESS_MULTIPLE)
  }

  useEffect(() => {
    if (currentStep === STEPS.CHOOSE_CHARACTER_TYPE) {
      const randomAttrbutes = randomAttr(25)
      setDummyRandom(randomAttrbutes)
    }
  }, [currentStep])

  return {
    currentStep,
    setCurrentStep,
    characterType,
    setCharacterType,
    mintedTokenId,
    setMintedTokenId,
    singleMint,
    multipleMint,
    quantity,
  }
}

export default useCreateData
