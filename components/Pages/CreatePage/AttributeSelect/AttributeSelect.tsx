import { useCharacter } from "@/providers/CharacterProvider"
import { useEffect } from "react"
import AttributeButtons from "../AttributeButtons"
import CharacterModel from "../CharacterModel"
import MenuButtons from "../MenuButtons"

const AttributeSelect = () => {
  const { randomAttr } = useCharacter()

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
        <div className="relative w-full h-full md:ml-[-30px] lg:ml-[-40px] xl:ml-[-50px] ">
          <div className="relative w-full h-full overflow-hidden">
            <div
              className="absolute scale-[4.5] h-full w-full left-0 top-0
            md:translate-y-[612px] lg:translate-y-[816px] xl:translate-y-[1020px] 
            md:translate-x-[294px] lg:translate-x-[392px] xl:translate-x-[490px]"
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
