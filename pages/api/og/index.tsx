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

export default async function handler(req: NextRequest) {
  const queryParams = req.nextUrl.searchParams
  const tokenId: any = queryParams.get("tokenId")

  const isMinted = await tokenMinted(DROP_ADDRESS, tokenId)
  if (!isMinted) return NextResponse.json({ message: "Not minted yet!" })

  const [type, skin, acc, eye, hair, color, outfit] = getDeterministricAttributes(
    parseInt(tokenId, 10),
  )

  return new ImageResponse(
    (
      <CharacterModel
        type={type}
        skin={skin}
        acc={acc}
        eye={eye}
        hair={hair}
        color={color}
        outfit={outfit}
      />
    ),
    {
      width: 480,
      height: 480,
    },
  )
}
