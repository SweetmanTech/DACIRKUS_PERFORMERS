import SectionContainer from "./SectionContainer"
import Title from "../Common/Title"
import Content from "../Common/Content"
import Media from "../../shared/Media"

const Archetypes = () => {
  const pfpList = [
    {
      id: "pfp1",
      link: "/assets/Mint/PFP/musician.png",
    },
    {
      id: "pfp2",
      link: "/assets/Mint/PFP/writer.png",
    },
    {
      id: "pfp3",
      link: "/assets/Mint/PFP/photographer.png",
    },
    {
      id: "pfp4",
      link: "/assets/Mint/PFP/designer.png",
    },
    {
      id: "pfp5",
      link: "/assets/Mint/PFP/engineer.png",
    },
    {
      id: "pfp6",
      link: "/assets/Mint/PFP/dancer.png",
    },
    {
      id: "pfp7",
      link: "/assets/Mint/PFP/director.png",
    },
    {
      id: "pfp8",
      link: "/assets/Mint/PFP/thespain.png",
    },
  ]

  return (
    <SectionContainer>
      <div className="relative w-full h-[900px]">
        <div>
          <Title text="The Eight Creative Archetypes" className="leading-[103.3%] text-center" />
          <Content
            content={`Each PFP comes with a creative DNA card NFT. This card represents your Cre8ors\narchetype. Trade your cards to change your archetype without the need to sell\nyour entire PFP. Cre8ors PFPs are interactive and upgradable ERC-6551 tokens.`}
            className="leading-[103.3%] text-center pt-[27px]"
          />
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-4 gap-y-[20px] pt-[35px] w-[760px]">
            {pfpList.map((pfp) => (
              <Media
                key={pfp.id}
                link={pfp.link}
                type="image"
                containerClasses="w-[212px] h-[294px]"
              />
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

export default Archetypes
