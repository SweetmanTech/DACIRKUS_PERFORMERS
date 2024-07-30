import { useCharacter } from "@/providers/CharacterProvider"
import { CBGCOLORS } from "@/lib/character"
import CAccModel from "./CAccModel"
import CEyeModel from "./CEyeModel"
import CHairModel from "./CHairModel"
import COutFitModel from "./COutFitModel"
import CSkinkModel from "./CSkinkModel"

const CharacterModel = () => {
  const { cHair, cBG } = useCharacter()

  const visibleHair = cHair !== 1

  return (
    <div className="relative z-[2] flex justify-center">
      <div
        className="w-fit px-4 pb-6 pointer-events-none h-screen overflow-hidden"
        style={{
          background: CBGCOLORS[cBG],
        }}
      >
        <div className="relative w-fit h-full">
          <CSkinkModel />
          <CAccModel />
          <CEyeModel />
          {visibleHair && <CHairModel />}
          <COutFitModel />
        </div>
      </div>
    </div>
  )
}

export default CharacterModel
