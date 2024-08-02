/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "@vercel/og"
import { NextRequest, NextResponse } from "next/server"
import tokenMinted from "@/lib/tokenMinted"
import { CHAIN_ID, DROP_ADDRESS } from "@/lib/consts"
import getMetadata from "@/lib/firebase/getMetadata"
import getIpfsLink from "@/lib/getIpfsLink"

export const runtime = "edge"
export const dynamic = "force-dynamic"

export async function GET(req: NextRequest) {
  const queryParams = req.nextUrl.searchParams
  const tokenId: any = queryParams.get("tokenId")
  const chainId: any = queryParams.get("chainId")

  const data = await getMetadata(tokenId)
  const metadata = data[`${chainId || CHAIN_ID}`]
  const pfp = getIpfsLink(metadata.pfp)

  const isMinted = await tokenMinted(DROP_ADDRESS, tokenId)
  if (!isMinted) return NextResponse.json({ message: "Not minted yet!" })

  return new ImageResponse(
    (
      <img
        src={pfp}
        style={{
          width: 480,
        }}
        alt="not found"
      />
    ),
    {
      width: 480,
      height: 480,
    },
  )
}
