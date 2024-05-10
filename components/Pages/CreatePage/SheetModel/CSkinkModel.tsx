import { CSKINS, CTYPES } from "../../../../lib/character"
import Media from "../../../../shared/Media"

const CSkinkModel = ({skin, type}) => {
  const skinImage = `/images/Characters/${CTYPES[type]}/SkinTone/${CSKINS[skin]}.png`

  return (
    <div className="relative w-fit z-[1]">
      <Media
        type="image"
        link={skinImage}
        blurLink={skinImage}
        containerClasses="w-[250px] aspect-[192/1152]"
        containerStyle={{
          imageRendering: "pixelated",
        }}
      />
    </div>
  )
}

export default CSkinkModel
