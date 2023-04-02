/* eslint-disable @next/next/no-html-link-for-pages */
import { useEffect } from "react"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { useAccount } from "wagmi"
import { signIn, useSession, signOut } from "next-auth/react"
import axios from "axios"
import { toast } from "react-toastify"
import Link from "next/link"
import isAddressRegistered from "../../lib/isAddressRegistered"
import NavBar from "../NavBar"
import { Button } from "../../shared/Button"

function ConnectPage() {
  const { address } = useAccount()
  const { data: session }: any = useSession()

  useEffect(() => {
    const checkRegistered = async () => {
      const registered = await isAddressRegistered(address)
      if (registered) toast.success("You're registered!")
      return registered
    }

    const init = async () => {
      if (await checkRegistered()) return
      await axios.post(
        "/api/participants/addNewRecord",
        {
          walletAddress: address,
          twitterHandle: session.user.handle,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_PARTICIPANTS_API_KEY}`,
          },
        },
      )
      await checkRegistered()
    }
    if (!session?.user || !address) return
    init()
  }, [session, address])

  return (
    <div className="flex flex-col mt-3">
      {address && <NavBar />}
      <div className="flex flex-col items-center justify-around text-white pt-10 h-[75vh]">
        <span>
          {session?.user && <small>Signed in as</small>}
          <br />
          {session?.user && <strong>{session?.user.email || session.user.name}</strong>}
          <a
            href={session?.user ? "/api/auth/signout" : "/api/auth/signin"}
            onClick={(e) => {
              e.preventDefault()
              if (session?.user) {
                signOut()
              } else {
                signIn("twitter")
              }
            }}
          >
            <Button onClick={(e) => e.preventDefault()}>
              {session?.user ? "Sign out" : "Twitter Sign in"}
            </Button>
          </a>
        </span>

        {!address && <ConnectButton />}
        {session?.user && (
          <Link href="/leaderboard">
            <Button>Leaderboard</Button>
          </Link>
        )}
      </div>
    </div>
  )
}

export default ConnectPage
