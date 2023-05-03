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
    <div className="flex flex-col justify-around h-full m-2 overflow-hidden bg-white shadow-lg rounded-2xl font-objektivmk1">
      <div className="flex flex-row items-start w-full h-full p-4">
        <div className="flex w-full h-full">
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
        <div className="flex w-full h-full ">
          <div className="flex flex-col">
            <h2 className="text-xl font-bold text-gray-800 ">{name || "John Doe"}</h2>
            <h5 className="text-sm text-gray-800 ">{role || "Person Role"}</h5>
          </div>
        </div>
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
                width={45}
                height={28}
              />
            </button>
          </Link>
        </div>
      </div>
      <div className="justify-center w-full h-full pl-6 pr-2 text-left">{favQuote}</div>

      {/* <div className="flex flex-row">
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
        <div className="flex flex-col">
          <h2 className="text-xl font-bold text-gray-800 ">{name || "John Doe"}</h2>
          <h5>{role || "Person Role"}</h5>
        </div>
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
              width={45}
              height={28}
            />
          </button>
        </Link>
      </div>
      <p>{favQuote}</p> */}
    </div>
  )
}
export default TeamMembersCard
