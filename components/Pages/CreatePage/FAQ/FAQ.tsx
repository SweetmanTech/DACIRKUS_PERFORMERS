import { useCreate } from "@/providers/CreateProvider"
import { useCharacter } from "@/providers/CharacterProvider"
import getMultipleCols from "@/lib/ui/getMultipleCols"
import useUiMetadata from "@/hooks/useUIMetadata"
import WavyText from "../../../WavyText"
import CharacterModel from "../CharacterModel"
import SelectedAttributes from "../SelectedAttributes"
import SuccessButtons from "../SuccessButtons"

const FAQCard = () => {
  const { mintedTokenId, quantity } = useCreate()
  const { dummyRandom } = useCharacter()

  const cols = getMultipleCols(quantity)
  const uiMedatdata = useUiMetadata(quantity)
  const lastMintedTokenId = mintedTokenId + quantity - 1

  return (
    <div className="w-full h-full grid grid-cols-2">
      <div className="relative w-full h-full" />
      <div
        className="md:py-[18px] lg:py-[24px] xl:py-[30px] 
      md:pl-[42px] lg:pl-[56px] xl:pl-[70px] 
      md:pr-[18px] lg:pr-[24px] md:pr-[30px]"
      />
    </div>
  )
}

export default FAQCard
