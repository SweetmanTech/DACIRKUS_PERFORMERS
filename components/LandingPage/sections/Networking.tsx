import Image from "next/image"
import { useMediaQuery } from "usehooks-ts"
import SectionTitle from "../SectionTitle"
import SectionContent from "../SectionContent"
import { useTheme } from "../../../providers/ThemeProvider"

interface ImageData {
  key: string
  image: string
  white_image: string
  width: number
  height: number
}

const Networking = () => {
  const isMobile = useMediaQuery("(max-width: 490px)")

  const imagesLightMode: Array<ImageData> = [
    {
      key: "columbia-networking",
      image: "/assets/Landing/networking/columbia.png",
      white_image: "/assets/Landing/networking/columbia_white.png",
      width: 51,
      height: 51,
    },
    {
      key: "fx-networking",
      image: "/assets/Landing/networking/fx.png",
      white_image: "/assets/Landing/networking/fx_white.png",
      width: 60,
      height: 62,
    },
    {
      key: "zynga-networking",
      image: "/assets/Landing/networking/zynga.png",
      white_image: "/assets/Landing/networking/zynga_white.png",
      width: 77,
      height: 78,
    },
    {
      key: "world-networking",
      image: "/assets/Landing/networking/world.png",
      white_image: "/assets/Landing/networking/world_white.png",
      width: 54,
      height: 54,
    },
    {
      key: "warner-networking",
      image: "/assets/Landing/networking/warner.png",
      white_image: "/assets/Landing/networking/warner_white.png",
      width: 77,
      height: 28,
    },
    {
      key: "espn-networking",
      image: "/assets/Landing/networking/espn.png",
      white_image: "/assets/Landing/networking/espn_white.png",
      width: 67,
      height: 41,
    },
    {
      key: "league-networking",
      image: "/assets/Landing/networking/league.png",
      white_image: "/assets/Landing/networking/league_white.png",
      width: 69,
      height: 40,
    },
    {
      key: "atlantic-networking",
      image: "/assets/Landing/networking/atlantic.png",
      white_image: "/assets/Landing/networking/atlantic_white.png",
      width: 48,
      height: 48,
    },
    {
      key: "pga-networking",
      image: "/assets/Landing/networking/pga.png",
      white_image: "/assets/Landing/networking/pga_white.png",
      width: 43,
      height: 63,
    },
  ]

  const { themeMode } = useTheme()

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 gap-y-4 pt-[10rem] pb-[6rem]">
      <div className="flex justify-center md:hidden block mb-6">
        <Image
          src="/assets/Landing/networking.png"
          width={200}
          height={399}
          alt="not found networking img"
        />
      </div>
      <div className="flex flex-col justify-center">
        <div>
          <SectionTitle text="Networking for Tastemakers and Trendsetters" />
          <SectionContent>
            {`Cre8ors is built to help the world’s top creators connect with world-class brands. Some
            of our partnerships include:`}
          </SectionContent>
          <div className="lg:m-12 grid grid-cols-3 gap-4 md:grid-cols-4 gap-y-2">
            {imagesLightMode.slice(0, 9).map((imageData: ImageData) => (
              <div key={imageData.key} className="flex justify-center items-center">
                <Image
                  src={themeMode === "light" ? imageData.image : imageData.white_image}
                  width={!isMobile ? imageData.width : imageData.width - 10}
                  height={!isMobile ? imageData.height : imageData.height - 10}
                  alt="not found img"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="justify-center md:flex hidden">
        <Image
          src="/assets/Landing/networking.png"
          width={281}
          height={561}
          alt="not found networking img"
        />
      </div>
    </div>
  )
}

export default Networking
