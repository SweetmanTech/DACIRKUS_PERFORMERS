import React, { useState, useEffect } from "react"
import * as _ from "lodash"
import Image from "next/image"
import getOwnersForCollection from "../../lib/alchemy/getOwnersForCollection"
import getParticipants from "../../lib/getParticipants"
import LeaderboardRow from "./LeaderboardRow"
import SkeletonTableBody from "./SkeletonTableBody"
import Header from "../Header"
import customLoader from "../../lib/customLoader"

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
    <div className="h-screen overflow-y-auto text-black bg-[url('/leaderboard_background.png')]">
      <Header connect />
      <div className="w-full max-w-3xl pt-24 mx-auto">
        <div className="flex flex-col items-center justify-center w-full gap-2">
          <Image
            src="/leaderboard.png"
            width={486}
            height={120}
            alt="leaderboard"
            loader={customLoader}
          />
        </div>
        <div className="box-content m-4 bg-white border-b-2 border-black border-solid rounded-lg">
          <table className="w-full overflow-hidden rounded-lg">
            <thead className="px-4 border-2 border-black border-solid rounded-lg">
              <tr>
                <th className="px-4 py-2 text-left border-r-2 border-black">Rank</th>
                <th className="px-4 py-2 text-left border-r-2 border-black">
                  Number of NFTs Owned
                </th>
                <th className="px-4 py-2 text-left border-r-2 border-black">Address</th>
                <th className="px-4 py-2 text-left border-r-2 border-black">Twitter</th>
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
      </div>
    </div>
  )
}

export default LeaderboardPage
