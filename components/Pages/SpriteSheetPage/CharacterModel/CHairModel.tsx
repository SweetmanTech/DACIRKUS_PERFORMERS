import { CCOLORS, CHAIRS, CTYPES } from "../../../../lib/character"
import { useCharacter } from "../../../../providers/CharacterProvider"
import Media from "../../../../shared/Media"

const CHairModel = () => {
  const { cHair, cColor, cType } = useCharacter() as any

  const hairImage = `/images/Characters/${CTYPES[cType]}/Hair/${CCOLORS[cColor]}${CHAIRS[cHair]}.png`

  return (
    <div className="absolute w-fit left-0 top-0 z-[2] h-full">
      <Media
        type="image"
        link={hairImage}
        blurLink={hairImage}
        containerClasses="h-full aspect-[192/1152]"
        containerStyle={{
          imageRendering: "pixelated",
        }}
      />
    </div>
  )
}

export default CHairModel
