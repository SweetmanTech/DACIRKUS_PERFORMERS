import Image from "next/image"
import { useEffect, useState } from "react"
import CustomConnectWallet from "../CustomConnectWallet"
import DiscordIcon from "../DiscordIcon"
import { useTheme } from "../../providers/ThemeProvider"
import { ToggleButton } from "../../shared/Button"

const MenuList = ({ toggleMenu }) => {
  const { onChangeThemeConfig, themeMode } = useTheme()

  const [isDarkMode, setIsDarkMode] = useState(false)

  const onToggle = () => {
    setIsDarkMode(!isDarkMode)
    onChangeThemeConfig()
  }

  useEffect(() => {
    setIsDarkMode(themeMode !== "light")
  }, [themeMode])

  return (
    <div className="fixed right-2 top-2 z-200 inline-flex flex-col items-left uppercase justify-between space-y-4 p-4 dark:bg-white bg-[black] to-90% rounded-lg text-lg">
      <div className="dark:bg-[black] bg-white absolute top-0 right-0 w-6 h-6 m-2 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke={`${isDarkMode ? "white" : "black"}`}
          onClick={toggleMenu}
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
      <a href="https://reserve.cre8ors.com/" target="_blank" rel="noreferrer">
        <div className="font-bold dark:text-[black] text-white">Reserve List</div>
      </a>

      <div className="font-bold dark:text-[black] text-white">Explore</div>
      <div className="ml-4 text-gray-400 cursor-not-allowed">Allowlist</div>
      <a href="/leaderboard" target="_blank" rel="noreferrer">
        <div className="ml-4 dark:text-[black] text-white">Leaderboard</div>
      </a>
      <a href="https://opensea.io/collection/cre8orscollective" target="_blank" rel="noreferrer">
        <div className="ml-4 dark:text-[black] text-white">Collective</div>
      </a>
      <a href="/teams" target="_blank" rel="noreferrer">
        <div className="ml-4 dark:text-[black] text-white">Founders</div>
      </a>
      <a href="https://opensea.io/collection/cre8ors-relics" target="_blank" rel="noreferrer">
        <div className="ml-4 dark:text-[black] text-white">Relics</div>
      </a>
      <a href="https://cre8ors.beehiiv.com/" target="_blank" rel="noreferrer">
        <div className="ml-4 dark:text-[black] text-white">Blog</div>
      </a>
      <div className="ml-4 text-gray-400 cursor-not-allowed">Warehouse</div>
      <div className="ml-4 text-gray-400 cursor-not-allowed">Profiles</div>
      <CustomConnectWallet />
      <div className="flex flex-row justify-around items-center">
        <DiscordIcon />
        <a href="https://twitter.com/Cre8orsNFT" target="_blank" rel="noreferrer">
          <div className="pt-2 cursor-pointer ">
            <Image
              src={`${
                themeMode === "dark"
                  ? "/assets/Header/twitter.png"
                  : "/assets/Header/white_twitter.png"
              }`}
              width={24}
              height={19}
              alt="discord"
            />
          </div>
        </a>
        <div className="flex items-center font-quicksand font-bold border-[1px] rounded-[20px] border-[gray]">
          <ToggleButton onClick={onToggle} value={isDarkMode} id="light_dark_switch" />
        </div>
      </div>
    </div>
  )
}

export default MenuList
