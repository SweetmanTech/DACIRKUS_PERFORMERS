import { useCharacter } from "@/providers/CharacterProvider"
import { useEffect } from "react"
import { CBGCOLORS, CBGNAMES } from "@/lib/character"
import AttributeButtons from "../AttributeButtons"
import MenuButtons from "../MenuButtons"
import Button from "../Button"
import Animation from "../CharacterModel/Animation"

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
        <div className="relative w-full h-full md:ml-[-30px] lg:ml-[-40px] xl:ml-[-50px] pointer-events-none">
          <div className="relative w-full h-full">
            <div
              className="absolute h-full left-0 top-0
            md:w-[165px] lg:w-[220px] xl:w-[275px] overflow-hidden
            md:left-[118.2px] lg:left-[157.6px] xl:left-[197px]"
            >
              <Animation />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AttributeSelect
