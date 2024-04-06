import { ImageResponse } from "@vercel/og"
import { NextRequest } from "next/server"
import IpfsImage from "@/components/OgImages/IpfsImage"
import getDeterministricAttributes from "@/lib/getDeterministricAttributes"
import CharacterModel from "@/components/OgImages/CharacterModel"
import sheets from "../spritesheet/sheets.json"

export const config = {
  runtime: "experimental-edge",
  dynamic: "force-dynamic",
}

export default async function handler(req: NextRequest) {
  const queryParams = req.nextUrl.searchParams
  const tokenId: any = queryParams.get("tokenId")

  const tokenSheets = sheets.filter((data) => data.tokenId === parseInt(tokenId, 10))
  const tokenSheet: any = tokenSheets?.length > 0 ? tokenSheets[0] : null

  const [type, skin, acc, eye, hair, color, outfit] = getDeterministricAttributes(
    parseInt(tokenId, 10),
  )

  return new ImageResponse(
    tokenSheet?.image ? (
      <IpfsImage ipfs={tokenSheet.image} />
    ) : (
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
      width: 396,
      height: 480,
    },
  )
}
