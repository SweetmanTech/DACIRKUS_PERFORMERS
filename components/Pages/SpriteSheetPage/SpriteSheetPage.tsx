import getMetadata from "@/lib/firebase/getMetadata"
import getDeterministricAttributes from "@/lib/getDeterministricAttributes"
import { useCharacter } from "@/providers/CharacterProvider"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import Media from "@/shared/Media"
import SeoHead from "@/components/SeoHead"
import CharacterModel from "./CharacterModel"

const SpriteSheetPage = () => {
  const { setCType, setCAcc, setCEye, setCHair, setCColor, setCOutFit, setCSkin, setCBG } =
    useCharacter() as any

  const [loading, setLoading] = useState(true)

  const { query } = useParams() as any
  const chainId = query?.chainId
  const tokenId = query?.tokenId as string

  useEffect(() => {
    const init = async () => {
      const [type, skin, acc, eye, hair, color, outfit, bg] = getDeterministricAttributes(
        parseInt(tokenId, 10),
      )
      const response = (await getMetadata(tokenId)) as any

      const firebaseSheet = response?.[`${chainId}`]?.sheet

      setCType(firebaseSheet?.type || type)
      setCAcc(firebaseSheet?.acc || acc)
      setCEye(firebaseSheet?.eye || eye)
      setCHair(firebaseSheet?.hair || hair)
      setCColor(firebaseSheet?.color || color)
      setCOutFit(firebaseSheet?.outfit || outfit)
      setCSkin(firebaseSheet?.skin || skin)
      setCBG(firebaseSheet?.bg || bg)
      setLoading(false)
    }
    if (!tokenId || !chainId) return
    init()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tokenId, chainId])

  return (
    <div className="relative min-h-screen min-w-screen">
      <SeoHead />
      <Media
        type="image"
        link="/images/Layout/background-green.png"
        blurLink="/images/Layout/background-green.png"
        containerClasses="w-screen h-full !absolute left-0 top-0"
        containerStyle={{
          imageRendering: "pixelated",
        }}
        imageClasses="!object-cover"
      />
      {!loading && <CharacterModel />}
    </div>
  )
}

export default SpriteSheetPage
