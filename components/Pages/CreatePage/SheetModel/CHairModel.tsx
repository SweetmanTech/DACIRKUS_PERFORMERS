import { CCOLORS, CHAIRS, CTYPES } from "../../../../lib/character"
import Media from "../../../../shared/Media"

const CHairModel = ({hair, color, type}) => {
  const hairImage = `/images/Characters/${CTYPES[type]}/Hair/${CCOLORS[color]}${CHAIRS[hair]}.png`

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
