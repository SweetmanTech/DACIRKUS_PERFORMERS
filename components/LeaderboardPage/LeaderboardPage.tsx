import React, { useState, useEffect } from "react"
import * as _ from "lodash"
import getOwnersForCollection from "../../lib/alchemy/getOwnersForCollection"
import getParticipants from "../../lib/getParticipants"
import LeaderboardRow from "./LeaderboardRow"
import SkeletonTableBody from "./SkeletonTableBody"
import Layout from "../Layout"

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
      setCollectors(tableData.slice(0, 10))
    }
    fetchTopCollectors()
  }, [])

  return (
    <Layout type="contained">
      <div className="w-full pt-24 mx-auto">
        <div className="font-[eigerdals] dark:text-white text-center text-[2.5rem] md:text-[4rem] font-bold pt-6">
          Leaderboard
        </div>
        <div className="w-full flex justify-center pb-4">
          <div className="font-quicksand dark:text-white text-center max-w-[400px] md:max-w-[550px] text-[1rem] md:text-[1.5rem] font-[550]">
            Currently Tracking: Devine Ancestral Pendants Collect and burn 88 to redeem a Passport
          </div>
        </div>
        <div className="md:px-4 w-full flex justify-center">
          <div className="w-[370px] md:w-full border-[2px] border-[black] border-solid rounded-lg overflow-hidden overflow-x-auto shadow-[4px_4px_4px_rgb(0,0,0,0.25)] dark:shadow-[4px_4px_4px_rgb(255,255,255,0.25)]">
            <table className="w-full font-quicksand bg-white">
              <thead className="border-b-[2px] border-black border-solid">
                <tr>
                  <th className="p-4 text-left border-r-[2px] border-black text-center uppercase min-w-[100px]">
                    Rank
                  </th>
                  <th className="p-4 text-left border-r-[2px] border-black text-center uppercase min-w-[200px]">
                    # of NFTs Owned
                  </th>
                  <th className="p-4 text-left border-r-[2px] border-black text-center uppercase">
                    Address
                  </th>
                  <th className="p-4 text-left text-center uppercase">Twitter</th>
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
    </Layout>
  )
}

export default LeaderboardPage
