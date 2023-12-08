import CAccModel from "../CAccModel"
import CEyeModel from "../CEyeModel"
import CHairModel from "../CHairModel"
import COutFitModel from "../COutFitModel"
import CSkinkModel from "../CSkinkModel"

const CharacterModel = () => (
  <div className="w-full h-full relative">
    <CSkinkModel />
    <CAccModel />
    <CEyeModel />
    <CHairModel />
    <COutFitModel />
  </div>
)

export default CharacterModel
