import { COUTFITS, CTYPES } from "../../../../lib/character"
import { useCharacter } from "../../../../providers/CharacterProvider"
import Media from "../../../../shared/Media"

const COutFitModel = () => {
  const { cOutFit, cType } = useCharacter()

  const outfitImage = `/images/Characters/${CTYPES[cType]}/Outfit/${COUTFITS[cOutFit]}.png`

  return (
    <div className="absolute w-fit left-0 top-0 z-[4]">
      <Media
        type="image"
        link={outfitImage}
        blurLink={outfitImage}
        containerClasses="w-[250px] aspect-[192/1152]"
        containerStyle={{
          imageRendering: "pixelated",
        }}
      />
    </div>
  )
}

export default COutFitModel
