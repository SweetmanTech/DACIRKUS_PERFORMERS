import CAccModel from "./CAccModel"
import CEyeModel from "./CEyeModel"
import CHairModel from "./CHairModel"
import COutFitModel from "./COutFitModel"
import CSkinkModel from "./CSkinkModel"

const CharacterModel = ({ isSingle = false, index = 0 }) => (
  <div className="w-full h-full relative">
    <CSkinkModel isSingle={isSingle} index={index} />
    <CAccModel isSingle={isSingle} index={index} />
    <CEyeModel isSingle={isSingle} index={index} />
    <CHairModel isSingle={isSingle} index={index} />
    <COutFitModel isSingle={isSingle} index={index} />
  </div>
)

export default CharacterModel
