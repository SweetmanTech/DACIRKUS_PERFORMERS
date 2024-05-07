import { CACCS, CTYPES } from "../../../../lib/character"
import { useCharacter } from "../../../../providers/CharacterProvider"
import Media from "../../../../shared/Media"

const CAccModel = () => {
  const { cAcc, cType } = useCharacter()

  const accImage = `/images/Characters/${CTYPES[cType]}/Accesories/${CACCS[cAcc]}.png`

  return (
    <div className="absolute w-fit left-0 top-0 z-[5]">
      <Media
        type="image"
        link={accImage}
        blurLink={accImage}
        containerClasses="w-[250px] aspect-[192/1152]"
        containerStyle={{
          imageRendering: "pixelated",
        }}
      />
    </div>
  )
}

export default CAccModel
