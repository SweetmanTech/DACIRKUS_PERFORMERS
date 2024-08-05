import getDeterministricAttributes from "@/lib/getDeterministricAttributes"
import getAttributes from "@/lib/getAttributes"
import { CACCS, CBGNAMES, CCOLORS, CEYES, CHAIRS, COUTFITS, CSKINS, CTYPES } from "@/lib/character"
import { CHAIN_ID, DOMAIN_URL, DROP_ADDRESS } from "@/lib/consts"
import tokenMinted from "@/lib/tokenMinted"
import getMetadata from "@/lib/firebase/getMetadata"
import { NextRequest, NextResponse } from "next/server"

async function metadata(req: NextRequest): Promise<NextResponse> {
  const tokenId = req.nextUrl.searchParams.get("tokenId") as string
  const chainId = req.nextUrl.searchParams.get("chainId") as string

  const isMinted = await tokenMinted(DROP_ADDRESS, tokenId)
  if (!isMinted)
    return new NextResponse("Not minted yet!", {
      status: 422,
    })

  const [type, skin, acc, eye, hair, color, outfit, bg] = getDeterministricAttributes(
    parseInt(tokenId, 10),
  )

  const response = (await getMetadata(tokenId)) as any
  const deterministicAttribute = getAttributes(
    CTYPES[type],
    CSKINS[skin],
    CACCS[acc],
    CEYES[eye],
    CHAIRS[hair],
    CCOLORS[color],
    COUTFITS[outfit],
    CBGNAMES[bg],
  )

  const data = response[`${chainId || CHAIN_ID}`]
  const finalAttribute = data?.attributes || deterministicAttribute

  const pfpUrl = `${DOMAIN_URL}/api/image?tokenId=${tokenId}`
  const sheetUrl = `${DOMAIN_URL}/api/spritesheet?tokenId=${tokenId}`

  const meta = {
    name: `Performer #${tokenId}`,
    image: pfpUrl,
    description: `PFP: ${pfpUrl} \n Spritesheet: ${sheetUrl}`,
    attributes: finalAttribute,
  }

  return new NextResponse(JSON.stringify(meta), {
    headers: {
      "content-type": "application/json",
    },
  })
}

export async function GET(req: NextRequest): Promise<NextResponse> {
  return metadata(req)
}
