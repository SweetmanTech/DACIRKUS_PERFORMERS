import Image from "next/image"
import Link from "next/link"
import { FC } from "react"
import Icon from "../../../../../shared/Icon"

interface FoundingMembersCardProps {
  profilePic?: string
  twitterHandle?: string
}
const FoundingMembersCard: FC<FoundingMembersCardProps> = ({ profilePic, twitterHandle }) => (
  <div
    className="
      m-2 overflow-hidden 
      bg-white rounded-2xl
      shadow-[3px_3px_4px_rgba(0,0,0,0.25)] dark:shadow-[3px_3px_4px_rgba(255,255,255,0.25)]
    "
  >
    <div className="flex flex-row items-center justify-between p-2">
      <div>
        <div
          className="
            items-center justify-center 
            rounded-[10px] overflow-hidden
            bg-[black]
            w-[50px] h-[50px]
          "
        >
          <Image
            src={profilePic || "/CRE8ORSLOGO_ICON.png"}
            alt="Profile picture"
            width={50}
            height={50}
            className="w-[50px] h-[50px]"
          />
        </div>
      </div>
      <div className="font-quicksand font-[700] leading-[99.3%]">
        {twitterHandle || "twitter_handle"}
      </div>
      <div
        className="
            !w-[26px] !h-[26px] 
            bg-[black] 
            flex items-center justify-center 
            rounded-full
            shadow-[3px_3px_4px_rgba(0,0,0,0.25)]
          "
      >
        <Link href={`https://twitter.com/${twitterHandle}`} target="_blank">
          <Icon name="twitter" color="white" raw size={14} />
        </Link>
      </div>
    </div>
  </div>
)
export default FoundingMembersCard
