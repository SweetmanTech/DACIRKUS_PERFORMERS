import useZoraMintByPrivy from "@/hooks/useZoraMintByPrivy"
import { STATUS } from "@/lib/bookStatus"
import { STEPS } from "@/lib/createStep"
import { useAnimatedBook } from "@/providers/AnimatedBookProvider"
import { useCreate } from "@/providers/CreateProvider"
import usePreparePrivyWallet from "@/hooks/usePrepareWallet"
import { useState } from "react"
import useZoraPremint from "@/hooks/useZoraPremint"
import { IS_TESTNET } from "@/lib/consts"
import { useCharacter } from "@/providers/CharacterProvider"
import { CACCS, CBGCOLORS, CCOLORS, CEYES, CHAIRS, COUTFITS, CSKINS, CTYPES } from "@/lib/character"
import getAttributes from "@/lib/getAttributes"
import addMetadata from "@/lib/firebase/addMetadata"

const MintButton = () => {
  const { setCurrentStatus } = useAnimatedBook()
  const { setCurrentStep, setMintedTokenId } = useCreate()
  const { mintWithRewards } = useZoraMintByPrivy()
  const { mint: zoraMint } = useZoraPremint()

  const { cType, cAcc, cEye, cHair, cColor, cOutFit, cSkin, cBG } = useCharacter()

  const [loading, setLoading] = useState(false)

  const mint = async () => {
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
      CBGCOLORS[cBG],
    )
    await addMetadata(firstMintedTokenId + 1, attributes, {
      type: cType,
      skin: cSkin,
      acc: cAcc,
      eye: cEye,
      hair: cHair,
      color: cColor,
      outfit: cOutFit,
      bg: cBG,
    })
    setMintedTokenId(firstMintedTokenId + 1)
    setCurrentStatus(STATUS.LEFTFLIP)
    setCurrentStep(STEPS.SUCCESS)
  }

  const { prepare } = usePreparePrivyWallet(mint)

  const handleMint = async () => {
    setLoading(true)
    const isPrepared = await prepare()
    if (!isPrepared) {
      setLoading(false)
      return
    }
    await mint()
    setLoading(false)
  }

  return (
    <button
      type="button"
      className="md:w-[78px] lg:w-[104px] xl:w-[130px] aspect-[2/1] border-[2px] border-black flex justify-center items-center
          bg-[#ca4343] active:bg-[#4e545d] shadow-[inset_0px_-3px_0px_1px_#323840] active:shadow-[inset_none] rounded-[5px]"
      onClick={handleMint}
      disabled={loading}
    >
      <p
        className={`text-white font-slimfit pb-[6px]
      ${
        loading
          ? "md:text-[16px] lg:text-[22px] xl:text-[26px]"
          : "md:text-[19.2px] lg:text-[25.6px] xl:text-[32px]"
      }`}
      >
        {loading ? "Minting" : "Mint"}
      </p>
    </button>
  )
}

export default MintButton
