import Link from "next/link"
import SectionContainer from "./SectionContainer"
import Title from "../Common/Title"
import Content from "../Common/Content"
import Character from "./Character"
import Media from "../../shared/Media"

const MintNow = () => (
  <SectionContainer>
    <div className="relative w-full h-[100vh] flex justify-center items-center">
      <div className="flex flex-col justify-between h-[470px]">
        <Title text="Mint Your Cre8ors" />
        <Content
          content="Passports: July 27th @ 8am EST • Allowlist: July 28th @ 8am EST • Public Sale : July 29th 8am EST"
          className="!text-[13px]"
        />
      </div>
    </div>
    <div>
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
    </div>
  </SectionContainer>
)

export default MintNow
