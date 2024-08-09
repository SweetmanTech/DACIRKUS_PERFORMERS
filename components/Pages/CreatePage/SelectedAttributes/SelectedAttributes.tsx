import { CACCS, CEYES, CHAIRS, COUTFITS, CSKINS, CTYPES } from "../../../../lib/character"
import { useCharacter } from "../../../../providers/CharacterProvider"

const SelectedAttributes = () => {
  const { cAcc, cEye, cHair, cOutFit, cSkin, cType } = useCharacter() as any

  return (
    <div className="font-slimfit md:text-[14.4px] lg:text-[19.2px] xl:text-[24px] text-white">
      <div className="flex md:gap-x-[12px] lg:gap-x-[16px] xl:gap-x-[20px]">
        <p>Acc</p>
        <p>=</p>
        <p>{CACCS[cAcc]}</p>
      </div>
      <div className="flex md:gap-x-[12px] lg:gap-x-[16px] xl:gap-x-[20px]">
        <p>Eyes</p>
        <p>=</p>
        <p>{CEYES[cEye]}</p>
      </div>
      <div className="flex md:gap-x-[12px] lg:gap-x-[16px] xl:gap-x-[20px]">
        <p>Hair</p>
        <p>=</p>
        <p>{CHAIRS[cHair]}</p>
      </div>
      <div className="flex md:gap-x-[12px] lg:gap-x-[16px] xl:gap-x-[20px]">
        <p>Outfit</p>
        <p>=</p>
        <p>{COUTFITS[cOutFit]}</p>
      </div>
      <div className="flex md:gap-x-[12px] lg:gap-x-[16px] xl:gap-x-[20px]">
        <p>Skin</p>
        <p>=</p>
        <p>{CSKINS[cSkin]}</p>
      </div>
      <div className="flex md:gap-x-[12px] lg:gap-x-[16px] xl:gap-x-[20px]">
        <p>Type</p>
        <p>=</p>
        <p>{CTYPES[cType]}</p>
      </div>
    </div>
  )
}

export default SelectedAttributes
