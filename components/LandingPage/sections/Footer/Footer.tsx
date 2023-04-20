import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import customLoader from "../../../../lib/customLoader"

const CTA_BUTTONS = [
  {
    alt: "twitter",
    src: "/CTA-TWITTER.png",
    srcHover: "/hover/CTA-TWITTERHOVER.png",
    link: "https://twitter.com/Cre8orsNFT",
  },
  {
    alt: "discord",
    src: "/CTA-DISCORD.png",
    srcHover: "/hover/CTA-DISCORDHOVER.png",
  },
  {
    alt: "slack",
    src: "/CTA-SLACK.png",
    srcHover: "/hover/CTA-SLACKHOVER.png",
  },
  {
    alt: "newsletter",
    src: "/CTA-NEWSLETTER.png",
    srcHover: "/hover/CTA-NEWSLETTERHOVER.png",
  },
]
const Footer = () => {
  const [isHovered, setIsHovered] = useState({
    twitter: false,
    discord: false,
    slack: false,
    newsletter: false,
  })
  return (
    <footer className="absolute flex flex-row items-center w-full text-white lg:md:justify-center lg:md:mt-24 lg:md:py-4">
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
              width={400}
              height={200}
              loader={customLoader}
            />
          </Link>
        </motion.div>
      ))}
    </footer>
  )
}

export default Footer
