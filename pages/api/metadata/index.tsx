import getDeterministricAttributes from "@/lib/getDeterministricAttributes"
import getAttributes from "@/lib/getAttributes"
import { CACCS, CCOLORS, CEYES, CHAIRS, COUTFITS, CSKINS, CTYPES } from "@/lib/character"
import sheets from "../spritesheet/sheets.json"

export default async function handler(req: any, res: any) {
  const { tokenId } = req.query

  const [type, skin, acc, eye, hair, color, outfit] = getDeterministricAttributes(
    parseInt(tokenId, 10),
  )
  const deterministicAttribute = getAttributes(
    CTYPES[type],
    CSKINS[skin],
    CACCS[acc],
    CEYES[eye],
    CHAIRS[hair],
    CCOLORS[color],
    COUTFITS[outfit],
  )

  const tokenSheets = sheets.filter((data) => data.tokenId === parseInt(tokenId, 10))
  const tokenSheet: any = tokenSheets?.length > 0 ? tokenSheets[0] : null

  const metaData = {
    name: `Performer #${tokenId}`,
    image: tokenSheet?.image || `https://localhost:3000/api/og?${tokenId}`,
    description: tokenSheet?.description || `PFP: https://localhost:3000/api/og?${tokenId}`,
    attributes: tokenSheet?.attributes || deterministicAttribute,
  }

  res.status(200).json(metaData)
}
