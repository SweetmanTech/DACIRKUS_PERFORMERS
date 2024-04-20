import { CSKINS, CTYPES } from "../../../../lib/character"
import { useCharacter } from "../../../../providers/CharacterProvider"
import Media from "../../../../shared/Media"

const CSkinkModel = ({ isSingle, index }) => {
  const { cSkin, cType, dummyRandom } = useCharacter()

  const skinImage = isSingle
    ? `/images/Characters/${CTYPES[cType]}/SkinTone/${CSKINS[cSkin]}.png`
    : `/images/Characters/${CTYPES[dummyRandom[index].type]}/SkinTone/${
        CSKINS[dummyRandom[index].skin]
      }.png`

  return (
    <div
      className="absolute w-full h-full left-0 top-0 z-[1] 
    md:pl-[60px] lg:pl-[80px] xl:pl-[100px] overflow-hidden"
    >
      <Media
        type="image"
        link={skinImage}
        blurLink={skinImage}
        containerClasses="md:w-[270px] lg:w-[360px] xl:w-[450px] aspect-[192/1152] 
        md:translate-y-[-369px] lg:translate-y-[-492px] xl:translate-y-[-615px]"
        containerStyle={{
          imageRendering: "pixelated",
        }}
      />
    </div>
  )
}

export default CSkinkModel
