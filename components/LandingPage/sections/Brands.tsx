import { useMediaQuery } from "usehooks-ts"
import FadeInImage from "../FadeInImage"
import Title from "./brands/Title"
import Desc from "./brands/Desc"

interface ItemData {
  image: string
  mobile_image: string
  width: number
  height: number
  mobile_width: number
  mobile_height: number
  title: React.ReactNode
  text: React.ReactNode
  key: string
}

const Brands = () => {
  const isMobile = useMediaQuery("(max-width: 490px)")

  const Items = [
    {
      key: "brand-extend",
      image: "/assets/Landing/brands/extend.svg",
      mobile_image: "/assets/Landing/brands/mobile_extend.png",
      width: 133,
      height: 155,
      mobile_width: 98,
      mobile_height: 114,
      title: (
        <>
          Extended <br />
          Trait Banners
        </>
      ),
      text: <>All Cre8ors come with an extended banner that fits within any social header.</>,
    },
    {
      key: "brand-lamp",
      image: "/assets/Landing/brands/lamp.svg",
      mobile_image: "/assets/Landing/brands/mobile_lamp.png",
      width: 147,
      height: 141,
      mobile_width: 109,
      mobile_height: 104,
      title: (
        <>
          On-Chain <br /> Co-Creation
        </>
      ),
      text: (
        <>
          Collaborate, license, and <br /> get paid with our CR8 protocol and dApps
        </>
      ),
    },
    {
      key: "brand-chain",
      image: "/assets/Landing/brands/chain.svg",
      mobile_image: "/assets/Landing/brands/mobile_chain.png",
      width: 131,
      height: 150,
      mobile_width: 99,
      mobile_height: 113,
      title: (
        <>
          Stake in the <br /> Warehouse
        </>
      ),
      text: (
        <>
          Soft-staking to unlock AI training, collect badges,
          <br /> and earn rewards.
        </>
      ),
    },
    {
      key: "brand-networking",
      image: "/assets/Landing/brands/networking.svg",
      mobile_image: "/assets/Landing/brands/mobile_networking.png",
      width: 167,
      height: 139,
      mobile_width: 117,
      mobile_height: 97,
      title: (
        <>
          Next-Level <br /> Networking
        </>
      ),
      text: (
        <>
          Connect with the <br /> community from the <br /> comfort of your phone.
        </>
      ),
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
            <FadeInImage
              url={!isMobile ? item.image : item.mobile_image}
              width={!isMobile ? item.width : item.mobile_width}
              height={!isMobile ? item.height : item.mobile_height}
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
