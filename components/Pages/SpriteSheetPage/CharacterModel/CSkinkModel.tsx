import { CSKINS, CTYPES } from "../../../../lib/character"
import { useCharacter } from "../../../../providers/CharacterProvider"
import Media from "../../../../shared/Media"

const CSkinkModel = () => {
  const { cSkin, cType } = useCharacter()

  const skinImage = `/images/Characters/${CTYPES[cType]}/SkinTone/${CSKINS[cSkin]}.png`

  return (
    <div className="relative w-fit z-[1] h-full">
      <Media
        type="image"
        link={skinImage}
        blurLink={skinImage}
        containerClasses="h-full aspect-[192/1152]"
        containerStyle={{
          imageRendering: "pixelated",
        }}
      />
    </div>
  )
}

export default CSkinkModel
