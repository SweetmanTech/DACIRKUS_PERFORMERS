import { CACCS, CCOLORS, CEYES, CHAIRS, CTYPES } from "../../../../lib/character"
import { useCharacter } from "../../../../providers/CharacterProvider"
import Button from "../Button"

const AttributeButtons = () => {
  const {
    cType,
    cAcc,
    cEye,
    cHair,
    cColor,
    nextCType,
    prevCType,
    randomCType,
    randomCAcc,
    nextCAcc,
    prevCAcc,
    nextCEye,
    prevCEye,
    randomCEye,
    nextCColor,
    prevCColor,
    randomCColor,
    nextCHair,
    prevCHair,
    randomCHair,
  } = useCharacter()

  return (
    <div
      className="flex flex-col 
      md:gap-y-[6px] lg:gap-y-[8px] xl:gap-y-[10px]
      md:px-[18px] lg:px-[24px] xl:px-[30px]"
    >
      <Button
        value={CACCS[cAcc]}
        label="Acc."
        onNext={nextCAcc}
        onPrev={prevCAcc}
        onRandom={randomCAcc}
      />
      <Button
        value={CEYES[cEye]}
        label="Eyes"
        onNext={nextCEye}
        onPrev={prevCEye}
        onRandom={randomCEye}
      />
      <Button
        value={CHAIRS[cHair]}
        label="Hair"
        onNext={nextCHair}
        onPrev={prevCHair}
        onRandom={randomCHair}
      />
      <Button
        value={CCOLORS[cColor]}
        label="Color"
        onNext={nextCColor}
        onPrev={prevCColor}
        onRandom={randomCColor}
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
