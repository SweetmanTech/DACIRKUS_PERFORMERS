import useZoraMintByPrivy from "@/hooks/useZoraMintByPrivy"
import { STATUS } from "@/lib/bookStatus"
import { STEPS } from "@/lib/createStep"
import { useAnimatedBook } from "@/providers/AnimatedBookProvider"
import { useCreate } from "@/providers/CreateProvider"
import usePreparePrivyWallet from "@/hooks/usePrepareWallet"

const MintButton = () => {
  const { setCurrentStatus } = useAnimatedBook()
  const { setCurrentStep, setMintedTokenId } = useCreate()
  const { mintWithRewards, loading } = useZoraMintByPrivy()

  const mint = async () => {
    const response = (await mintWithRewards()) as any
    const { error } = response
    if (error) {
      return
    }
    setMintedTokenId(response)
    setCurrentStatus(STATUS.LEFTFLIP)
    setCurrentStep(STEPS.SUCCESS)
  }

  const { prepare } = usePreparePrivyWallet(mint)

  const handleMint = async () => {
    // logout()
    const isPrepared = await prepare()
    if (!isPrepared) return
    mint()
  }

  return (
    <button
      type="button"
      className="md:w-[78px] lg:w-[104px] xl:w-[130px] aspect-[2/1] border-[2px] border-black flex justify-center items-center
          bg-[#ca4343] active:bg-[#4e545d] shadow-[inset_0px_-3px_0px_1px_#323840] active:shadow-[inset_none] rounded-[5px]"
      onClick={handleMint}
      disabled={loading}
    >
      <p
        className={`text-white font-slimfit pb-[6px]
      ${
        loading
          ? "md:text-[16px] lg:text-[22px] xl:text-[26px]"
          : "md:text-[19.2px] lg:text-[25.6px] xl:text-[32px]"
      }`}
      >
        {loading ? "Minting" : "Mint"}
      </p>
    </button>
  )
}

export default MintButton
