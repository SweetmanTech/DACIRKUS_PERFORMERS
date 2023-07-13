import { useMediaQuery } from "usehooks-ts"
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

  const isXl = useMediaQuery("(max-width: 1150px)")

  return (
    <SectionContainer>
      <div className="relative w-full h-[550px] xl:h-[900px] flex-col flex justify-center">
        <div className="flex xl:hidden justify-center">
          <div className="grid grid-cols-4 gap-y-[20px] pb-[35px] w-[300px] samsungS8:w-[340px]">
            {pfpList.map((pfp) => (
              <Media
                key={pfp.id}
                link={pfp.link}
                type="image"
                containerClasses="w-[79px] h-[110px]"
              />
            ))}
          </div>
        </div>
        <div>
          <Title
            text={isXl ? "8 Creative Archetypes" : "The Eight Creative Archetypes"}
            className="leading-[103.3%] text-center
                    !text-[22px] xs:!text-[27px] xl:!text-[65px]"
          />
          <Content
            content={
              isXl
                ? `Each PFP comes with a creative DNA card NFT. This card represents\nyour Cre8ors archetype. Trade your cards to change your archetype\nwithout the need to sell your entire PFP. Cre8ors PFPs are interactive\nand upgradable ERC-6551 tokens.`
                : `Each PFP comes with a creative DNA card NFT. This card represents your Cre8ors\narchetype. Trade your cards to change your archetype without the need to sell\nyour entire PFP. Cre8ors PFPs are interactive and upgradable ERC-6551 tokens.`
            }
            className="leading-[103.3%] text-center
                  pt-[10px] xl:pt-[27px]
                  !text-[8.5px] xs:!text-[10px] xl:!text-[19px]"
          />
        </div>
        <div className="hidden xl:flex justify-center">
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
