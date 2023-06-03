import Image, { StaticImageData } from "next/image"
import SectionTitle from "../SectionTitle"
import SectionContent from "../SectionContent"

import NetworkingImage from "../../../public/assets/Landing/networking.png"
import ColumbiaImage from "../../../public/assets/Landing/networking/columbia.png"
import FxImage from "../../../public/assets/Landing/networking/fx.png"
import ZyngaImage from "../../../public/assets/Landing/networking/zynga.png"
import WorldImage from "../../../public/assets/Landing/networking/world.png"
import WarnerImage from "../../../public/assets/Landing/networking/warner.png"
import EspnImage from "../../../public/assets/Landing/networking/espn.png"
import LeagueImage from "../../../public/assets/Landing/networking/league.png"
import AlanticImage from "../../../public/assets/Landing/networking/alantic.png"

interface ImageData {
  key: string
  image: StaticImageData
  width: number
  height: number
}

const Networking = () => {
  const imagesLightMode: Array<ImageData> = [
    {
      key: "columbia-networking",
      image: ColumbiaImage,
      width: 51,
      height: 51,
    },
    {
      key: "fx-networking",
      image: FxImage,
      width: 60,
      height: 62,
    },
    {
      key: "zynga-networking",
      image: ZyngaImage,
      width: 77,
      height: 78,
    },
    {
      key: "world-networking",
      image: WorldImage,
      width: 54,
      height: 54,
    },
    {
      key: "warner-networking",
      image: WarnerImage,
      width: 77,
      height: 28,
    },
    {
      key: "espn-networking",
      image: EspnImage,
      width: 67,
      height: 41,
    },
    {
      key: "league-networking",
      image: LeagueImage,
      width: 61,
      height: 62,
    },
    {
      key: "alantic-networking",
      image: AlanticImage,
      width: 48,
      height: 48,
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 gap-y-4 pt-[10rem]">
      <div className="flex flex-col justify-center">
        <div>
          <SectionTitle text="Networking for Tastemakers and Trendsetters" />
          <SectionContent>
            {`Cre8ors is built to help the world’s top creators connect with world-class brands. Some
            of our partnerships include:`}
          </SectionContent>
          <div className="lg:m-12 grid grid-cols-2 gap-4 md:grid-cols-4 gap-y-2">
            {imagesLightMode.map((imageData: ImageData) => (
              <div key={imageData.key} className="flex justify-center items-center">
                <Image
                  src={imageData.image.src}
                  width={imageData.width}
                  height={imageData.height}
                  alt="not found img"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Image src={NetworkingImage.src} width={281} height={561} alt="not found networking img" />
      </div>
    </div>
  )
}

export default Networking
