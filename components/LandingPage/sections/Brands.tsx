import Image, { StaticImageData } from "next/image"

import { useMediaQuery } from "usehooks-ts"
import ExtendImage from "../../../public/assets/Landing/brands/extend.png"
import LampImage from "../../../public/assets/Landing/brands/lamp.png"
import ChainImage from "../../../public/assets/Landing/brands/chain.png"
import NetworkingImage from "../../../public/assets/Landing/brands/networking.png"
import Title from "./brands/Title"
import Desc from "./brands/Desc"

interface ItemData {
  image: StaticImageData
  width: number
  height: number
  title: React.ReactNode
  text: React.ReactNode
  key: string
}

const Brands = () => {
  const isMobile = useMediaQuery("(max-width: 490px)")

  const Items = [
    {
      key: "brand-extend",
      image: ExtendImage,
      width: 141,
      height: 163,
      title: (
        <>
          Extended <br />
          Trait Banners
        </>
      ),
      text: <>All Cre8ors come with on extended banner that fits within any social header.</>,
    },
    {
      key: "brand-lamp",
      image: LampImage,
      width: 160,
      height: 160,
      title: (
        <>
          On-Chain <br /> Co-Creation
        </>
      ),
      text: <>Collaborate, license, and get paid with our CR8 protocol and dApps</>,
    },
    {
      key: "brand-chain",
      image: ChainImage,
      width: 158,
      height: 158,
      title: (
        <>
          Stake in the <br /> Warehouse
        </>
      ),
      text: <>Soft-staking to unlock AI training, collect badges, and earn rewards.</>,
    },
    {
      key: "brand-networking",
      image: NetworkingImage,
      width: 157,
      height: 157,
      title: (
        <>
          Next-Level <br /> Networking
        </>
      ),
      text: <>Connect with the community from the comfort of your phone.</>,
    },
  ]

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-4 pt-[15rem] pb-[15rem] w-full">
        {Items.map((item: ItemData) => (
          <div
            key={item.key}
            className="flex justify-center md:flex-col items-center mb-12 md:mb-0 gap-4 md:gap-0"
          >
            <Image
              src={item.image.src}
              width={!isMobile ? item.width : item.width - 30}
              height={!isMobile ? item.height : item.height - 30}
              alt="not found image"
            />
            <div>
              <Title> {item.title}</Title>
              <Desc> {item.text} </Desc>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Brands
