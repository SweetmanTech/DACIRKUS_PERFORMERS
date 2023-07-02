import axios from "axios"
import { useCallback, useEffect, useMemo, useState } from "react"
import Table from "./components/Table"
import StatusPill from "./components/StatusPill"
import SelectColumnFilter from "./components/SelectColumFilter"
import PopupModal from "./components/PopupModal"
import { useAdminProvider } from "../../providers/AdminProvider"

type ITableDatum = {
  walletAddress: string
  twitterHandle: string
  reason: string
  creatorType: string
  isVerified: boolean
  status: "Pending" | "Accepted" | "Rejected"
}
type ITableData = Array<ITableDatum>
const AdminPage = () => {
  const mapEvilToGood = (evil: string) => {
    switch (evil) {
      case "The Delegator":
        return "musician"
      case "The Pragmatic":
        return "engineer"
      case "The Kinesthetic":
        return "dancer"
      case "The Deviser":
        return "director"
      case "The Communicator":
        return "writer"
      case "The Catalyst":
        return "thespian"
      case "The Idealist":
        return "photographer"
      case "The Generator":
        return "designer"
      default:
        return null
    }
  }
  const { bearerToken, user } = useAdminProvider()
  const [data, setData] = useState([])
  const [pickedApplicants, setPickedApplicants] = useState([])
  const [loading, setLoading] = useState(false)
  const tableData: ITableData = useMemo(
    () =>
      data.map((datum) => {
        const { walletAddress, isVerified, twitterHandle, reason, status, creatorType } = datum
        return {
          walletAddress,
          isVerified,
          twitterHandle,
          reason,
          status,
          creatorType,
        }
      }),
    [data],
  )

  const tweetAcceptanceStatus = async () => {
    const body = pickedApplicants.map((applicant) => ({
      username: applicant.twitterHandle,
      cre8orType: mapEvilToGood(applicant.cre8orType),
    }))
    await axios.post(`${process.env.NEXT_PUBLIC_SHARED_API_URL}/tweetAcceptanceStatus`, body, {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    })
  }

  const handleClick = async (status) => {
    setLoading(true)
    const applicants = pickedApplicants.map((applicant) => applicant.walletAddress)
    await axios.post(
      "/api/allowlist/updateStatus",
      {
        applicants,
        status,
      },
      {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      },
    )

    setLoading(false)
  }
  const handleReject = async (e) => {
    e.preventDefault()
    handleClick("Rejected")
  }

  const handleAccept = async (e) => {
    e.preventDefault()
    handleClick("Accepted")
    await tweetAcceptanceStatus()
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
        filter: "includes",
      },
      {
        Header: "Twitter Handle",
        accessor: "twitterHandle",
        filter: "includes",
      },
      {
        Header: "Reason",
        accessor: "reason",
      },
      {
        Header: "Quiz Result",
        accessor: "creatorType",
        filter: "includes",
      },
      {
        Header: "Tweet Verified",
        accessor: (d) => d.isVerified.toString(),
        Filter: SelectColumnFilter,
        filter: "includes",
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
  }, [getData, loading])

  return (
    user?.issuer && (
      <div className="flex flex-wrap h-screen bg-gray-100 text-white-900">
        <main className="min-w-full px-4 pt-4 mx-auto sm:px-6 lg:px-8">
          <div>
            <h1 className="text-xl font-semibold">Current Allowlist Applicants</h1>
          </div>
          <div className="mt-4">
            <Table columns={columns} data={tableData} setPickedApplicants={setPickedApplicants} />
          </div>
          {pickedApplicants.length > 0 && (
            <div className="flex flex-row justify-end mt-4 gap-x-4">
              <button
                type="button"
                className="px-4 py-2 mt-4 text-white bg-green-500 border rounded-full"
                onClick={handleAccept}
              >
                Accept
              </button>
              <button
                type="button"
                className="px-4 py-2 mt-4 text-white bg-red-500 border rounded-full"
                onClick={handleReject}
              >
                Reject
              </button>
            </div>
          )}
        </main>
        {loading && <PopupModal open={loading} />}
      </div>
    )
  )
}
export default AdminPage
