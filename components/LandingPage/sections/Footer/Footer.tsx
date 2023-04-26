// import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { useMediaQuery } from "usehooks-ts"
import customLoader from "../../../../lib/customLoader"

const Footer = () => {
  const [isHovered, setIsHovered] = useState({ newsletter: false, twitter: false, discord: false })
  const isMobile = useMediaQuery("(max-width: 768px)")
  const CTA_BUTTONS = [
    {
      alt: "newsletter",
      src: "/BUTTON_NEWSLETTER.png",
      srcHover: "/hover/BUTTON_NEWSLETTER_HOVER.png",
      link: "https://cre8ors.beehiiv.com/?_gl=1*16y8c82*_ga*NzQ0MjY2NzkyLjE2NzI4NzY1OTY.*_ga_E6Y4WLQ2EC*MTY4MTQ5NTA5Ny4zNS4xLjE2ODE0OTUxMDAuNTcuMC4w",
      width: isMobile ? 500 : 900,
      height: isMobile ? 100 : 150,
    },
    {
      alt: "twitter",
      src: "/BUTTON_TWITTER.png",
      srcHover: "/hover/BUTTON_TWITTER_HOVER.png",
      link: "https://twitter.com/Cre8orsNFT",
      width: isMobile ? 300 : 600,
      height: isMobile ? 75 : 150,
    },
    {
      alt: "discord",
      src: "/BUTTON_DISCORD.png",
      srcHover: "/hover/BUTTON_DISCORD_HOVER.png",
      width: isMobile ? 200 : 500,
      height: isMobile ? 65 : 155,
    },
  ]
  return (
    <footer className="relative flex flex-col items-center w-full text-white lg:md:justify-center lg:md:mt-28 lg:md:py-4">
      {CTA_BUTTONS.map((button) => (
        <motion.div
          key={button.alt}
          className="cursor-pointer"
          whileHover={{ scale: 0.9 }}
          onMouseEnter={() => setIsHovered({ ...isHovered, [button.alt]: true })}
          onMouseLeave={() => setIsHovered({ ...isHovered, [button.alt]: false })}
        >
          <Link href={button.link || "/"}>
            <Image
              src={isHovered[button.alt] ? button.srcHover : button.src}
              alt={button.alt}
              width={button.width}
              height={button.height}
              loader={customLoader}
            />
          </Link>
        </motion.div>
      ))}
    </footer>
  )
}
export default Footer
