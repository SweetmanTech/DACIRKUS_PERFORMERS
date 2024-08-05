import { CEYES, CTYPES } from "../../../../lib/character"
import { useCharacter } from "../../../../providers/CharacterProvider"
import Media from "../../../../shared/Media"

const CEyeModel = () => {
  const { cEye, cType } = useCharacter() as any

  const eyeImage = `/images/Characters/${CTYPES[cType]}/Eyes/${CEYES[cEye]}.png`
  return (
    <div className="absolute w-fit left-0 top-0 z-[3] h-full">
      <Media
        type="image"
        link={eyeImage}
        blurLink={eyeImage}
        containerClasses="h-full aspect-[192/1152]"
        containerStyle={{
          imageRendering: "pixelated",
        }}
      />
    </div>
  )
}

export default CEyeModel
