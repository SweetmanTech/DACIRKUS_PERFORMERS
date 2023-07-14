import SectionContainer from "./SectionContainer"
import Title from "../Common/Title"
import Content from "../Common/Content"
import Media from "../../shared/Media"

const Collaborate = () => (
  <SectionContainer>
    <div className="relative w-full h-[960px] flex justify-center items-center">
      <div className="grid grid-cols-2">
        <div className="flex flex-col justify-center">
          <Title text={`Create, Remix,\nCollaborate,\nand Get Paid`} className="leading-[103.3%]" />
          <Content
            content={`Cre8ors Protocol is an interoperable smart contract that\nuses novel community-bonding mechanics to generate\ncomposable media catalogs at scale. WTF does that\nmean? We’re building a series of remix dApps that\nmake it fun and easy for holders to collaborate, license, and\nget paid when co-creating on-chain with friends.`}
            className="leading-[103.3%] pt-[27px]"
          />
        </div>
        <div>
          <Media
            link="/assets/Mint/Collaborate/graphic.png"
            type="image"
            containerClasses="w-[685px] h-[653px]"
          />
        </div>
      </div>
    </div>
  </SectionContainer>
)

export default Collaborate
