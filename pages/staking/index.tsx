import { allChains, useAccount, useNetwork, useSigner } from "wagmi"
import { Contract, ethers } from "ethers"
import { useCallback, useEffect, useState } from "react"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import getNFTs from "../../lib/alchemy/getNFTs"
import abi from "../../lib/abi-cre8ors.json"
import StakingCard from "../../components/StakingCard"

const Staking = () => {
  const { address: account } = useAccount()
  const { chain: activeChain } = useNetwork()
  const { data: signer } = useSigner()
  const chainId = process.env.NEXT_PUBLIC_CHAIN_ID
  const chain = allChains.find((c) => c.id === Number(chainId))
  const [nftContract, setNftContract] = useState<Contract>(null)
  const [tokens, setTokens] = useState([])
  const [stakedTokens, setStakedTokens] = useState([])

  const load = useCallback(
    async (signerOrProvider) => {
      if (account) {
        const alchemyTokens = await getNFTs(account, process.env.NEXT_PUBLIC_CRE8ORS_ADDRESS)
        const contract = new Contract(
          process.env.NEXT_PUBLIC_CRE8ORS_ADDRESS,
          abi,
          signerOrProvider,
        )
        setNftContract(contract)
        const stakedRaw = await contract.cre8ingTokens()
        const stakedStrings = stakedRaw.map((token) => token.toString())
        const stakedFinal = stakedStrings.filter((token) => token !== "0")
        setStakedTokens(stakedFinal)
        setTokens(alchemyTokens.ownedNfts)
      }
    },
    [account, setNftContract, setTokens, setStakedTokens],
  )

  const getSignerOrProvider = useCallback(() => {
    const goerliRpc = "https://ethereum-goerli-rpc.allthatnode.com"
    const isCorrectNetwork = chain.id === activeChain.id
    const provider = chain.id === 1 ? { chainId: chain.id } : ethers.getDefaultProvider(goerliRpc)
    return isCorrectNetwork ? signer : provider
  }, [chain, activeChain, signer])

  useEffect(() => {
    if (!chainId) return
    if (!signer) return
    load(getSignerOrProvider())
  }, [account, chainId, signer, activeChain?.id, load, getSignerOrProvider])

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col flex-wrap items-center justify-center min-h-screen gap-2 sm:flex-row">
        <ConnectButton.Custom>
          {({ account: account1, chain: chain1, openChainModal, openConnectModal, mounted }) => {
            const ready = mounted
            const connected = ready && account1 && chain1

            return (
              <div
                {...(!ready && {
                  "aria-hidden": true,
                  style: {
                    opacity: 0,
                    pointerEvents: "none",
                    userSelect: "none",
                  },
                })}
              >
                {(() => {
                  if (!connected) {
                    return (
                      <button
                        onClick={openConnectModal}
                        type="button"
                        className="px-4 py-2 font-bold text-white bg-blue-500 rounded"
                      >
                        Connect Wallet
                      </button>
                    )
                  }

                  if (chain.id !== Number(process.env.NEXT_PUBLIC_CHAIN_ID)) {
                    return (
                      <button
                        onClick={openChainModal}
                        type="button"
                        className="px-4 py-2 font-bold text-white bg-blue-500 rounded"
                      >
                        Wrong network
                      </button>
                    )
                  }

                  return (
                    <div className="flex flex-col flex-wrap items-center justify-center min-h-screen gap-2 sm:flex-row">
                      {tokens.length > 0 &&
                        tokens.map((token) => (
                          <StakingCard
                            key={token.id}
                            token={token}
                            stakedTokens={stakedTokens}
                            onSuccess={() => load(signer)}
                            nftContract={nftContract}
                          />
                        ))}
                    </div>
                  )
                })()}
              </div>
            )
          }}
        </ConnectButton.Custom>
      </div>
    </div>
  )
}

export default Staking
