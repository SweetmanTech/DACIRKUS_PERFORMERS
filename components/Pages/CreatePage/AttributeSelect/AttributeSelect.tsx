import { useCharacter } from "@/providers/CharacterProvider"
import { useEffect } from "react"
import { CBGNAMES, CBGCOLORS } from "@/lib/character"
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
      <div className="relative w-full md:pr-[18px] xl:pr-[30px]">
        <div
          className="absolute left-0 top-0 z-[10]
        flex items-center flex-col gap-0 w-full md:pt-4 lg:pt-6 xl:pt-8"
        >
          <Button className="!text-[32px]" label="Background" onNext={nextCBG} onPrev={prevCBG} />
          <p className="text-white font-slimfit md:text-[12px] lg:text-[20px] xl:text-[24px]">
            {CBGNAMES[cBG]}
          </p>
        </div>
        <div
          className="absolute !h-2/3 
          md:left-[12%] lg:left-[12%] xl:left-[12%]
          md:bottom-[10%] lg:bottom-[10%] xl:bottom-[10%]
          md:w-[calc(100%-20%)] lg:w-[calc(100%-20%)] xl:w-[calc(100%-20%)] 
          md:h-[calc(100%-18px)] lg:h-[calc(100%-24px)] xl:h-[calc(100%-30px)]"
          style={{
            background: CBGCOLORS[cBG],
          }}
        />
        <div className="relative w-full h-full md:ml-[-30px] lg:ml-[-40px] xl:ml-[-50px] pointer-events-none">
          <div className="relative w-full h-full">
            <div
              className="absolute h-full left-0 md:bottom-[12px] lg:bottom-[16px] xl:bottom-[20px]
            md:w-[165px] lg:w-[220px] xl:w-[275px] overflow-hidden
            md:left-[118.2px] lg:left-[157.6px] xl:left-[197px] scale-[0.9]"
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
