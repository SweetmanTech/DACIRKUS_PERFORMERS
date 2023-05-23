import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import Image from "next/image"
import { useState } from "react"

const DesktopMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  return (
    <div className="flex flex-row justify-around text-sm uppercase font-quicksand">
      <a href="https://reserve.cre8ors.com/" target="_blank" rel="noreferrer">
        <div className="pt-2 pl-10 pr-4 font-bold cursor-pointer ">Reserve List</div>
      </a>
      <div className="relative">
        <button
          type="button"
          className={`font-bold  uppercase text-sm w-[134px] h-[40px] ${
            isMenuOpen &&
            "border rounded-lg bg-gradient-to-r from-[#DDDDDD] from-0% to-[#FAFAFA] to-100% shadow-md"
          }`}
          onClick={toggleMenu}
        >
          Explore
          {!isMenuOpen && <ChevronDownIcon className="inline w-4 h-5 align-middle" />}
          {isMenuOpen && <ChevronUpIcon className="inline w-4 h-5 align-middle" />}
        </button>
        {isMenuOpen && (
          <div className=" absolute right-0 top-[45px] z-200 inline-flex flex-col items-center uppercase justify-between space-y-4 p-4 bg-gradient-to-r from-[#DDDDDD] from-0% to-[#FAFAFA] to-100% shadow-md rounded-lg  font-quicksand text-sm">
            <div className="text-gray-400 cursor-not-allowed ">Allowlist</div>
            <a href="/leaderboard" target="_blank" rel="noreferrer">
              <div className="cursor-pointer">Leaderboard</div>
            </a>
            <a
              href="https://opensea.io/collection/cre8orscollective"
              target="_blank"
              rel="noreferrer"
            >
              <div className="cursor-pointer">Collective</div>
            </a>
            <a href="/teams" target="_blank" rel="noreferrer">
              <div className="cursor-pointer">Founders</div>
            </a>
            <a href="https://opensea.io/collection/cre8ors-relics" target="_blank" rel="noreferrer">
              <div className="cursor-pointer">Relics</div>
            </a>
            <a href="https://cre8ors.beehiiv.com/" target="_blank" rel="noreferrer">
              <div className="cursor-pointer">Blog</div>
            </a>
            <div className="text-gray-400 cursor-not-allowed">Warehouse</div>
            <div className="text-gray-400 cursor-not-allowed">Profiles</div>
          </div>
        )}
      </div>
      <a
        href="https://discord.com/channels/1055217047908384849/1055218028012392519"
        target="_blank"
        rel="noreferrer"
      >
        <div className="pt-2 pl-4 cursor-pointer ">
          <Image src="/Icons/DISCORD.svg" width={24} height={19} alt="discord" />
        </div>
      </a>
      <a href="https://twitter.com/Cre8orsNFT" target="_blank" rel="noreferrer">
        <div className="pt-2 pl-10 cursor-pointer ">
          <Image src="/Icons/TWITTER.svg" width={24} height={19} alt="twitter" />
        </div>
      </a>
      <div className="px-3">
        <ConnectButton chainStatus="none" />
      </div>
    </div>
  )
}

export default DesktopMenu
