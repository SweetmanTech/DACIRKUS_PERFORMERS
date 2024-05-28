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
  const sheet = metadata?.sheet
  const ss = metadata?.ss

  const endpoint = `api/og?type=${sheet?.type || type}&skin=${sheet?.skin || skin}&acc=${
    sheet?.acc || acc
  }&eye=${sheet?.eye || eye}&hair=${sheet?.hair || hair}&color=${sheet?.color || color}&outfit=${
    sheet?.outfit || outfit
  }&bg=${sheet?.bg || bg}&tokenId=${tokenId}`

  const pfpUrl = pfp ? getIpfsLink(pfp) : `${DOMAIN_URL}/${endpoint}`
  const sheetUrl = ss
    ? getIpfsLink(ss)
    : `${DOMAIN_URL}/spritesheet/${chainId || CHAIN_ID}/${tokenId}`

  const metaData = {
    name: `Performer #${tokenId}`,
    image: pfpUrl,
    external_url: "https://www.daperformers.com",
    description: `PFP: ${pfpUrl} \n Spritesheet: ${sheetUrl}`,
    attributes: finalAttribute,
  }

  return res.status(200).json(metaData)
}
