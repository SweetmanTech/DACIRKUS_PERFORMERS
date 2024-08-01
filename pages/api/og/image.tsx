/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "@vercel/og"
import { NextRequest, NextResponse } from "next/server"
import getDeterministricAttributes from "@/lib/getDeterministricAttributes"
import tokenMinted from "@/lib/tokenMinted"
import { DOMAIN_URL, DROP_ADDRESS } from "@/lib/consts"
import { CACCS, CBGCOLORS, CCOLORS, CEYES, CHAIRS, COUTFITS, CSKINS, CTYPES } from "@/lib/character"

export const config = {
  runtime: "experimental-edge",
  dynamic: "force-dynamic",
}

export default async function GET(req: NextRequest) {
  const queryParams = req.nextUrl.searchParams
  const tokenId: any = queryParams.get("tokenId")

  const isMinted = await tokenMinted(DROP_ADDRESS, tokenId)
  if (!isMinted) return NextResponse.json({ message: "Not minted yet!" })

  const [type, skin, acc, eye, hair, color, outfit, bg] = getDeterministricAttributes(
    parseInt(tokenId, 10),
  )

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          background: CBGCOLORS[bg],
          width: 50,
          height: 50,
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 30,
            height: 50,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              position: "relative",
              width: 192,
              height: 1152,
              imageRendering: "pixelated",
              top: -528,
            }}
          >
            <img
              src={`${DOMAIN_URL}/images/Characters/${CTYPES[type]}/SkinTone/${CSKINS[skin]}.png`}
              style={{
                width: 192,
                imageRendering: "pixelated",
                zIndex: 1,
              }}
              alt="not found"
            />
            <img
              src={`${DOMAIN_URL}/images/Characters/${CTYPES[type]}/Eyes/${CEYES[eye]}.png`}
              style={{
                width: 192,
                imageRendering: "pixelated",
                position: "absolute",
                left: 0,
                top: 0,
                zIndex: 2,
              }}
              alt="not found"
            />
            {hair !== 1 && (
              <img
                src={`${DOMAIN_URL}/images/Characters/${CTYPES[type]}/Hair/${CCOLORS[color]}${CHAIRS[hair]}.png`}
                style={{
                  width: 192,
                  imageRendering: "pixelated",
                  position: "absolute",
                  left: 0,
                  top: 0,
                  zIndex: 3,
                }}
                alt="not found"
              />
            )}
            <img
              src={`${DOMAIN_URL}/images/Characters/${CTYPES[type]}/Accesories/${CACCS[acc]}.png`}
              style={{
                width: 192,
                imageRendering: "pixelated",
                position: "absolute",
                left: 0,
                top: 0,
                zIndex: 4,
              }}
              alt="not found"
            />
            <img
              src={`${DOMAIN_URL}/images/Characters/${CTYPES[type]}/Outfit/${COUTFITS[outfit]}.png`}
              style={{
                width: 192,
                imageRendering: "pixelated",
                position: "absolute",
                left: 0,
                top: 0,
                zIndex: 5,
              }}
              alt="not found"
            />
          </div>
        </div>
      </div>
    ),
    {
      width: 50,
      height: 50,
    },
  )
}
