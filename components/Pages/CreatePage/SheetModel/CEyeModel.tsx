import { CEYES, CTYPES } from "../../../../lib/character"
import Media from "../../../../shared/Media"

const CEyeModel = ({eye, type}) => {
  const eyeImage = `/images/Characters/${CTYPES[type]}/Eyes/${CEYES[eye]}.png`
  return (
    <div className="absolute w-fit left-0 top-0 z-[3]">
      <Media
        type="image"
        link={eyeImage}
        blurLink={eyeImage}
        containerClasses="w-[250px] aspect-[192/1152]"
        containerStyle={{
          imageRendering: "pixelated",
        }}
      />
    </div>
  )
}

export default CEyeModel
