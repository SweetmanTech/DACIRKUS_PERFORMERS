import { ImageResponse } from "@vercel/og"
import { NextRequest, NextResponse } from "next/server"
import getDeterministricAttributes from "@/lib/getDeterministricAttributes"
import tokenMinted from "@/lib/tokenMinted"
import { DOMAIN_URL, DROP_ADDRESS } from "@/lib/consts"
import { CACCS, CBGCOLORS, CCOLORS, CEYES, CHAIRS, COUTFITS, CSKINS, CTYPES } from "@/lib/character"
import SheetImage from "@/components/OgImages/Spritesheet/SheetImage"

export const config = {
  runtime: "experimental-edge",
  dynamic: "force-dynamic",
}

export default async function GET(req: NextRequest) {
  const queryParams = req.nextUrl.searchParams
  const tokenId: any = queryParams.get("tokenId")
  const cType: any = queryParams.get("type")
  const cSkin: any = queryParams.get("skin")
  const cAcc: any = queryParams.get("acc")
  const cEye: any = queryParams.get("eye")
  const cHair: any = queryParams.get("hair")
  const cColor: any = queryParams.get("color")
  const cOutfit: any = queryParams.get("outfit")
  const cBg: any = queryParams.get("bg")

  const isMinted = await tokenMinted(DROP_ADDRESS, tokenId)
  if (!isMinted) return NextResponse.json({ message: "Not minted yet!" })

  const [type, skin, acc, eye, hair, color, outfit, bg] = getDeterministricAttributes(
    parseInt(tokenId, 10),
  )

  const finalType = parseInt(cType, 10) || type
  const finalSkin = parseInt(cSkin, 10) || skin
  const finalAcc = parseInt(cAcc, 10) || acc
  const finalEye = parseInt(cEye, 10) || eye
  const finalHair = parseInt(cHair, 10) || hair
  const finalColor = parseInt(cColor, 10) || color
  const finalOutfit = parseInt(cOutfit, 10) || outfit
  const finalBg = parseInt(cBg, 10) || bg

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          position: "relative",
          width: 192,
          height: 1152,
          imageRendering: "pixelated",
          background: CBGCOLORS[finalBg],
        }}
      >
        <SheetImage
          imageUrl={`${DOMAIN_URL}/images/Characters/${CTYPES[finalType]}/SkinTone/${CSKINS[finalSkin]}.png`}
        />
        <SheetImage
          imageUrl={`${DOMAIN_URL}/images/Characters/${CTYPES[finalType]}/Eyes/${CEYES[finalEye]}.png`}
        />
        {finalHair !== 1 && (
          <SheetImage
            imageUrl={`${DOMAIN_URL}/images/Characters/${CTYPES[finalType]}/Hair/${CCOLORS[finalColor]}${CHAIRS[finalHair]}.png`}
          />
        )}
        <SheetImage
          imageUrl={`${DOMAIN_URL}/images/Characters/${CTYPES[finalType]}/Accesories/${CACCS[finalAcc]}.png`}
        />
        <SheetImage
          imageUrl={`${DOMAIN_URL}/images/Characters/${CTYPES[finalType]}/Outfit/${COUTFITS[finalOutfit]}.png`}
        />
      </div>
    ),
    {
      width: 192,
      height: 1152,
    },
  )
}
