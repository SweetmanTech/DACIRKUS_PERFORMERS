import Image from "next/image"
import Link from "next/link"
import { FC, useState } from "react"

interface TeamMembersCardProps {
  name?: string
  role?: string
  favQuote?: string
  imgSrc?: string
  twitterHandle?: string
}
const TeamMembersCard: FC<TeamMembersCardProps> = ({
  name,
  role,
  favQuote,
  imgSrc,
  twitterHandle,
}) => {
  const [hovered, setHovered] = useState(false)
  return (
    <div className="flex flex-row items-start justify-around h-full p-4 my-2 overflow-hidden bg-white shadow-lg rounded-2xl font-objektivmk1">
      <div className="flex w-1/4 h-full p-2 ">
        <div className="block w-20 h-20 rounded-full ">
          <Image
            src={imgSrc || "/CRE8ORSLOGO_ICON.png"}
            alt="Profile picture"
            className="w-4 h-4 rounded-full"
            width={100}
            height={100}
            layout="responsive"
          />
        </div>
      </div>
      <div className="flex flex-col w-3/4 h-full">
        <div className="flex w-full h-full">
          <div className="flex w-3/4 h-full">
            <div className="flex flex-col">
              <h2 className="text-xl font-bold text-gray-800 ">{name || "John Doe"}</h2>
              <h5 className="text-gray-800 text-md ">{role || "Person Role"}</h5>
            </div>
          </div>
          <div className="flex items-start w-1/4 h-full">
            <div className="flex items-start justify-around w-full h-full">
              <Link href={`https://twitter.com/${twitterHandle}`} target="_blank">
                <button
                  type="button"
                  className=""
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  <Image
                    src={hovered ? "/hover/twitter_hover_button.png" : "/twitter_button.png"}
                    alt="Profile picture"
                    width={55}
                    height={34}
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex w-full h-full ">
          <div className="justify-center w-full h-full text-left">{favQuote}</div>
        </div>
      </div>
    </div>
  )
}
export default TeamMembersCard
