import Image, { StaticImageData } from "next/image"

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
  const Items = [
    {
      key: "brand-extend",
      image: ExtendImage,
      width: 151,
      height: 151,
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
    <div className="lg:m-12 grid grid-cols-2 md:grid-cols-4 pt-[10rem]">
      {Items.map((item: ItemData) => (
        <div key={item.key} className="flex justify-center flex-col items-center">
          <Image
            src={item.image.src}
            width={item.width}
            height={item.height}
            alt="not found image"
          />
          <Title> {item.title}</Title>
          <Desc> {item.text} </Desc>
        </div>
      ))}
    </div>
  )
}

export default Brands
