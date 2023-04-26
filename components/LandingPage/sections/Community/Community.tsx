import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import customLoader from "../../../../lib/customLoader"
import Footer from "../Footer"

const Community = () => {
  const [isHovered, setIsHovered] = useState({
    red: false,
    yellow: false,
    purple: false,
    green: false,
    dark_green: false,
    dark_purple: false,
    dark_red: false,
    teal: false,
    banana: false,
  })
  const COMMUNITY_CARDS = [
    {
      title: "Community Funnel",
      src: "/COMMUNITYFUNNEL.png",
      link: "https://cre8ors.beehiiv.com/p/the-community-funnel-framework",
      hoverKey: "red",
    },
    {
      title: "World",
      src: "/CRE8ORSWORLD.png",
      link: "https://cre8ors.beehiiv.com/p/cre8ors-story-world-comes-life",
      hoverKey: "yellow",
    },
    {
      title: "Empathy",
      src: "/EMPATHY.png",
      link: "https://cre8ors.beehiiv.com/p/empathy",
      hoverKey: "purple",
    },
    {
      title: "Fail",
      src: "/FAILING.png",
      link: "https://cre8ors.beehiiv.com/p/give-permission-fail",
      hoverKey: "green",
    },
    {
      title: "Lore",
      src: "/CRE8ORSLORE.png",
      link: "https://cre8ors.beehiiv.com/p/unveiling-first-chapter-cre8ors-lore",
      hoverKey: "dark_green",
    },

    {
      title: "NFT Saved",
      src: "/NFTSAVEDIDENTITY.png",
      link: "https://cre8ors.beehiiv.com/p/nft-saved-identity",
      hoverKey: "dark_purple",
    },
    {
      title: "Weekly Updates 1",
      src: "/weeklyupdate2.png",
      link: "https://cre8ors.beehiiv.com/p/cre8ors-weekly-update",
      hoverKey: "dark_red",
    },
    {
      title: "Weekly Updates 2",
      src: "/weeklyupdate.png",
      link: "https://cre8ors.beehiiv.com/p/cre8ors-weekly-update-022723",
      hoverKey: "teal",
    },
    {
      title: "Weekly Updates 3",
      src: "/weeklyupdate3.png",
      link: "https://cre8ors.beehiiv.com/p/cre8ors-weekly-update-030623",
      hoverKey: "banana",
    },
  ]
  return (
    <div className="relative flex flex-col items-center justify-center mt-24">
      <Image
        src="/CITYSCAPE2.png"
        alt="cityscape"
        width={1988}
        height={3271}
        loader={customLoader}
      />
      <div className="absolute z-10 justify-center cursor-pointer lg:md:mt-10 lg:top-96 md:top-80 top-24 lg:md:top-36 samsungS8:top-10 ">
        <div className="flex gap-5 p-4 overflow-x-auto snap-x snap-mandatory flex-nowrap scroll-h-96 scroll-pl-6 scrollbar scrollbar-thumb-red-600 scrollbar-thumb-rounded-lg scrollbar-track-gray-100 scrollbar-track-rounded-lg scroll-m-20">
          {COMMUNITY_CARDS.map((card) => (
            <motion.div
              key={card.title}
              className="flex-none snap-center snap-always"
              whileHover={{
                scale: 1.055,
              }}
              onMouseEnter={() => setIsHovered({ ...isHovered, [card.hoverKey]: true })}
              onMouseLeave={() => setIsHovered({ ...isHovered, [card.hoverKey]: false })}
            >
              <Link href={card.link}>
                <Image src={card.src} alt={card.title} width={300} height={210} />
              </Link>
            </motion.div>
          ))}
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Community
