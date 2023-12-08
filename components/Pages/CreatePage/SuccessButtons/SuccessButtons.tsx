import { STEPS } from "../../../../lib/createStep"
import { useCreate } from "../../../../providers/CreateProvider"
import BackHomeButton from "../../../BackHomeButton"
import PlayButton from "../../../PlayButton"
import TweetButton from "../../../TweetButton"

const SuccessButtons = () => {
  const { setCurrentStep } = useCreate()

  return (
    <div
      className="flex items-center md:gap-x-[18px] lg:gap-x-[24px] xl:gap-x-[30px]
      pt-[15px]"
    >
      <PlayButton />
      <BackHomeButton onClick={() => setCurrentStep(STEPS.CHOOSE_CHARACTER_TYPE)} />
      <TweetButton />
    </div>
  )
}

export default SuccessButtons
