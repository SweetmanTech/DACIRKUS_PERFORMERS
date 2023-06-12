import { useRef } from "react"
import { useWindowSize } from "usehooks-ts"
import dynamic from "next/dynamic"
import WelcomeToCre8ors from "./sections/WelcomeToCre8ors"
import InviteForCreator from "./sections/InviteForCreator"
import Networking from "./sections/Networking"
import Cre8orsWay from "./sections/Cre8orsWay"
import Brands from "./sections/Brands"
import OpenSoon from "./sections/OpenSoon"
import { useTheme } from "../../providers/ThemeProvider"
import Character from "./Character"

const SectionContainer = dynamic(() => import("./SectionContainer"), { ssr: false })

interface LandingContentProps {
  onChangeEmail: (e: any) => void
  email: string
  handleClick: (e: any) => void
}

const LandingContent = ({ email, onChangeEmail, handleClick }: LandingContentProps) => {
  const { themeMode } = useTheme()

  const networkingImageRef = useRef()
  const profileImageRef = useRef()
  const openSoonImageRef = useRef()
  const welcomeImageRef = useRef()

  const { width } = useWindowSize()

  return (
    <>
      <SectionContainer
        className="
          z-[5]
        "
        backgroundImage="bg-[url('/assets/Landing/dark_bg/overlook.png')]"
        backgroundPosition="bg-[right_-50px_bottom] md:bg-[right_bottom]"
        style={{
          backgroundSize:
            width > 985 ? `${width}px ${Number((width / 1439) * 975).toFixed(2)}px` : "985px",
          height: width > 985 ? `${Number((width / 1439) * 975)}px` : "625px",
        }}
      >
        <WelcomeToCre8ors
          value={email}
          onChange={onChangeEmail}
          onSubscribe={handleClick}
          contentHeight={width > 985 ? Number((width / 1439) * 975) : 310}
          characterHeight={602}
          desktopImageRef={welcomeImageRef}
        />
        <Character
          screenWidth={width}
          bgImgWidth={1439}
          bgImgHeight={975}
          offsetX={0.19}
          offsetY={0.14}
          characterWidth={318}
          characterHeight={670.72}
          characterRef={welcomeImageRef}
          characterUrl="/assets/Landing/creativity.svg"
          xDirection="right"
          yDirection="bottom"
          responsive={985}
        />
      </SectionContainer>

      <SectionContainer
        className="
            dark:bg-[center_bottom]
            bg-cover 
            h-[799px] md:h-[972px] 
            mt-[170px] md:mt-[0px]
            z-[4]
          "
        containerClassName={themeMode === "light" ? `` : "fade_bg"}
        backgroundImage="bg-[url('/assets/Landing/dark_bg/timessquare.png')]"
        backgroundPosition="bg-[center_bottom] bg-cover"
        style={{}}
      >
        <InviteForCreator mobileHeight={799} deskTopHeight={972} />
      </SectionContainer>

      <div className="relative z-[3]">
        <SectionContainer
          className="
              bg-[right_-50px_bottom] md:bg-[right_bottom]
            "
          containerClassName={themeMode === "light" ? `` : "fade_bg"}
          backgroundImage="bg-[url('/assets/Landing/dark_bg/trainstation.png')]"
          backgroundPosition="bg-[right_-50px_bottom] md:bg-[right_bottom]"
          style={{
            backgroundSize:
              width > 985 ? `${width}px ${Number((width / 1439) * 975).toFixed(2)}px` : "985px",
            height: width > 985 ? `${Number((width / 1439) * 975)}px` : "625px",
            marginTop: width < 985 ? `245px` : `0px`,
          }}
        >
          <Networking
            contentHeight={width > 985 ? Number((width / 1439) * 973) : 340}
            characterHeight={625}
            desktopImageRef={networkingImageRef}
          />
        </SectionContainer>
        <Character
          screenWidth={width}
          bgImgWidth={1439}
          bgImgHeight={975}
          offsetX={0.18}
          offsetY={0.13}
          characterWidth={279.85}
          characterHeight={560.57}
          characterRef={networkingImageRef}
          characterUrl="/assets/Landing/networking.svg"
          xDirection="right"
          yDirection="bottom"
          responsive={985}
        />
        <Character
          screenWidth={width}
          bgImgWidth={1439}
          bgImgHeight={975}
          offsetX={0.05}
          offsetY={0.38}
          characterWidth={40}
          characterHeight={59}
          characterUrl="/assets/Landing/letter.svg"
          xDirection="right"
          yDirection="bottom"
          responsive={985}
        />
      </div>

      <div className="relative z-[2]">
        <SectionContainer
          className={`
              
            `}
          containerClassName={themeMode === "light" ? `` : "fade_bg"}
          backgroundImage="bg-[url('/assets/Landing/dark_bg/replicate.png')]"
          style={{
            backgroundSize:
              width > 985 ? `${width}px ${Number((width / 1439) * 973).toFixed(2)}px` : "985px",
            height: width > 985 ? `${Number((width / 1439) * 973)}px` : "665px",
            marginTop: width < 985 ? `338px` : `0px`,
          }}
        >
          <Cre8orsWay
            contentHeight={width > 985 ? Number((width / 1439) * 973) : 180}
            characterHeight={665}
            desktopImageRef={profileImageRef}
          />
        </SectionContainer>

        <Character
          screenWidth={width}
          bgImgWidth={1439}
          bgImgHeight={973}
          offsetX={0.1}
          offsetY={0.09}
          characterWidth={337}
          characterHeight={673}
          characterRef={profileImageRef}
          characterUrl="/assets/Landing/profile.svg"
          xDirection="left"
          yDirection="bottom"
          responsive={1100}
        />
      </div>

      <div className="relative z-[1]">
        <SectionContainer
          className=" mt-[-1px]"
          containerClassName={themeMode === "light" ? `` : "fade_bg"}
          backgroundImage="bg-[url('/assets/Landing/dark_bg/path.png')]"
        >
          <Brands />
        </SectionContainer>
      </div>

      <div className="relative z-[0]">
        <SectionContainer
          className="
              bg-center 
            "
          containerClassName={themeMode === "light" ? `` : "fade_bg"}
          backgroundImage="bg-[url('/assets/Landing/dark_bg/factory.png')]"
          style={{
            backgroundSize:
              width > 985 ? `${width}px ${Number((width / 1439) * 1079).toFixed(2)}px` : "910px",
            height: width > 985 ? `${Number((width / 1439) * 1079)}px` : "625px",
            marginTop: width < 985 ? `-1px` : `0px`,
          }}
        >
          <OpenSoon
            contentHeight={width > 985 ? Number((width / 1440) * 1079) : 200}
            characterHeight={625}
            desktopImageRef={openSoonImageRef}
          />
        </SectionContainer>
        <Character
          screenWidth={width}
          bgImgWidth={1440}
          bgImgHeight={1079}
          offsetX={0.2}
          offsetY={0.04}
          characterWidth={478.97}
          characterHeight={931}
          characterRef={openSoonImageRef}
          characterUrl="/assets/Landing/opensoon.svg"
          xDirection="right"
          yDirection="bottom"
          responsive={985}
        />
        <Character
          screenWidth={width}
          bgImgWidth={1440}
          bgImgHeight={1079}
          offsetX={0.125}
          offsetY={0.2}
          characterWidth={73.91}
          characterHeight={105.35}
          characterRef={openSoonImageRef}
          characterUrl="/assets/Landing/painter.svg"
          xDirection="right"
          yDirection="bottom"
          responsive={985}
        />
      </div>
    </>
  )
}

export default LandingContent
