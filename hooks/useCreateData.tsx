import { useEffect, useState } from "react"
import { STEPS } from "@/lib/createStep"
import { useCharacter } from "@/providers/CharacterProvider"
import useZoraMintByPrivy from "./useZoraMintByPrivy"
import useZoraPremint from "./useZoraPremint"
import useConnectedWallet from "./useConnectedWallet"
import getAttributes from "@/lib/getAttributes"
import { CACCS, CBGNAMES, CCOLORS, CEYES, CHAIRS, COUTFITS, CSKINS, CTYPES } from "@/lib/character"
import addMetadata from "@/lib/firebase/addMetadata"
import { useAnimatedBook } from "@/providers/AnimatedBookProvider"
import { STATUS } from "@/lib/bookStatus"
import { usePfpRenderer } from "@/providers/PfpRendererProvder"
import handleTxError from "@/lib/handleTxError"
import getTotalSupply from "@/lib/getTotalSupply"
import usePreparePrivyWallet from "./usePrepareWallet"
import { checkIfWhitelisted } from "@/lib/isWhiteListed"

const useCreateData = () => {
  const [currentStep, setCurrentStep] = useState(STEPS.SELECT_CHARACTER)
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
  } = useCharacter() as any
  const { purchaseWithComment } = useZoraMintByPrivy()
  const { mint: purchasePresaleWithComment } = useZoraPremint()
  const { externalWallet } = useConnectedWallet() as any
  const address = externalWallet?.address
  const isWhitelist = checkIfWhitelisted(address)
  const { setCurrentStatus } = useAnimatedBook() as any
  const { renderSinglePfp, renderMultiplePfps } = usePfpRenderer() as any
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
    await addMetadata(totalSupply + 1, attributes, sheet, `ipfs://${cidOfPfp}`)
    try {
      const firstMintedTokenId: any = isWhitelist
        ? await purchasePresaleWithComment()
        : await purchaseWithComment()

      if ((firstMintedTokenId as { error: any })?.error) {
        return { error: true }
      }

      setMintedTokenId(firstMintedTokenId + 1)
      setCurrentStatus(STATUS.LEFTFLIP)
      setCurrentStep(STEPS.SUCCESS)
    } catch (err) {
      handleTxError(err)
    }
  }

  const multipleMint = async (quantity) => {
    if (!prepare()) return

    setQuantity(quantity)
    const totalSupply = await getTotalSupply()
    const cidsOfPfp = await renderMultiplePfps(quantity)
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
      await addMetadata(totalSupply + i + 1, attribute, sheet, `ipfs://${cidsOfPfp[i]}`)
    })

    try {
      await Promise.all(metadataPromise)
      const firstMintedTokenId: any = isWhitelist
        ? await purchasePresaleWithComment(quantity)
        : await purchaseWithComment(quantity)

      if ((firstMintedTokenId as { error: any })?.error) {
        return { error: true }
      }

      setMintedTokenId(firstMintedTokenId + 1)
      setCurrentStatus(STATUS.LEFTFLIP)
      setCurrentStep(STEPS.SUCCESS_MULTIPLE)
    } catch (err) {
      handleTxError(err)
    }
  }

  useEffect(() => {
    if (currentStep === STEPS.SELECT_CHARACTER) {
      const randomAttributes = randomAttr(25)
      setDummyRandom(randomAttributes)
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
    setQuantity,
  }
}

export default useCreateData
