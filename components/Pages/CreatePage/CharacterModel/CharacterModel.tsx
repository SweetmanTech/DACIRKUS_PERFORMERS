import { useCharacter } from "@/providers/CharacterProvider"
import CAccModel from "./CAccModel"
import CEyeModel from "./CEyeModel"
import CHairModel from "./CHairModel"
import COutFitModel from "./COutFitModel"
import CSkinModel from "./CSkinModel"

const CharacterModel = ({ isSingle = false, index = 0 }) => {
  const { cHair, dummyRandom } = useCharacter() as any

  const visibleHair = isSingle ? cHair !== 1 : dummyRandom[index].hair !== 1

  return (
    <div className="w-full h-full relative">
      <CSkinModel isSingle={isSingle} index={index} />
      <CAccModel isSingle={isSingle} index={index} />
      <CEyeModel isSingle={isSingle} index={index} />
      {visibleHair && <CHairModel isSingle={isSingle} index={index} />}
      <COutFitModel isSingle={isSingle} index={index} />
    </div>
  )
}

export default CharacterModel
