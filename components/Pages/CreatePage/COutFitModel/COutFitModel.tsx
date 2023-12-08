import { COUTFITS, CTYPES } from "../../../../lib/character"
import { useCharacter } from "../../../../providers/CharacterProvider"
import Media from "../../../../shared/Media"

const COutFitModel = () => {
  const { cOutFit, cType } = useCharacter()

  return (
    <div
      className="absolute w-full h-full left-0 top-0 z-[4]
    md:pl-[60px] lg:pl-[80px] xl:pl-[100px] overflow-hidden"
    >
      <Media
        type="image"
        link={`/images/Characters/${CTYPES[cType]}/Outfit/${COUTFITS[cOutFit]}.png`}
        blurLink={`/images/Characters/${CTYPES[cType]}/Outfit/${COUTFITS[cOutFit]}.png`}
        containerClasses="md:w-[270px] lg:w-[360px] xl:w-[450px] aspect-[192/1152] 
        md:translate-y-[-369px] lg:translate-y-[-492px] xl:translate-y-[-615px]"
      />
    </div>
  )
}

export default COutFitModel
