import AttributeButtons from "../AttributeButtons"
import MenuButtons from "../MenuButtons"

const AttributeSelect = () => (
  <div className="w-full h-full grid grid-cols-2">
    <div
      className="flex flex-col justify-center 
        md:gap-y-[12px] lg:gap-y-[16px] xl:gap-y-[20px]"
    >
      <AttributeButtons />
      <MenuButtons />
    </div>
  </div>
)

export default AttributeSelect
