import Link from "next/link"
import { useEffect, useState } from "react"
import retryGetEns from "../../lib/retryGetEns"
import truncateEthAddress from "../../lib/truncateEthAddress"
import PFP from "../PFP"

const LeaderboardRow = ({ address, numberOwned, rank, twitterHandle }) => {
  const [ensName, setEnsName] = useState(null as string)

  useEffect(() => {
    const init = async () => {
      const ensRecord = await retryGetEns(address)
      if (!ensRecord?.title) return
      setEnsName(ensRecord?.title)
    }

    if (!address) return
    init()
  }, [address])

  return (
    <tr key={address} className="text-center bg-white hover:bg-blue-300">
      <td className="px-4 py-2 border-l-2 border-r-2 border-black">#{rank}</td>
      <td className="px-4 py-2 border-r-2 border-black">{numberOwned}</td>
      <td className="flex items-center gap-3 px-4 py-2 border-r-2 border-black">
        <PFP address={address} height={25} width={25} />
        <Link href={`/collector/${address}`} type="button">
          {ensName || truncateEthAddress(address)}
        </Link>
      </td>
      <td className="px-4 py-2 border-r-2 border-black">
        <a href={`https://twitter.com/${twitterHandle}`} target="_blank" rel="noreferrer">
          {twitterHandle}
        </a>
      </td>
    </tr>
  )
}

export default LeaderboardRow
