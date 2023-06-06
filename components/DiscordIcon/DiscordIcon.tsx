import Image from "next/image"
import { useTheme } from "../../providers/ThemeProvider"

const DiscordIcon = () => {
  const { themeMode } = useTheme()

  return (
    <a
      href="https://discord.com/channels/1055217047908384849/1055218028012392519"
      target="_blank"
      rel="noreferrer"
    >
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
