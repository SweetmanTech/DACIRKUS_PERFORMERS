import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { useMediaQuery } from "usehooks-ts"

const Footer = () => {
  const [newsletterHovered, setNewsletterHovered] = useState(false)
  const [twitterHovered, setTwitterHovered] = useState(false)
  const [discordHovered, setDiscordHovered] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <footer className="relative flex flex-col items-center w-full text-white lg:md:justify-center lg:md:mt-28 lg:md:py-4">
      <motion.div className="cursor-pointer" whileHover={{ scale: 0.9 }}>
        <Link href="https://cre8ors.beehiiv.com/?_gl=1*16y8c82*_ga*NzQ0MjY2NzkyLjE2NzI4NzY1OTY.*_ga_E6Y4WLQ2EC*MTY4MTQ5NTA5Ny4zNS4xLjE2ODE0OTUxMDAuNTcuMC4w">
          <Image
            src={
              newsletterHovered ? "/hover/BUTTON_NEWSLETTER_HOVER.png" : "/BUTTON_NEWSLETTER.png"
            }
            alt="newsletter"
            width={isMobile ? 500 : 900}
            height={isMobile ? 100 : 150}
            onMouseEnter={() => setNewsletterHovered(true)}
            onMouseLeave={() => setNewsletterHovered(false)}
          />
        </Link>
      </motion.div>
      <motion.div className="cursor-pointer" whileHover={{ scale: 0.9 }}>
        <Link href={"https://twitter.com/Cre8orsNFT" || "/"}>
          <Image
            src={twitterHovered ? "/hover/BUTTON_TWITTER_HOVER.png" : "/BUTTON_TWITTER.png"}
            alt="twitter"
            width={isMobile ? 300 : 600}
            height={isMobile ? 75 : 150}
            onMouseEnter={() => setTwitterHovered(true)}
            onMouseLeave={() => setTwitterHovered(false)}
          />
        </Link>
      </motion.div>
      <motion.div className="cursor-pointer" whileHover={{ scale: 0.9 }}>
        <Link href={"/" || "/"}>
          <Image
            src={discordHovered ? "/hover/BUTTON_DISCORD_HOVER.png" : "/BUTTON_DISCORD.png"}
            alt="discord"
            width={isMobile ? 200 : 500}
            height={isMobile ? 65 : 155}
            onMouseEnter={() => setDiscordHovered(true)}
            onMouseLeave={() => setDiscordHovered(false)}
          />
        </Link>
      </motion.div>
    </footer>
  )
}
export default Footer
