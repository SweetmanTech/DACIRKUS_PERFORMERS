import { useCreate } from "@/providers/CreateProvider"
import usePreparePrivyWallet from "@/hooks/usePrepareWallet"
import { useState } from "react"

const MintButton = () => {
  const { singleMint } = useCreate()
  const [loading, setLoading] = useState(false)

  const { prepare } = usePreparePrivyWallet(singleMint)

  const handleMint = async () => {
    setLoading(true)
    const isPrepared = prepare()
    if (!isPrepared) {
      setLoading(false)
      return
    }
    await singleMint()
    setLoading(false)
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
