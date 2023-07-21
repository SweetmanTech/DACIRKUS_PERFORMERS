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
      <div className="relative w-full pt-[85px] xl:pt-0 xl:h-[1000px] flex-col flex justify-center">
        <div className="flex xl:hidden justify-center">
          <div className="grid grid-cols-4 gap-y-[20px] pb-[35px] w-[300px] samsungS8:w-[340px]">
            {pfpList.map((pfp) => (
              <Media
                key={pfp.id}
                link={pfp.link}
                blurLink={pfp.link}
                type="image"
                containerClasses="w-[79px] h-[110px]"
              />
            ))}
          </div>
        </div>
        <div>
          <Title
            text={
              isXl
                ? `An Intelligent PFP\n+ Smart Wallet`
                : "An Intelligent PFP,\nHybrid Token + Smart Wallet"
            }
            className="leading-[103.3%] text-center
                    !text-[22px] xs:!text-[27px] xl:!text-[65px]"
          />
          <Content
            content={
              isXl
                ? `Cre8ors PFP's are interactive ERC721-HAC hybrid tokens with\nownership of their own ERC-6551 smart wallet. Each PFP comes\nwith a creative DNA card NFT inside. This card represents your\nCre8ors archetype trait. Trade your cards and change your\ntraits without the need to sell your entire PFP.`
                : `Cre8ors PFP's are new interactive ERC-721ACH hybrid tokens with ownership of their own ERC-6551 smart\nwallet. Each PFP comes with a creative DNA card NFT inside. This card represents your Cre8ors archetype\ntrait. Trade your cards and change your traits without the need to sell your entire PFP.`
            }
            className="leading-[103.3%] text-center
                  pt-[10px] xl:pt-[27px]
                  !text-[10px] samsungS8:!text-[11px] xs:!text-[12px] xl:!text-[19px]"
          />
        </div>
        <div className="hidden xl:flex justify-center">
          <div className="grid grid-cols-4 gap-y-[20px] pt-[35px] w-[760px]">
            {pfpList.map((pfp) => (
              <Media
                key={pfp.id}
                link={pfp.link}
                blurLink={pfp.link}
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
