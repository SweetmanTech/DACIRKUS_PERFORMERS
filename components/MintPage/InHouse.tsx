import { useMediaQuery } from "usehooks-ts"
import SectionContainer from "./SectionContainer"
import Title from "../Common/Title"
import Content from "../Common/Content"
import Media from "../../shared/Media"

const InHouse = () => {
  const isXl = useMediaQuery("(max-width: 1150px)")

  return (
    <SectionContainer>
      <div className="relative w-full h-[550px] xl:h-[960px] flex justify-center items-center">
        <div
          className="grid  
                grid-cols-1 xl:grid-cols-2 
                xl:gap-[20px] 2xl:gap-x-[150px]"
        >
          <div className="w-[100%] flex justify-center pb-[56px]">
            <Media
              link={
                isXl
                  ? "/assets/Mint/InHouse/mobile_character.png"
                  : "/assets/Mint/InHouse/character.png"
              }
              blurLink={
                isXl
                  ? "/assets/Mint/InHouse/mobile_character.png"
                  : "/assets/Mint/InHouse/character.png"
              }
              type="image"
              containerClasses="xl:w-[519px] xl:h-[766px]
              w-[242.03px] h-[357px]"
            />
          </div>
          <div className="flex flex-col justify-center">
            <Title
              text={
                isXl ? `IP Management and\nLicensing` : `In-House IP\nManagement\nAnd Licensing`
              }
              className="leading-[103.3%] 
              text-center xl:text-right
              !text-[22px] xs:!text-[27px] xl:!text-[65px]"
            />
            <Content
              content={
                isXl
                  ? `We believe IP is one of the most valuable utilities for NFT holders, so why\nstop at just the artwork? Our dedicated IP managment department will\nhelp you license your Cre8ors IP.From the PFP artwork to all the co-\ncreations you make with the community, Cre8ors mission is to unleash\nthe creative potential and unlockfinancial freedom for our members.`
                  : `We believe IP is one of the most valuable utilities for NFT\nholders, so why stop at just the artwork? Our dedicated IP\nmanagment department will help you license your Cre8ors IP.\nFrom the PFP artwork to all the co-creations you make with\nthe community, Cre8ors mission is to unleash the creative\npotential and unlock financial freedom for our members.`
              }
              className="leading-[103.3%]
              pt-[10px] xl:pt-[27px]
              text-center xl:text-right
              !text-[8.5px] xs:!text-[10px] xl:!text-[19px]"
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

export default InHouse
