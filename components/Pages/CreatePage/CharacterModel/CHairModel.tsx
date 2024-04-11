import { CCOLORS, CHAIRS, CTYPES } from "../../../../lib/character"
import { useCharacter } from "../../../../providers/CharacterProvider"
import Media from "../../../../shared/Media"

const CHairModel = ({ isSingle, index }) => {
  const { cHair, cColor, cType, dummyRandom } = useCharacter()

  const hairImage = isSingle
    ? `/images/Characters/${CTYPES[cType]}/Hair/${CCOLORS[cColor]}${CHAIRS[cHair]}.png`
    : `/images/Characters/${CTYPES[dummyRandom[index].type]}/Hair/${
        CCOLORS[dummyRandom[index].color]
      }${CHAIRS[dummyRandom[index].hair]}.png`

  return (
    <div
      className="absolute w-full h-full left-0 top-0 z-[2]
    md:pl-[60px] lg:pl-[80px] xl:pl-[100px] overflow-hidden"
    >
      <Media
        type="image"
        link={hairImage}
        blurLink={hairImage}
        containerClasses="md:w-[270px] lg:w-[360px] xl:w-[450px] aspect-[192/1152] 
        md:translate-y-[-369px] lg:translate-y-[-492px] xl:translate-y-[-615px]"
        containerStyle={{
          imageRendering: "pixelated",
        }}
      />
    </div>
  )
}

export default CHairModel
