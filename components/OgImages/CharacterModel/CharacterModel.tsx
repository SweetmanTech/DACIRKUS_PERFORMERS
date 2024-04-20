/* eslint-disable @next/next/no-img-element */
import { DOMAIN_URL } from "@/lib/consts"
import { CEYES, CSKINS, CTYPES, CACCS, CCOLORS, CHAIRS, COUTFITS } from "@/lib/character"
import AttributeImage from "./AttributeImage"

const CharacterModel = ({ type, skin, acc, eye, hair, color, outfit }) => (
  <div
    style={{
      display: "flex",
      width: 480,
      height: 480,
      paddingLeft: 40,
    }}
  >
    <div
      style={{
        display: "flex",
        width: 325,
        height: 480,
        overflow: "hidden",
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
        />
        <AttributeImage
          imageUrl={`${DOMAIN_URL}/images/Characters/${CTYPES[type]}/Eyes/${CEYES[eye]}.png`}
        />
        {hair !== 1 && (
          <AttributeImage
            imageUrl={`${`${DOMAIN_URL}/images/Characters/${CTYPES[type]}/Hair/${CCOLORS[color]}${CHAIRS[hair]}.png`}`}
          />
        )}
        <AttributeImage
          imageUrl={`${DOMAIN_URL}/images/Characters/${CTYPES[type]}/Accesories/${CACCS[acc]}.png`}
        />
        <AttributeImage
          imageUrl={`${DOMAIN_URL}/images/Characters/${CTYPES[type]}/Outfit/${COUTFITS[outfit]}.png`}
        />
      </div>
    </div>
  </div>
)

export default CharacterModel
