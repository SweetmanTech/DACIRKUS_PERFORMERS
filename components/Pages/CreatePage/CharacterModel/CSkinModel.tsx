import { CSKINS, CTYPES } from "../../../../lib/character"
import { useCharacter } from "../../../../providers/CharacterProvider"

const CSkinModel = ({ isSingle, index }) => {
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
      <div
        className={`relative md:w-[270px] lg:w-[360px] xl:w-[450px] aspect-[192/1152] 
          md:translate-y-[-369px] lg:translate-y-[-492px] xl:translate-y-[-615px]`}
        style={{
          imageRendering: "pixelated",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/img-redundant-alt */}
        <img
          className="absolute !w-full object-contain"
          src={skinImage}
          alt="not found image"
          placeholder="blur"
        />
      </div>
    </div>
  )
}

export default CSkinModel
