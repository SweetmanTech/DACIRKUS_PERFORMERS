import { CBGCOLORS } from "@/lib/character"
import CAccModel from "./CAccModel"
import CEyeModel from "./CEyeModel"
import CHairModel from "./CHairModel"
import COutFitModel from "./COutFitModel"
import CSkinkModel from "./CSkinkModel"

const SheetModel = ({type, skin, outfit, hair, eye, bg, acc, color}) => {
  const visibleHair = hair !== 1

  return (
    <div
      className="w-fit px-4 pb-6 pointer-events-none"
      style={{
        background: CBGCOLORS[bg],
      }}
    >
      <div className="relative w-fit">
        <CSkinkModel skin={skin} type={type}/>
        <CAccModel acc={acc} type={type}/>
        <CEyeModel eye={eye} type={type}/>
        {visibleHair && <CHairModel hair={hair} color={color} type={type}/>}
        <COutFitModel outfit={outfit} type={type}/>
      </div>
    </div>
  )
}

export default SheetModel
