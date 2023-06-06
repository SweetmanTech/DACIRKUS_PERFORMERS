import Image from "next/image"
import { useTheme } from "../../providers/ThemeProvider"

const DiscordIcon = () => {
  const { themeMode } = useTheme()

  return (
    <a href="https://discord.gg/ZpZBHCrqHQ" target="_blank" rel="noreferrer">
      <div className="pt-2 cursor-pointer">
        <Image
          src={`${
            themeMode === "light"
              ? "/assets/Header/discord.png"
              : "/assets/Header/white_discord.png"
          }`}
          width={24}
          height={19}
          alt="discord"
        />
      </div>
    </a>
  )
}

export default DiscordIcon
