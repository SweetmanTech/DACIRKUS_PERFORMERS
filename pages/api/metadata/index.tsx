import getDeterministricAttributes from "@/lib/getDeterministricAttributes"
import getAttributes from "@/lib/getAttributes"
import { CACCS, CBGNAMES, CCOLORS, CEYES, CHAIRS, COUTFITS, CSKINS, CTYPES } from "@/lib/character"
import { CHAIN_ID, DOMAIN_URL, DROP_ADDRESS } from "@/lib/consts"
import tokenMinted from "@/lib/tokenMinted"
import getMetadata from "@/lib/firebase/getMetadata"
import getIpfsLink from "@/lib/getIpfsLink"

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
  const pfp = metadata?.pfp
  const ss = metadata?.ss

  const pfpUrl = pfp ? getIpfsLink(pfp) : `${DOMAIN_URL}/api/image/${tokenId}`
  const sheetUrl = ss ? getIpfsLink(ss) : `${DOMAIN_URL}/api/spritesheet/${tokenId}`

  const metaData = {
    name: `Performer #${tokenId}`,
    image: pfpUrl,
    description: `PFP Image: ${pfpUrl} \nSpritesheet: ${sheetUrl}`,
    attributes: finalAttribute,
  }

  return res.status(200).json(metaData)
}
