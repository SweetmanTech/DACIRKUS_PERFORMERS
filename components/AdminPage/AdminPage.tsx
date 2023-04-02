import axios from "axios"
import { useCallback, useEffect, useMemo, useState } from "react"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { useSigner } from "wagmi"
import Confetti from "react-confetti"
import { useUserProvider } from "../../providers/UserProvider"
import Table from "./components/Table"
import StatusPill from "./components/StatusPill"
import SelectColumnFilter from "./components/SelectColumFilter"
import useWindowSize from "../../lib/useWindowSize"
import acceptApplicants from "../../lib/acceptApplicants"
import abi from "../../lib/abi-metadata-renderer.json"
import PopupModal from "./components/PopupModal"

type ITableDatum = {
  walletAddress: string
  tokenId: string
  twitterHandle: string
  reason: string
  creatorType: string
  status: "Review" | "Accepted" | "Rejected"
}
type ITableData = Array<ITableDatum>
const AdminPage = () => {
  const { data: signer } = useSigner({ chainId: 80001 })
  const { user } = useUserProvider()
  const [data, setData] = useState([])
  const [acceptedApplicants, setAcceptedApplicants] = useState([])
  const [loading, setLoading] = useState(false)
  const [startConfetti, setStartConfetti] = useState(false)
  const { width, height } = useWindowSize()
  const tableData: ITableData = useMemo(
    () =>
      data.map((datum) => {
        const { walletAddress, tokenId, twitterHandle, reason, status, creatorType } = datum
        return {
          walletAddress,
          tokenId,
          twitterHandle,
          reason,
          status,
          creatorType,
        }
      }),
    [data],
  )
  const handleClick = async () => {
    if (!signer) return
    setLoading(true)
    const acceptedTokenIDs = acceptedApplicants.map((applicant) => applicant.tokenId)
    const acceptedImageUris = acceptedApplicants.map((applicant) => applicant.imageUri)
    const [receipt] = await Promise.all([
      acceptApplicants(
        process.env.NEXT_PUBLIC_ALLOWLIST_METADATA_CONTRACT_ADDRESS,
        signer,
        abi,
        acceptedTokenIDs,
        acceptedImageUris,
      ),
      axios.post(
        "/api/allowlist/updateStatus",
        {
          applicants: acceptedTokenIDs,
          status: "Accepted",
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_ALLOWLIST_API_KEY}`,
          },
        },
      ),
    ])

    if (!receipt.error) {
      setStartConfetti(true)
      setTimeout(() => {
        setStartConfetti(false)
      }, 5000)
    }
    setLoading(false)
  }
  const columns = useMemo(
    () => [
      {
        Header: "Status",
        accessor: "status",
        Filter: SelectColumnFilter,
        filter: "includes",
        Cell: StatusPill,
      },
      {
        Header: "Wallet Address",
        accessor: "walletAddress",
      },
      {
        Header: "Token ID",
        accessor: "tokenId",
      },
      {
        Header: "Twitter Handle",
        accessor: "twitterHandle",
      },
      {
        Header: "Reason",
        accessor: "reason",
      },
      {
        Header: "Quiz Result",
        accessor: "creatorType",
      },
    ],
    [],
  )
  const getData = useCallback(async () => {
    const res = await axios.get("/api/allowlist/allData", {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ALLOWLIST_API_KEY}`,
      },
    })
    const results = await res.data
    setData(results)
  }, [])

  useEffect(() => {
    getData()
  }, [getData, startConfetti])

  return (
    user?.issuer && (
      <div className="flex flex-wrap h-screen bg-gray-100 text-white-900">
        <main className="min-w-full px-4 pt-4 mx-auto sm:px-6 lg:px-8">
          <div className="">
            <h1 className="text-xl font-semibold">Current Allowlist Applicants</h1>
          </div>
          <div className="mt-4">
            <Table
              columns={columns}
              data={tableData}
              setAcceptedApplicants={setAcceptedApplicants}
            />
          </div>
          {acceptedApplicants.length > 0 && signer && (
            <div className="justify-end m-2 text-right">
              <ConnectButton.Custom>
                {({ account, chain, openChainModal, openConnectModal, mounted }) => {
                  const ready = mounted
                  const connected = ready && account && chain

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

                        if (chain.id !== Number(process.env.NEXT_PUBLIC_ALLOW_LIST_CHAIN_ID)) {
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
                          <button
                            type="button"
                            onClick={() => handleClick()}
                            className="px-4 py-2 m-2 font-bold text-white rounded bg-emerald-500"
                          >
                            Accept
                          </button>
                        )
                      })()}
                    </div>
                  )
                }}
              </ConnectButton.Custom>
            </div>
          )}
        </main>
        {startConfetti && <Confetti width={width} height={height} />}
        {loading && <PopupModal open={loading} />}
      </div>
    )
  )
}
export default AdminPage
