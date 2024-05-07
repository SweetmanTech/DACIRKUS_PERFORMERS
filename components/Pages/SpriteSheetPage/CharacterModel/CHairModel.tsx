import { CCOLORS, CHAIRS, CTYPES } from "../../../../lib/character"
import { useCharacter } from "../../../../providers/CharacterProvider"
import Media from "../../../../shared/Media"

const CHairModel = () => {
  const { cHair, cColor, cType } = useCharacter()

  const hairImage = `/images/Characters/${CTYPES[cType]}/Hair/${CCOLORS[cColor]}${CHAIRS[cHair]}.png`

  return (
    <div className="absolute w-fit left-0 top-0 z-[2]">
      <Media
        type="image"
        link={hairImage}
        blurLink={hairImage}
        containerClasses="w-[250px] aspect-[192/1152]"
        containerStyle={{
          imageRendering: "pixelated",
        }}
      />
    </div>
  )
}

export default CHairModel
