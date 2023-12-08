import { STATUS } from "../../../../lib/bookStatus"
import { STEPS } from "../../../../lib/createStep"
import { useAnimatedBook } from "../../../../providers/AnimatedBookProvider"
import { useCreate } from "../../../../providers/CreateProvider"
import WavyText from "../../../WavyText"
import CharacterItem from "../CharacterItem"

const CharacterList = () => {
  const { setCurrentStatus } = useAnimatedBook()
  const { setCurrentStep } = useCreate()

  const selectCustom = () => {
    setCurrentStatus(STATUS.LEFTFLIP)
    setCurrentStep(STEPS.SELECT_CHARACTER)
  }

  const selectRandom = () => {
    setCurrentStatus(STATUS.LEFTFLIP)
    setCurrentStep(STEPS.SUCCESS)
  }

  return (
    <div
      className="md:pl-[42px] lg:pl-[56px] xl:pl-[70px] 
      xl:pt-[60px] lg:pt-[48px] md:pt-[36px] flex flex-col 
      xl:gap-y-[20px] lg:gap-y-[16px] md:gap-y-[12px]"
    >
      <CharacterItem type={1} label="Custom Character" onClick={selectCustom} />
      <CharacterItem type={5} label="Random Character" onClick={selectRandom} />
      <CharacterItem type={25} label="Random Character" onClick={selectRandom} />
      <CharacterItem type={100} label="Random Character" onClick={selectRandom} />
      <WavyText
        text={`"Whale's only"`}
        className="text-[#ca4343] drop-shadow-[2px_2px_2px_rgba(0,0,0,1)] font-slimfit 
        md:text-[18px] lg:text-[24px] xl:text-[30px]"
      />
    </div>
  )
}

export default CharacterList
