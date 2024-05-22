import { STEPS } from "@/lib/createStep"
import { useCharacter } from "@/providers/CharacterProvider"
import { useEffect, useState } from "react"
import useZoraMintByPrivy from "./useZoraMintByPrivy"
import getAttributes from "@/lib/getAttributes"
import { CACCS, CBGNAMES, CCOLORS, CEYES, CHAIRS, COUTFITS, CSKINS, CTYPES } from "@/lib/character"
import addMetadata from "@/lib/firebase/addMetadata"
import { useAnimatedBook } from "@/providers/AnimatedBookProvider"
import { STATUS } from "@/lib/bookStatus"
import { usePfpRenderer } from "@/providers/PfpRendererProvder"
import handleTxError from "@/lib/handleTxError"
import { useSheetRenderer } from "@/providers/SheetRendererProvider"
import getTotalSupply from "@/lib/getTotalSupply"
import usePreparePrivyWallet from "./usePrepareWallet"

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
  const { purchaseWithComment } = useZoraMintByPrivy()
  const { setCurrentStatus } = useAnimatedBook()
  const { renderSinglePfp, renderMultiplePfps } = usePfpRenderer()
  const { renderSingleSheet, renderMultipleSheets } = useSheetRenderer()
  const { prepare } = usePreparePrivyWallet()

  const singleMint = async () => {
    if (!prepare()) return

    const totalSupply = await getTotalSupply()
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

    const cidOfPfp = await renderSinglePfp()
    const cidOfSheet = await renderSingleSheet()
    await addMetadata(
      totalSupply + 1,
      attributes,
      sheet,
      `ipfs://${cidOfPfp}`,
      `ipfs://${cidOfSheet}`,
    )
    const firstMintedTokenId = (await purchaseWithComment()) as any
    const { error } = firstMintedTokenId
    if (error) {
      return
    }
    setMintedTokenId(firstMintedTokenId + 1)
    setCurrentStatus(STATUS.LEFTFLIP)
    setCurrentStep(STEPS.SUCCESS)
  }

  const multipleMint = async (quantity) => {
    if (!prepare()) return

    setQuantity(quantity)
    const totalSupply = await getTotalSupply()
    const cidsOfPfp = await renderMultiplePfps(quantity)
    const cidsOfSheets = await renderMultipleSheets(quantity)
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
      await addMetadata(
        totalSupply + i + 1,
        attribute,
        sheet,
        `ipfs://${cidsOfPfp[i]}`,
        `ipfs://${cidsOfSheets[i]}`,
      )
    })

    await Promise.all(metadataPromise)

    const firstMintedTokenId = (await purchaseWithComment(quantity)) as any
    const { error: mintError } = firstMintedTokenId
    if (mintError) {
      handleTxError(mintError)
      return
    }
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
