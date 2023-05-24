import Image from "next/image"
import CustomConnectWallet from "../CustomConnectWallet"

const MenuList = ({ toggleMenu }) => (
  <div className=" fixed right-2 top-2 z-200 inline-flex flex-col items-left uppercase justify-between space-y-4 p-4 bg-gradient-to-r from-[#DDDDDD] from-0% to-[#F2F2F2] to-90% rounded-lg text-lg">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="absolute top-0 right-0 w-6 h-6 m-2"
      onClick={toggleMenu}
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>

    <a href="https://reserve.cre8ors.com/" target="_blank" rel="noreferrer">
      <div className="font-bold">Reserve List</div>
    </a>
    <div className="font-bold">Explore</div>
    <div className="ml-4 text-gray-400 cursor-not-allowed">Allowlist</div>
    <a href="/leaderboard" target="_blank" rel="noreferrer">
      <div className="ml-4">Leaderboard</div>
    </a>
    <a href="https://opensea.io/collection/cre8orscollective" target="_blank" rel="noreferrer">
      <div className="ml-4">Collective</div>
    </a>
    <a href="/teams" target="_blank" rel="noreferrer">
      <div className="ml-4">Founders</div>
    </a>
    <a href="https://opensea.io/collection/cre8ors-relics" target="_blank" rel="noreferrer">
      <div className="ml-4">Relics</div>
    </a>
    <a href="https://cre8ors.beehiiv.com/" target="_blank" rel="noreferrer">
      <div className="ml-4">Blog</div>
    </a>
    <div className="ml-4 text-gray-400 cursor-not-allowed">Warehouse</div>
    <div className="ml-4 text-gray-400 cursor-not-allowed">Profiles</div>
    <CustomConnectWallet />
    <div className="flex flex-row justify-around">
      <a
        href="https://discord.com/channels/1055217047908384849/1055218028012392519"
        target="_blank"
        rel="noreferrer"
      >
        <Image src="/Icons/DISCORD.svg" alt="discord" width={42} height={35} />
      </a>
      <a href="https://twitter.com/Cre8orsNFT" target="_blank" rel="noreferrer">
        <Image src="/Icons/TWITTER.svg" alt="twitter" width={42} height={35} />
      </a>
    </div>
  </div>
)

export default MenuList
