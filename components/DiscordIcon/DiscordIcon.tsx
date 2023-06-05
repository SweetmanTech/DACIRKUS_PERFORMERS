import Image from "next/image"
import { useMediaQuery } from "usehooks-ts"

const DiscordIcon = () => {
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <a
      href="https://discord.gg/ZpZBHCrqHQ"
      target="_blank"
      rel="noreferrer"
      className="md:pt-2 md:pl-4 cursor-pointer"
    >
      <Image
        src="/Icons/DISCORD.svg"
        alt="discord"
        width={isMobile ? 42 : 24}
        height={isMobile ? 35 : 19}
      />
    </a>
  )
}

export default DiscordIcon
