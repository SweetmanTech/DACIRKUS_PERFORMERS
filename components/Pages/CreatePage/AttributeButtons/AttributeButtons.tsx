import { CTYPES } from "../../../../lib/character"
import { useCharacter } from "../../../../providers/CharacterProvider"
import Button from "../Button"

const AttributeButtons = () => {
  const { cType, nextCType, prevCType, randomCType } = useCharacter()

  return (
    <div
      className="flex flex-col 
      md:gap-y-[6px] lg:gap-y-[8px] xl:gap-y-[10px]
      md:px-[18px] lg:px-[24px] xl:px-[30px]"
    >
      <Button
        value="neckaceGolo"
        label="Acc."
        onNext={nextCType}
        onPrev={prevCType}
        onRandom={randomCType}
      />
      <Button
        value="red"
        label="Eyes"
        onNext={nextCType}
        onPrev={prevCType}
        onRandom={randomCType}
      />
      <Button
        value="horn"
        label="Hair"
        onNext={nextCType}
        onPrev={prevCType}
        onRandom={randomCType}
      />
      <Button
        value="Brown"
        label="Color."
        onNext={nextCType}
        onPrev={prevCType}
        onRandom={randomCType}
      />
      <Button
        value="YellowGeneric"
        label="Dutfit"
        onNext={nextCType}
        onPrev={prevCType}
        onRandom={randomCType}
      />
      <Button
        value="Brown"
        label="Skin"
        onNext={nextCType}
        onPrev={prevCType}
        onRandom={randomCType}
      />
      <Button
        value={CTYPES[cType]}
        label="Type"
        onNext={nextCType}
        onPrev={prevCType}
        onRandom={randomCType}
      />
    </div>
  )
}

export default AttributeButtons
