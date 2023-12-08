import { STATUS } from "../../../../lib/bookStatus"
import { STEPS } from "../../../../lib/createStep"
import { useAnimatedBook } from "../../../../providers/AnimatedBookProvider"
import { useCreate } from "../../../../providers/CreateProvider"

const MintButton = () => {
  const { setCurrentStatus } = useAnimatedBook()
  const { setCurrentStep } = useCreate()

  const handleMint = () => {
    setCurrentStatus(STATUS.LEFTFLIP)
    setCurrentStep(STEPS.SUCCESS)
  }

  return (
    <button
      type="button"
      className="w-[130px] aspect-[2/1] border-[2px] border-black flex justify-center items-center
          bg-[#ca4343] active:bg-[#4e545d] shadow-[inset_0px_-3px_0px_1px_#323840] active:shadow-[inset_none] rounded-[5px]"
      onClick={handleMint}
    >
      <p className="text-white font-slimfit text-[32px]">Mint</p>
    </button>
  )
}

export default MintButton
