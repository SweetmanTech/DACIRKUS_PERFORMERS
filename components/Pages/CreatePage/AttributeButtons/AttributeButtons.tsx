import Button from "../Button"

const AttributeButtons = () => (
  <div
    className="flex flex-col 
    md:gap-y-[6px] lg:gap-y-[8px] xl:gap-y-[10px]
    md:px-[18px] lg:px-[24px] xl:px-[30px]"
  >
    <Button value="neckaceGolo" label="Acc." />
    <Button value="red" label="Eyes" />
    <Button value="horn" label="Hair" />
    <Button value="Brown" label="Color." />
    <Button value="YellowGeneric" label="Dutfit" />
    <Button value="Brown" label="Skin" />
    <Button value="MagicianM" label="Type" />
  </div>
)

export default AttributeButtons
