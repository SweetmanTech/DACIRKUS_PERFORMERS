import SectionContainer from "./SectionContainer"
import Title from "../Common/Title"
import Content from "../Common/Content"
import Media from "../../shared/Media"

const InHouse = () => (
  <SectionContainer>
    <div className="relative w-full h-[100vh] flex justify-center items-center">
      <div className="grid grid-cols-2 gap-x-[150px]">
        <div>
          <Media
            link="/assets/Mint/InHouse/character.svg"
            type="image"
            containerClasses="w-[519px] h-[766px]"
          />
        </div>
        <div className="flex flex-col justify-center">
          <Title
            text={`In-House IP\nManagement\nAnd Licensing`}
            className="leading-[103.3%] text-right"
          />
          <Content
            content={`We believe IP is one of the most valuable utilities for\nNFT holders, so why stop at just the artwork? Our\ndedicated IP managment department will help you\nlicense your Cre8ors IP. From the PFP artwork to all\nthe co-creations you make with the community,\nCre8ors mission is to unleash the creative potential\nand unlock financial freedom for our members.`}
            className="leading-[103.3%] pt-[27px] text-right"
          />
        </div>
      </div>
    </div>
  </SectionContainer>
)

export default InHouse
