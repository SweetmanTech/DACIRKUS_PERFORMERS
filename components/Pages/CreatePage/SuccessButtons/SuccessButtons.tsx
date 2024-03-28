import { STEPS } from "../../../../lib/createStep"
import { useCreate } from "../../../../providers/CreateProvider"
import HomeButton from "../../../HomeButton"
import ZoraButton from "../../../ZoraButton"
import TweetButton from "../../../TweetButton"

const SuccessButtons = () => {
  const { setCurrentStep } = useCreate()

  return (
    <div
      className="flex items-center md:gap-x-[18px] lg:gap-x-[24px] xl:gap-x-[30px]
      md:pt-[9px] lg:pt-[12px] xl:pt-[15px]"
    >
      <ZoraButton />
      <HomeButton onClick={() => setCurrentStep(STEPS.CHOOSE_CHARACTER_TYPE)} />
      <TweetButton />
    </div>
  )
}

export default SuccessButtons
