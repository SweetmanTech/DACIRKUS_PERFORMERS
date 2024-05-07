import { useCharacter } from "@/providers/CharacterProvider"
import { useEffect } from "react"
import { CBGCOLORS, CBGNAMES } from "@/lib/character"
import AttributeButtons from "../AttributeButtons"
import CharacterModel from "../CharacterModel"
import MenuButtons from "../MenuButtons"
import Button from "../Button"

const AttributeSelect = () => {
  const { randomAttr, cBG, nextCBG, prevCBG } = useCharacter()

  useEffect(() => {
    randomAttr()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="w-full h-full grid grid-cols-2">
      <div
        className="flex flex-col justify-center 
          md:gap-y-[12px] lg:gap-y-[16px] xl:gap-y-[20px]"
      >
        <AttributeButtons />
        <MenuButtons />
      </div>
      <div className="relative w-full md:pr-[18px] md:pr-[24px] xl:pr-[30px]">
        <div
          className="absolute left-0 top-0 z-[10]
        flex items-center flex-col gap-1 w-full md:pt-4 lg:pt-6 xl:pt-8"
        >
          <Button label="Background." onNext={nextCBG} onPrev={prevCBG} />
          <p className="text-white font-slimfit md:text-[19px] lg:text-[26px] xl:text-[32px]">
            {CBGNAMES[cBG]}
          </p>
        </div>
        <div
          className="absolute
          md:left-[18px] lg:left-[24px] xl:left-[30px]
          md:top-[9px] lg:top-[12px] xl:top-[15px]
          md:w-[calc(100%-30px)] lg:w-[calc(100%-40px)] xl:w-[calc(100%-50px)] 
          md:h-[calc(100%-18px)] lg:h-[calc(100%-24px)] xl:h-[calc(100%-30px)]"
          style={{
            background: CBGCOLORS[cBG],
          }}
        />
        <div className="relative w-full h-full md:ml-[-30px] lg:ml-[-40px] xl:ml-[-50px]">
          <div className="relative w-full h-full overflow-hidden">
            <div
              className="absolute scale-[3.5] h-full w-full left-0 top-0
            md:translate-y-[510px] lg:translate-y-[680px] xl:translate-y-[850px] 
            md:translate-x-[258px] lg:translate-x-[344px] xl:translate-x-[430px]"
            >
              <CharacterModel isSingle />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AttributeSelect
