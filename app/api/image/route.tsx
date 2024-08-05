/* eslint-disable @next/next/no-img-element */
import { NextRequest, NextResponse } from "next/server"
import tokenMinted from "@/lib/tokenMinted"
import { CHAIN_ID, DROP_ADDRESS } from "@/lib/consts"
import getMetadata from "@/lib/firebase/getMetadata"
import getIpfsLink from "@/lib/getIpfsLink"

export async function GET(req: NextRequest) {
  const queryParams = req.nextUrl.searchParams
  const tokenId: any = queryParams.get("tokenId")
  const chainId: any = queryParams.get("chainId")

  const data = await getMetadata(tokenId)
  const metadata = data[`${chainId || CHAIN_ID}`]
  const pfp = getIpfsLink(metadata?.pfp)

  if (!pfp) return NextResponse.json({ message: "Not uploaded pfp yet!" })

  const isMinted = await tokenMinted(DROP_ADDRESS, tokenId)
  if (!isMinted) return NextResponse.json({ message: "Not minted yet!" })

  const response = await fetch(pfp)

  if (!response.ok) {
    throw new Error("failed to fetch image")
  }

  const imageBuffer = await response.arrayBuffer()

  return new NextResponse(imageBuffer, {
    status: 200,
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "s-maxage=86400, stale-while-revalidate",
    },
  })
}
