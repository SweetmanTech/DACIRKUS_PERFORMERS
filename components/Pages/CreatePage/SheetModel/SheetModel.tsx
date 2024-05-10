/* eslint-disable @next/next/no-img-element */
import { CACCS, CBGCOLORS, CCOLORS, CEYES, CHAIRS, COUTFITS, CSKINS, CTYPES } from "@/lib/character"

const SheetModel = ({ type, skin, outfit, hair, eye, bg, acc, color }) => {
  const visibleHair = hair !== 1
  const skinImage = `/images/Characters/${CTYPES[type]}/SkinTone/${CSKINS[skin]}.png`
  const accImage = `/images/Characters/${CTYPES[type]}/Accesories/${CACCS[acc]}.png`
  const eyeImage = `/images/Characters/${CTYPES[type]}/Eyes/${CEYES[eye]}.png`
  const hairImage = `/images/Characters/${CTYPES[type]}/Hair/${CCOLORS[color]}${CHAIRS[hair]}.png`
  const outfitImage = `/images/Characters/${CTYPES[type]}/Outfit/${COUTFITS[outfit]}.png`

  return (
    <div
      className="w-fit px-4 pb-6 pointer-events-none"
      style={{
        background: CBGCOLORS[bg],
      }}
    >
      <div className="relative w-[250px] aspect-[192/1152]">
        <img
          src={skinImage}
          className="w-full h-full z-[1] absolute left-0 top-0"
          style={{
            imageRendering: "pixelated",
          }}
          alt="not found"
        />
        <img
          src={eyeImage}
          className="w-full h-full z-[2] absolute left-0 top-0"
          style={{
            imageRendering: "pixelated",
          }}
          alt="not found"
        />
        {visibleHair && (
          <img
            src={hairImage}
            className="w-full h-full z-[3] absolute left-0 top-0"
            style={{
              imageRendering: "pixelated",
            }}
            alt="not found"
          />
        )}
        <img
          src={accImage}
          className="w-full h-full z-[4] absolute left-0 top-0"
          style={{
            imageRendering: "pixelated",
          }}
          alt="not found"
        />
        <img
          src={outfitImage}
          className="w-full h-full z-[5] absolute left-0 top-0"
          style={{
            imageRendering: "pixelated",
          }}
          alt="not found"
        />
      </div>
    </div>
  )
}

export default SheetModel
