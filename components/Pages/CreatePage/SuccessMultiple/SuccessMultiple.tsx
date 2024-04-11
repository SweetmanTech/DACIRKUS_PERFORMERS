import { useCreate } from "@/providers/CreateProvider"
import { useCharacter } from "@/providers/CharacterProvider"
import getMultipleCols from "@/lib/ui/getMultipleCols"
import useUiMetadata from "@/hooks/useUIMetadata"
import WavyText from "../../../WavyText"
import CharacterModel from "../CharacterModel"
import SelectedAttributes from "../SelectedAttributes"
import SuccessButtons from "../SuccessButtons"

const SuccessMultiple = () => {
  const { mintedTokenId } = useCreate()
  const { dummyRandom } = useCharacter()

  const cols = getMultipleCols(dummyRandom.length)
  const uiMedatdata = useUiMetadata(dummyRandom.length)

  return (
    <div className="w-full h-full grid grid-cols-2">
      <div className="relative w-full h-full">
        {dummyRandom.map((_, i) => (
          <div
            className="absolute w-full h-full md:pr-[18px] md:pr-[24px] xl:pr-[30px]"
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            style={{
              left: uiMedatdata.imageWidth * (i % cols) + uiMedatdata.leftOffset,
              top: uiMedatdata.imagHeight * Math.floor(i / cols) + uiMedatdata.topOffset,
              transform: `scale(${uiMedatdata.scale})`,
            }}
          >
            <div className="relative w-full h-full md:ml-[-30px] lg:ml-[-40px] xl:ml-[-50px] pointer-events-none">
              <div className="relative w-full h-full overflow-hidden">
                <div
                  className="absolute scale-[4.5] h-full w-full left-0 top-0
                md:translate-y-[612px] lg:translate-y-[816px] xl:translate-y-[1020px] 
                md:translate-x-[294px] lg:translate-x-[392px] xl:translate-x-[490px]"
                >
                  <CharacterModel index={i} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className="md:py-[18px] lg:py-[24px] xl:py-[30px] 
      md:pl-[42px] lg:pl-[56px] xl:pl-[70px] 
      md:pr-[18px] lg:pr-[24px] md:pr-[30px]"
      >
        <WavyText
          text="Welcome To"
          className="text-white md:text-[36px] lg:text-[48px] xl:text-[60px] font-slimfit leading-[100%] 
          md:pb-[12px] lg:pb-[16px] xl:pb-[20px]"
        />
        <WavyText
          text="Da Cirkus"
          className="text-white md:text-[36px] lg:text-[48px] xl:text-[60px] font-slimfit leading-[100%]"
        />
        <p
          className="text-white font-slimfit md:text-[38.4px] lg:text-[51.2px] xl:text-[64px] drop-shadow-[2px_2px_2px_rgba(0,0,0,1)] text-right 
        md:pt-[6px] lg:pt-[8px] xl:pt-[10px]"
        >
          #{mintedTokenId}
        </p>
        <SelectedAttributes />
        <SuccessButtons />
      </div>
    </div>
  )
}

export default SuccessMultiple
