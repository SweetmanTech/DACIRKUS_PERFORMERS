import { usePrivy } from "@privy-io/react-auth"
import { STATUS } from "../../../../lib/bookStatus"
import { STEPS } from "../../../../lib/createStep"
import { useAnimatedBook } from "../../../../providers/AnimatedBookProvider"
import { useCreate } from "../../../../providers/CreateProvider"
import useZoraMinByPrivy from "@/hooks/useZoraMintByPrivy"

const MintButton = () => {
  const { setCurrentStatus } = useAnimatedBook()
  const { setCurrentStep } = useCreate()
  const { authenticated, login, logout } = usePrivy()
  const { mintWithRewards } = useZoraMinByPrivy()

  const handleMint = () => {
    if (!authenticated) {
      login()
      return
    }
    mintWithRewards()
    return
    setCurrentStatus(STATUS.LEFTFLIP)
    setCurrentStep(STEPS.SUCCESS)
  }

  return (
    <button
      type="button"
      className="md:w-[78px] lg:w-[104px] xl:w-[130px] aspect-[2/1] border-[2px] border-black flex justify-center items-center
          bg-[#ca4343] active:bg-[#4e545d] shadow-[inset_0px_-3px_0px_1px_#323840] active:shadow-[inset_none] rounded-[5px]"
      onClick={handleMint}
    >
      <p className="text-white font-slimfit md:text-[19.2px] lg:text-[25.6px] xl:text-[32px]">
        Mint
      </p>
    </button>
  )
}

export default MintButton
