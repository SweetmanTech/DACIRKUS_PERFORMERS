import { CEYES, CTYPES } from "../../../../lib/character"
import { useCharacter } from "../../../../providers/CharacterProvider"
import Media from "../../../../shared/Media"

const CEyeModel = ({ isSingle, index }) => {
  const { cEye, cType, dummyRandom } = useCharacter()

  const eyeImage = isSingle
    ? `/images/Characters/${CTYPES[cType]}/Eyes/${CEYES[cEye]}.png`
    : `/images/Characters/${CTYPES[dummyRandom[index].type]}/Eyes/${
        CEYES[dummyRandom[index].eye]
      }.png`

  return (
    <div
      className="absolute w-full h-full left-0 top-0 z-[3]
    md:pl-[60px] lg:pl-[80px] xl:pl-[100px] overflow-hidden"
    >
      <Media
        type="image"
        link={eyeImage}
        blurLink={eyeImage}
        containerClasses="md:w-[270px] lg:w-[360px] xl:w-[450px] aspect-[192/1152] 
        md:translate-y-[-369px] lg:translate-y-[-492px] xl:translate-y-[-615px]"
        containerStyle={{
          imageRendering: "pixelated",
        }}
      />
    </div>
  )
}

export default CEyeModel
