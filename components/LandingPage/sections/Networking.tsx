import { useMediaQuery } from "usehooks-ts"
import SectionTitle from "../SectionTitle"
import SectionContent from "../SectionContent"
import { useTheme } from "../../../providers/ThemeProvider"
import FadeInImage from "../FadeInImage"

interface ImageData {
  key: string
  image: string
  white_image: string
  width: number
  height: number
}

const Networking = () => {
  const isMobile = useMediaQuery("(max-width: 490px)")

  const imagesList: Array<ImageData> = [
    {
      key: "columbia-networking",
      image: "/assets/Landing/networking/columbia.png",
      white_image: "/assets/Landing/networking/columbia_white.png",
      width: 51,
      height: 51,
    },
    {
      key: "fx-networking",
      image: "/assets/Landing/networking/fx.svg",
      white_image: "/assets/Landing/networking/fx_white.svg",
      width: 60,
      height: 62,
    },
    {
      key: "zynga-networking",
      image: "/assets/Landing/networking/zynga.svg",
      white_image: "/assets/Landing/networking/zynga_white.svg",
      width: 77,
      height: 78,
    },
    {
      key: "world-networking",
      image: "/assets/Landing/networking/world.svg",
      white_image: "/assets/Landing/networking/world_white.svg",
      width: 54,
      height: 54,
    },
    {
      key: "warner-networking",
      image: "/assets/Landing/networking/warner.svg",
      white_image: "/assets/Landing/networking/warner_white.svg",
      width: 77,
      height: 28,
    },
    {
      key: "espn-networking",
      image: "/assets/Landing/networking/espn.svg",
      white_image: "/assets/Landing/networking/espn_white.svg",
      width: 67,
      height: 41,
    },
    {
      key: "league-networking",
      image: "/assets/Landing/networking/league.svg",
      white_image: "/assets/Landing/networking/league_white.svg",
      width: 69,
      height: 40,
    },
    {
      key: "atlantic-networking",
      image: "/assets/Landing/networking/atlantic.png",
      white_image: "/assets/Landing/networking/atlantic_white.svg",
      width: 48,
      height: 48,
    },
  ]

  const mobileImagesList: Array<ImageData> = [
    {
      key: "fx-networking",
      image: "/assets/Landing/networking/mobile_fx.png",
      white_image: "/assets/Landing/networking/mobile_white_fx.png",
      width: 35,
      height: 22,
    },
    {
      key: "zynga-networking",
      image: "/assets/Landing/networking/mobile_zynga.png",
      white_image: "/assets/Landing/networking/mobile_white_zynga.png",
      width: 51,
      height: 51,
    },
    {
      key: "warner-networking",
      image: "/assets/Landing/networking/mobile_warner.png",
      white_image: "/assets/Landing/networking/mobile_white_warner.png",
      width: 51,
      height: 18,
    },
    {
      key: "league-networking",
      image: "/assets/Landing/networking/mobile_league.png",
      white_image: "/assets/Landing/networking/mobile_white_league.png",
      width: 41,
      height: 41.8,
    },
    {
      key: "atlantic-networking",
      image: "/assets/Landing/networking/mobile_atlantic.png",
      white_image: "/assets/Landing/networking/mobile_white_atlantic.png",
      width: 32,
      height: 32,
    },
    {
      key: "world-networking",
      image: "/assets/Landing/networking/mobile_world.png",
      white_image: "/assets/Landing/networking/mobile_white_world.png",
      width: 36,
      height: 36,
    },
    {
      key: "columbia-networking",
      image: "/assets/Landing/networking/mobile_columbia.png",
      white_image: "/assets/Landing/networking/mobile_white_columbia.png",
      width: 34,
      height: 34,
    },
    {
      key: "espn-networking",
      image: "/assets/Landing/networking/mobile_espn.png",
      white_image: "/assets/Landing/networking/mobile_white_espn.png",
      width: 44,
      height: 26,
    },
    {
      key: "pga-networking",
      image: "/assets/Landing/networking/mobile_pga.png",
      white_image: "/assets/Landing/networking/mobile_white_pga.png",
      width: 35,
      height: 35,
    },
  ]

  const { themeMode } = useTheme()

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 gap-y-4 pt-[10rem] pb-[6rem]">
      <div className="flex justify-center md:hidden block mb-6">
        <FadeInImage url="/assets/Landing/networking.svg" width={182} height={364.57} />
      </div>
      <div
        className="
        flex flex-col justify-center
        translate-y-[70px]
        md:translate-y-[0px]
        dark:bg-[black] bg-white md:!bg-transparent
        shadow-none dark:shadow-[0_0_10px_10px_rgba(0,0,0)] md:!shadow-none
      "
      >
        <div
          className="
          translate-y-[-85px]
          md:translate-y-[0px]
        "
        >
          <SectionTitle
            text="Networking for Tastemakers and Trendsetters"
            className="md:text-left"
          />
          <SectionContent>
            {isMobile ? (
              <>
                Cre8ors is built to help the world’s top
                <br /> creators connect with world-class brands. <br /> Some of our partnerships
                include:
              </>
            ) : (
              <>
                Cre8ors is built to help the world’s top creators connect <br /> with world-class
                brands. Some of our partnerships include:
              </>
            )}
          </SectionContent>
          <div className="lg:m-12 grid grid-cols-3 gap-4 md:grid-cols-4 md:gap-y-2 gap-y-6">
            {isMobile
              ? mobileImagesList.map((imageData: ImageData) => (
                  <div key={imageData.key} className="flex justify-center items-center">
                    <FadeInImage
                      url={themeMode === "light" ? imageData.image : imageData.white_image}
                      width={imageData.width}
                      height={imageData.height}
                    />
                  </div>
                ))
              : imagesList.map((imageData: ImageData) => (
                  <div key={imageData.key} className="flex justify-center items-center">
                    <FadeInImage
                      url={themeMode === "light" ? imageData.image : imageData.white_image}
                      width={imageData.width}
                      height={imageData.height}
                    />
                  </div>
                ))}
          </div>
        </div>
      </div>
      <div className="justify-center items-center md:flex hidden">
        <FadeInImage
          url="/assets/Landing/networking.svg"
          width={279.85}
          height={560.57}
          className="!translate-y-[100px] !translate-x-[20px]"
        />
        <FadeInImage
          url="/assets/Landing/letter.png"
          width={40}
          height={59}
          className="!translate-y-[125px] !translate-x-[160px]"
        />
      </div>
    </div>
  )
}

export default Networking
