import Image from "next/image"
import { FC, useState } from "react"

interface TeamMembersCardProps {
  profilePic?: string
  personName?: string
  personRole?: string
}
const TeamMembersCard: FC<TeamMembersCardProps> = ({ profilePic, personName, personRole }) => {
  const [hovered, setHovered] = useState(false)
  return (
    <div className="m-2 overflow-hidden bg-white shadow-lg rounded-2xl">
      <div className="flex flex-row items-center justify-center">
        <div className="m-2 ">
          <div className="items-center object-cover object-center p-2 border rounded-full">
            <Image
              src={profilePic || "/CRE8ORSLOGO_ICON.png"}
              alt="Profile picture"
              width={240}
              height={250}
            />
          </div>
        </div>
        <div className="flex flex-col m-2">
          <div className="flex flex-row items-end justify-between">
            <div className="flex flex-col">
              <h2 className="mt-4 text-xl font-bold text-gray-800">{personName || "John Doe"}</h2>
              <h5>{personRole || "Person Role"}</h5>
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
          <p className="mt-2 text-sm text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a nulla euismod,
            interdum libero sit amet, eleifend mi.
          </p>
        </div>
      </div>
    </div>
  )
}
export default TeamMembersCard
