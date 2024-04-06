import useZoraMintByPrivy from "@/hooks/useZoraMintByPrivy"
import { STATUS } from "@/lib/bookStatus"
import { STEPS } from "@/lib/createStep"
import { useAnimatedBook } from "@/providers/AnimatedBookProvider"
import { useCreate } from "@/providers/CreateProvider"
import usePreparePrivyWallet from "@/hooks/usePrepareWallet"
import { useCharacter } from "@/providers/CharacterProvider"
import { CACCS, CCOLORS, CEYES, CHAIRS, COUTFITS, CSKINS, CTYPES } from "@/lib/character"
import getIpfsLink from "@/lib/getIpfsLink"
import getAttributes from "@/lib/getAttributes"
import updateSpritesheet from "@/lib/updateSpritesheet"
import { useState } from "react"

const MintButton = () => {
  const { setCurrentStatus } = useAnimatedBook()
  const { setCurrentStep, setMintedTokenId } = useCreate()
  const { uploadCharacter, cType, cAcc, cEye, cHair, cColor, cOutFit, cSkin } = useCharacter()
  const { mintWithRewards } = useZoraMintByPrivy()
  const [loading, setLoading] = useState(false)

  const mint = async () => {
    const response = (await mintWithRewards()) as any
    const { error } = response
    if (error) {
      return
    }
    setMintedTokenId(response)
    const imgCid = await uploadCharacter()
    const image = getIpfsLink(`ipfs://${imgCid}`)
    const type = CTYPES[cType]
    const skin = CSKINS[cSkin]
    const acc = CACCS[cAcc]
    const eye = CEYES[cEye]
    const hair = CHAIRS[cHair]
    const color = CCOLORS[cColor]
    const outfit = COUTFITS[cOutFit]
    const tokenData = {
      image,
      attributes: getAttributes(type, skin, acc, eye, hair, color, outfit),
      tokenId: response,
      description: `PFP: ${image}`,
      name: `Performer #${response}`,
    }

    await updateSpritesheet(tokenData)
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
