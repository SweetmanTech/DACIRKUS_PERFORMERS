import Image from "next/image"
import { useState } from "react"
import { toast } from "react-toastify"
import { allChains, useNetwork, useSigner, useSwitchNetwork } from "wagmi"
import getIpfsLink from "../../lib/getIpfsLink"
import { processStaking } from "../../lib/staking"
import customLoader from "../../lib/customLoader"

const StakingCard = ({ token, stakedTokens, onSuccess, nftContract }) => {
  const myTokenId = parseInt(token.id.tokenId, 16)
  const imgHash = token.metadata?.image
  const isInvalid = imgHash?.includes?.("imgUri") || imgHash?.includes?.("Hello World")
  const imageUrl = isInvalid ? "" : getIpfsLink(imgHash)
  const isStaked = stakedTokens.includes(myTokenId.toString())
  const { data: signer } = useSigner()
  const { chain } = useNetwork()
  const { switchNetwork } = useSwitchNetwork()
  const [isProcessing, setIsProcessing] = useState<boolean>(false)
  const handleClick = async () => {
    if (!signer) {
      toast.error("please connect wallet")
      return
    }
    if (chain.id !== Number(process.env.NEXT_PUBLIC_CHAIN_ID)) {
      await switchNetwork(Number(process.env.NEXT_PUBLIC_CHAIN_ID))
      const myChain = allChains.find(
        (blockchain) => blockchain.id === parseInt(process.env.NEXT_PUBLIC_CHAIN_ID, 10),
      )
      toast.error(`Please connect to ${myChain.name} and try again`)
      return
    }
    await processStaking(nftContract, myTokenId, onSuccess, !isStaked, setIsProcessing)
  }

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          TOKEN ID #{myTokenId}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {isStaked ? "Staked" : "Not Staked"}
        </p>

        <button
          type="button"
          className={`inline-flex items-center px-3 py-2 text-m font-medium text-center text-white ${
            isStaked ? "bg-red-700" : "bg-blue-700"
          } rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ${
            isStaked ? "dark:bg-red-600" : "dark:bg-blue-600"
          } dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-25 disabled:cursor-not-allowed`}
          onClick={() => handleClick()}
          disabled={isProcessing}
        >
          {isStaked ? "Unstake" : "Stake"}

          <span className="px-4">
            <Image
              src={imageUrl || "/cre8ors.png"}
              alt=""
              layout="fixed"
              width={20}
              height={25}
              loader={customLoader}
            />
          </span>
        </button>
      </div>
    </div>
  )
}
export default StakingCard
