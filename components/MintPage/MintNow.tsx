import Link from "next/link"
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

  return (
    <SectionContainer>
      <div className="relative w-full h-[100vh] flex justify-center items-center">
        {canMintNow ? (
          <div>
            <Title text="Holy Shit, A Fair Mint" className="leading-[103.3%] text-center" />
            <Content
              content={`You choose how much you pay, depending on how long you plan on holding.\nIf you change your mind, unlock later by paying the difference.\nCre8orsList (Allowlist) can mint up to 4 NFTs per wallet.`}
              className="leading-[103.3%] text-center pt-[27px]"
            />
            <div className="grid grid-cols-3 pt-[40px] gap-x-[40px]">
              <MintCard
                label="Tier I"
                mintPrice={99}
                desc="8 Month Lockup"
                clasName="bg-[#E93F45]"
              />
              <MintCard
                label="Tier I"
                mintPrice={199}
                desc="8 Week Lockup"
                clasName="bg-[#F4EE05]"
              />
              <MintCard label="Tier I" mintPrice={299} desc="No Lockup" clasName="bg-[#08E1E6]" />
            </div>
            <div className="flex justify-center">
              <Button
                id="mint_btn"
                className="mt-[40px] w-[308px] h-[88px] text-[30px] rounded-[15px]"
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
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-between items-center h-[470px]">
            <Title text="Mint Your Cre8ors" />
            <Timer />
            <Content
              content="Passports: July 27th @ 8am EST • Allowlist: July 28th @ 8am EST • Public Sale : July 29th 8am EST"
              className="!text-[13px]"
            />
          </div>
        )}
      </div>
      <div>
        {canMintNow ? (
          <Character
            link="/assets/Mint/MintNow/character_woman.png"
            originWidth={358}
            originHeight={436}
            className="!absolute bottom-0 right-0"
            screenWidth={1440}
          />
        ) : (
          <>
            <Character
              link="/assets/Mint/MintNow/character.svg"
              originWidth={345.89}
              originHeight={692.14}
              className="!absolute bottom-0 left-0"
              screenWidth={1440}
            />
            <Link href="/faq" target="_self">
              <div className="cursor-pointer">
                <Media
                  link="/assets/Mint/help.png"
                  type="image"
                  containerClasses="!absolute right-[70px] bottom-[30px] z-[10]
                w-[25px] h-[25px] xl:w-[51px] xl:h-[51px]"
                />
              </div>
            </Link>
          </>
        )}
      </div>
    </SectionContainer>
  )
}

export default MintNow
