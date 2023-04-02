import Link from "next/link"
import React, { useState, useEffect } from "react"
import * as _ from "lodash"
import getOwnersForCollection from "../../lib/alchemy/getOwnersForCollection"
import getParticipants from "../../lib/getParticipants"
import { Button } from "../../shared/Button"
import LeaderboardRow from "./LeaderboardRow"
import SkeletonTableBody from "./SkeletonTableBody"

const LeaderboardPage = () => {
  const [collectors, setCollectors] = useState([])

  useEffect(() => {
    const fetchTopCollectors = async () => {
      const { ownerAddresses } = await getOwnersForCollection()
      const newCollectors = _.orderBy(ownerAddresses, ["tokenBalances[0].balance"], ["desc"])
      const addressToTwitter = await getParticipants()
      const mappedData = newCollectors.map((collector) => ({
        walletAddress: collector.ownerAddress,
        nftsOwned: collector.tokenBalances[0].balance,
      }))
      const tableData = mappedData.map((item) => ({
        ...item,
        twitterHandle: addressToTwitter[item.walletAddress.toString()],
      }))
      setCollectors(tableData)
    }

    fetchTopCollectors()
  }, [])

  return (
    <div className="w-full max-w-2xl mx-auto pt-11">
      <div className="flex justify-end mr-3">
        <Link href="/connect">
          <Button>Connect</Button>
        </Link>
      </div>
      <h1 className="text-center text-2xl font-bold text-white mb-6">CRE8ORS Leaderboard</h1>
      <table className="w-full border-collapse rounded-lg overflow-hidden">
        <thead className="bg-[#40baff]">
          <tr>
            <th className="px-4 py-2 text-left border-b">Rank</th>
            <th className="px-4 py-2 text-left border-b">Number of NFTs Owned</th>
            <th className="px-4 py-2 text-left border-b">Address</th>
            <th className="px-4 py-2 text-left border-b">Twitter</th>
          </tr>
        </thead>
        {collectors.length > 0 ? (
          <tbody>
            {collectors.map((collector, index) => (
              <LeaderboardRow
                key={collector.walletAddress}
                address={collector.walletAddress}
                numberOwned={collector.nftsOwned}
                twitterHandle={collector.twitterHandle}
                rank={index + 1}
              />
            ))}
          </tbody>
        ) : (
          <SkeletonTableBody />
        )}
      </table>
    </div>
  )
}

export default LeaderboardPage
