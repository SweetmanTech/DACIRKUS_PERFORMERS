/* eslint-disable @next/next/no-img-element */
import { DOMAIN_URL } from "@/lib/consts"
import { CEYES, CSKINS, CTYPES, CACCS, CCOLORS, CHAIRS, COUTFITS } from "@/lib/character"

const CharacterModel = ({ type, skin, acc, eye, hair, color, outfit }) => (
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
      <img
        src={`${DOMAIN_URL}/images/Characters/${CTYPES[type]}/SkinTone/${CSKINS[skin]}.png`}
        style={{
          width: 1440,
          position: "absolute",
          left: 0,
          top: 0,
        }}
        alt="not found"
      />
      <img
        src={`${DOMAIN_URL}/images/Characters/${CTYPES[type]}/Eyes/${CEYES[eye]}.png`}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1440,
        }}
        alt="not found"
      />
      <img
        src={`${`${DOMAIN_URL}/images/Characters/${CTYPES[type]}/Hair/${CCOLORS[color]}${CHAIRS[hair]}.png`}`}
        style={{
          width: 1440,
          position: "absolute",
          left: 0,
          top: 0,
        }}
        alt="not found"
      />
      <img
        src={`${`${DOMAIN_URL}/images/Characters/${CTYPES[type]}/Accesories/${CACCS[acc]}.png`}`}
        style={{
          width: 1440,
          position: "absolute",
          left: 0,
          top: 0,
        }}
        alt="not found"
      />
      <img
        src={`${DOMAIN_URL}/images/Characters/${CTYPES[type]}/Outfit/${COUTFITS[outfit]}.png`}
        style={{
          width: 1440,
          position: "absolute",
          left: 0,
          top: 0,
        }}
        alt="not found"
      />
    </div>
  </div>
)

export default CharacterModel
