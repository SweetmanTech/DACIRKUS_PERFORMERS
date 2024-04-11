import { COUTFITS, CTYPES } from "../../../../lib/character"
import { useCharacter } from "../../../../providers/CharacterProvider"
import Media from "../../../../shared/Media"

const COutFitModel = ({ isSingle, index }) => {
  const { cOutFit, cType, dummyRandom } = useCharacter()

  const outfitImage = isSingle
    ? `/images/Characters/${CTYPES[cType]}/Outfit/${COUTFITS[cOutFit]}.png`
    : `/images/Characters/${CTYPES[dummyRandom[index].type]}/Outfit/${
        COUTFITS[dummyRandom[index].outfit]
      }.png`

  return (
    <div
      className="absolute w-full h-full left-0 top-0 z-[4]
    md:pl-[60px] lg:pl-[80px] xl:pl-[100px] overflow-hidden"
    >
      <Media
        type="image"
        link={outfitImage}
        blurLink={outfitImage}
        containerClasses="md:w-[270px] lg:w-[360px] xl:w-[450px] aspect-[192/1152] 
        md:translate-y-[-369px] lg:translate-y-[-492px] xl:translate-y-[-615px]"
        containerStyle={{
          imageRendering: "pixelated",
        }}
      />
    </div>
  )
}

export default COutFitModel
