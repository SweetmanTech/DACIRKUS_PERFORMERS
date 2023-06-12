import Image from "next/image"
import Link from "next/link"
import { FC, useState } from "react"
import Icon from "../../../../../shared/Icon"

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
  
  return (
    <div className="
      p-4 my-2 overflow-hidden 
      bg-white 
      h-[247px]
      rounded-2xl font-quicksand 
      shadow-[3px_3px_4px_rgba(0,0,0,0.25)] dark:shadow-[3px_3px_4px_rgba(255,255,255,0.25)]
    ">
      <div className="flex justify-between">
        <div className="flex gap-3">
          <div className="!w-[108px] !h-[106px] rounded-[10px] overflow-hidden">
            <Image
              src={imgSrc || "/CRE8ORSLOGO_ICON.png"}
              alt="Profile picture"
              className="w-[108px] h-[106px]"
              width={108}
              height={106}
            />
          </div>
          <div className="max-w-[170px]">
            <div className="text-[27px] break-all	font-[900] font-eigerdals leading-[100%]">{name || "John Doe"}</div>
            <div className="text-md leading-[100%]">{role || "Person Role"}</div>
          </div>
        </div>
        <div className="
          !w-[44px] !h-[44px] 
          bg-[black] 
          flex items-center justify-center 
          rounded-full
          shadow-[3px_3px_4px_rgba(0,0,0,0.25)]
        ">
          <Icon name="twitter" color="white" raw />
        </div>
      </div>
      <div className="pt-[20px]">
        <div className="
          text-[16px] 
          font-quicksand font-medium 
          text-[black]
          leading-[99.3%]
        ">{favQuote}</div>
      </div>
    </div>
  )
}
export default TeamMembersCard
