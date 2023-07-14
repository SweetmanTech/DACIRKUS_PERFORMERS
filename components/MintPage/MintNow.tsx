import Link from "next/link"
import { useMediaQuery } from "usehooks-ts"
import { useMeasure } from "react-use"
import SectionContainer from "./SectionContainer"
import Title from "../Common/Title"
import Content from "../Common/Content"
import Character from "./Character"
import Media from "../../shared/Media"
import Timer from "./MintNow/Timer"
import MintCard from "./MintNow/MintCard"
import { Button } from "../../shared/Button"

const MintNow = () => {
  const canMintNow = new Date().getTime() >= new Date("27 Jul 2023 09:00:00 UTC").getTime()
  const isXl = useMediaQuery("(max-width: 1150px")

  const [containerRef, containerSizes] = useMeasure()
  const [timerRef, timerSizes] = useMeasure()

  return (
    <SectionContainer>
      <div
        className="relative w-full h-[100vh] flex justify-center items-start xl:items-center z-[1]"
        ref={containerRef}
      >
        {canMintNow ? (
          <div
            className="pt-[90px] pb-[90px]
          flex flex-col items-center
          w-[100vw]
          bg-[url('/assets/Mint/MintNow/mobile_background.png')]
          bg-cover bg-[bottom_center]
          xl:bg-none"
          >
            <Title
              text="Holy Shit, A Fair Mint"
              className="leading-[103.3%] text-center
             !text-[22px] xs:!text-[27px] xl:!text-[65px]"
            />
            <Content
              content={`You choose how much you pay, depending on how long you plan on holding.\nIf you change your mind, unlock later by paying the difference.\nCre8orsList (Allowlist) can mint up to 4 NFTs per wallet.`}
              className="leading-[103.3%] text-center
              pt-[10px] xl:pt-[27px]
              !text-[8.5px] xs:!text-[10px] xl:!text-[19px]"
            />
            <div
              className="grid grid-cols-1 xl:grid-cols-3 pt-[40px] 
            gap-y-[20px] xl:w-[1078px]"
            >
              <MintCard
                label="Tier I"
                mintPrice={99}
                desc="8 Month Lockup"
                className="bg-[#E93F45]"
              />
              <MintCard
                label="Tier II"
                mintPrice={199}
                desc="8 Week Lockup"
                className="bg-[#F4EE05]"
              />
              <MintCard
                label="Tier III"
                mintPrice={299}
                desc="No Lockup"
                className="bg-[#08E1E6]"
              />
            </div>
            <div className="flex justify-center">
              <Button
                id="mint_btn"
                className="mt-[40px] 
                xl:w-[308px] xl:h-[88px] 
                w-[133px] h-[38px]
                text-[14px] xl:text-[30px] 
                rounded-[5px] xl:rounded-[15px]"
              >
                Mint now
              </Button>
            </div>
            <div className="pt-[27px] flex justify-center items-center gap-x-[10px]">
              <Content className="!text-[18px]" content="Scroll down to learn more" />
              <Media
                link="/assets/Mint/MintNow/down-arrow.svg"
                type="image"
                containerClasses="w-[15px] h-[15px]"
                blurLink="/assets/Mint/MintNow/down-arrow.svg"
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-between items-center mt-[70px] xl:mt-0 xl:h-[470px]">
            <div className="xl:!hidden w-full flex justify-center pb-[35px]">
              <Media
                link="/assets/Mint/MintNow/mobile_character.png"
                blurLink="/assets/Mint/MintNow/mobile_character.png"
                type="image"
                containerClasses="w-[223px] h-[450px]"
                containerStyle={{
                  height: `${((containerSizes.height - timerSizes.height) / 3) * 2}px`,
                  width: `${
                    ((((containerSizes.height - timerSizes.height) / 3) * 2) / 450) * 233
                  }px`,
                }}
              />
            </div>
            <div ref={timerRef} className="flex justify-center flex-col items-center">
              <div className="flex items-center gap-x-[25px] pb-[20px] xl:pb-0">
                <Title
                  text="Mint Your Cre8or"
                  className="!text-[33px] xs:!text-[39px] xl:!text-[65px]"
                />
                {!isXl && (
                  <Link href="/faq" target="_self">
                    <div className="cursor-pointer">
                      <Media
                        link="/assets/Mint/help.png"
                        blurLink="/assets/Mint/help.png"
                        type="image"
                        containerClasses="w-[25px] h-[25px] xl:w-[40px] xl:h-[40px]"
                      />
                    </div>
                  </Link>
                )}
              </div>
              <Timer />
              <Content
                content="Passports: July 27th @ 8am EST • Allowlist: July 28th @ 8am EST • Public Sale : July 29th 8am EST"
                className="!text-[6px] xl:!text-[13px] pt-[20px] xl:pb-0"
              />
            </div>
          </div>
        )}
      </div>
      <div>
        {canMintNow ? (
          <div className="xl:block hidden">
            <Character
              link="/assets/Mint/MintNow/character_woman.png"
              originWidth={358}
              originHeight={436}
              className="!absolute bottom-0 right-0"
              screenWidth={1440}
            />
          </div>
        ) : (
          <div className="xl:block hidden">
            <Character
              link="/assets/Mint/MintNow/character.png"
              originWidth={345.89}
              originHeight={692.14}
              className="!absolute bottom-0 left-0"
              screenWidth={1440}
            />
          </div>
        )}
      </div>
    </SectionContainer>
  )
}

export default MintNow
