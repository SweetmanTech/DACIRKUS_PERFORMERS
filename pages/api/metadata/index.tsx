import getDeterministricAttributes from "@/lib/getDeterministricAttributes"
import getAttributes from "@/lib/getAttributes"
import { CACCS, CBGNAMES, CCOLORS, CEYES, CHAIRS, COUTFITS, CSKINS, CTYPES } from "@/lib/character"
import { CHAIN_ID, DOMAIN_URL, DROP_ADDRESS } from "@/lib/consts"
import tokenMinted from "@/lib/tokenMinted"
import getMetadata from "@/lib/firebase/getMetadata"

export default async function handler(req: any, res: any) {
  const { tokenId, chainId } = req.query

  const isMinted = await tokenMinted(DROP_ADDRESS, tokenId)
  if (!isMinted) return res.status(500).json({ message: "Not minted yet!" })

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

  const metadata = response[`${chainId || CHAIN_ID}`]
  const finalAttribute = metadata?.attributes || deterministicAttribute
  const imageUrl = `${DOMAIN_URL}/api/image/${tokenId}`
  const sheetUrl = `${DOMAIN_URL}/api/spritesheet/${tokenId}`

  const metaData = {
    name: `Performer #${tokenId}`,
    image: imageUrl,
    description: `Spritesheet: ${sheetUrl}`,
    attributes: finalAttribute,
  }

  return res.status(200).json(metaData)
}
