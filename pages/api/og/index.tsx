import { ImageResponse } from "@vercel/og"
import { NextRequest, NextResponse } from "next/server"
import getDeterministricAttributes from "@/lib/getDeterministricAttributes"
import CharacterModel from "@/components/OgImages/CharacterModel"
import tokenMinted from "@/lib/tokenMinted"
import { DROP_ADDRESS } from "@/lib/consts"

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
      <CharacterModel
        type={finalType}
        skin={finalSkin}
        acc={finalAcc}
        eye={finalEye}
        hair={finalHair}
        color={finalColor}
        outfit={finalOutfit}
        bg={finalBg}
      />
    ),
    {
      width: 480,
      height: 480,
    },
  )
}
