/* eslint-disable @next/next/no-img-element */
import { DOMAIN_URL } from "@/lib/consts"
import { CEYES, CSKINS, CTYPES, CACCS, CCOLORS, CHAIRS, COUTFITS, CBGCOLORS } from "@/lib/character"
import AttributeImage from "./AttributeImage"

const CharacterModel = ({ type, skin, acc, eye, hair, color, outfit, bg }) => (
  <div
    style={{
      display: "flex",
      width: 480,
      height: 480,
      paddingLeft: 40,
      background: CBGCOLORS[bg],
      position: 'relative',
      overflow: 'hidden'
    }}
  >
    <div
      style={{
        display: "flex",
        width: 325,
        height: 480,
        overflow: "hidden",
        position: 'relative'
      }}
    >
      <div
        style={{
          width: 396,
          height: 480,
          display: "flex",
          position: "absolute",
          marginTop: -20,
          marginLeft: 80,
        }}
      >
        <AttributeImage
          imageUrl={`${DOMAIN_URL}/images/Characters/${CTYPES[type]}/SkinTone/${CSKINS[skin]}.png`}
          className="left-0 top-0 z-[1]"
        />
        <AttributeImage
          imageUrl={`${DOMAIN_URL}/images/Characters/${CTYPES[type]}/Eyes/${CEYES[eye]}.png`}
          className="left-0 top-0 z-[2]"
        />
        {hair !== 1 && (
          <AttributeImage
            imageUrl={`${`${DOMAIN_URL}/images/Characters/${CTYPES[type]}/Hair/${CCOLORS[color]}${CHAIRS[hair]}.png`}`}
            className="left-0 top-0 z-[3]"
          />
        )}
        <AttributeImage
          imageUrl={`${DOMAIN_URL}/images/Characters/${CTYPES[type]}/Accesories/${CACCS[acc]}.png`}
          className="left-0 top-0 z-[4]"
        />
        <AttributeImage
          imageUrl={`${DOMAIN_URL}/images/Characters/${CTYPES[type]}/Outfit/${COUTFITS[outfit]}.png`}
          className="left-0 top-0 z-[5]"
        />
      </div>
    </div>
  </div>
)

export default CharacterModel
