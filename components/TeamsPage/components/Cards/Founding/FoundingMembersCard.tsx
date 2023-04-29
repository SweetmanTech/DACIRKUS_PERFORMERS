import Image from "next/image"
import Link from "next/link"
import { FC, useState } from "react"

interface FoundingMembersCardProps {
  profilePic?: string
  twitterHandle?: string
}
const FoundingMembersCard: FC<FoundingMembersCardProps> = ({ profilePic, twitterHandle }) => {
  const [hovered, setHovered] = useState(false)
  return (
    <div className="m-2 overflow-hidden bg-white shadow-lg rounded-2xl">
      <div className="flex flex-row items-center justify-around">
        <div className="m-2 ">
          <div className="items-center object-cover object-center p-2 border rounded-full">
            <Image src={profilePic} alt="Profile picture" width={30} height={30} />
          </div>
        </div>
        <h2 className="text-lg text-gray-800 ">{twitterHandle || "twitter_handle"}</h2>
        <Link href={`https://twitter.com/${twitterHandle}`} target="_blank">
          <button
            type="button"
            className="px-4 py-2 mt-4"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <Image
              src={hovered ? "/hover/twitter_hover_button.png" : "/twitter_button.png"}
              alt="Profile picture"
              width={45}
              height={28}
            />
          </button>
        </Link>
      </div>
    </div>
  )
}
export default FoundingMembersCard
