import Image from "next/image"
import { FC, useState } from "react"

interface TeamMembersCardProps {
  name?: string
  role?: string
  favQuote?: string
  imgSrc?: string
}
const TeamMembersCard: FC<TeamMembersCardProps> = ({ name, role, favQuote, imgSrc }) => {
  const [hovered, setHovered] = useState(false)
  return (
    <div className="my-2 overflow-hidden bg-white shadow-lg rounded-2xl">
      <div className="flex flex-row items-center justify-around">
        <div className="mx-2 ">
          <div className="items-center justify-around block w-20 h-20 rounded-full">
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
        <div className="flex flex-col w-full m-2">
          <div className="flex flex-row items-end justify-between">
            <div className="flex flex-col">
              <h2 className="mt-4 text-xl font-bold text-gray-800">{name || "John Doe"}</h2>
              <h5>{role || "Person Role"}</h5>
            </div>

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
          </div>
          <p className="my-2 text-sm text-gray-600">{favQuote || "Favorite Quote"}</p>
        </div>
      </div>
    </div>
  )
}
export default TeamMembersCard
