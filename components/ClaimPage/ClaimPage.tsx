import { useEffect, useState } from "react"
import { useSigner } from "wagmi"
import { BigNumber } from "ethers"
import abi from "../../lib/abi-cre8ors.json"
import NavBar from "../NavBar"
import balanceOf from "../../lib/balanceOf"
import ClaimButton from "../ClaimButton"
import MintButton from "../MintButton"

function ClaimPage() {
  const { data: signer } = useSigner()
  const [balance, setBalance] = useState("0")
  const contractAddress = String(process.env.NEXT_PUBLIC_CRE8ORS_ADDRESS)

  useEffect(() => {
    const init = async () => {
      const response = await balanceOf(signer)
      if (response.error) return
      setBalance(response.toString())
    }

    if (!signer) return
    init()
  })

  return (
    <div className="mt-3 flex flex-col">
      <NavBar />
      <div className="flex flex-col items-center justify-around text-4xl pt-10 h-[75vh]">
        <div>Claim Page</div>
        {BigNumber.from(balance).gt(0) ? (
          <div className="flex flex-col items-center gap-5">
            <div> access granted</div>
            <ClaimButton contractAddress={contractAddress} abi={abi} />
          </div>
        ) : (
          <div className="flex flex-col items-center gap-5">
            <div> please mint a CRE8OR before claiming trait</div>
            <MintButton contractAddress={contractAddress} abi={abi} />
          </div>
        )}
      </div>
    </div>
  )
}

export default ClaimPage
