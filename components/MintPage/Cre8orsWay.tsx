import { useMediaQuery } from "usehooks-ts"
import SectionContainer from "./SectionContainer"
import Title from "../Common/Title"
import Content from "../Common/Content"
import Media from "../../shared/Media"

const Cre8orsWay = () => {
  const avatarList = [
    {
      id: "avatar1",
      link: "/assets/Mint/Cre8orsWay/avatar1.svg",
    },
    {
      id: "avatar2",
      link: "/assets/Mint/Cre8orsWay/avatar2.svg",
    },
    {
      id: "avatar3",
      link: "/assets/Mint/Cre8orsWay/avatar3.svg",
    },
    {
      id: "avatar4",
      link: "/assets/Mint/Cre8orsWay/avatar4.svg",
    },
    {
      id: "avatar5",
      link: "/assets/Mint/Cre8orsWay/avatar5.svg",
    },
    {
      id: "avatar6",
      link: "/assets/Mint/Cre8orsWay/avatar6.svg",
    },
    {
      id: "avatar7",
      link: "/assets/Mint/Cre8orsWay/avatar7.svg",
    },
    {
      id: "avatar8",
      link: "/assets/Mint/Cre8orsWay/avatar8.svg",
    },
    {
      id: "avatar9",
      link: "/assets/Mint/Cre8orsWay/avatar9.svg",
    },
  ]

  const isXl = useMediaQuery("(max-width: 1150px)")

  return (
    <SectionContainer>
      <div className="relative w-full h-[550px] xl:h-[816px] flex justify-center items-center">
        <div
          className="grid 
                grid-cols-1 xl:grid-cols-2 
                xl:gap-[20px] 2xl:gap-x-[150px]"
        >
          <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-y-[20px] gap-x-[5px] xl:gap-x-[10px]">
              {avatarList.map((avatar) => (
                <Media
                  key={avatar.id}
                  link={avatar.link}
                  type="image"
                  containerClasses="xl:w-[170px] xl:h-[170px]
                                    w-[75px] h-[75px]
                                    rounded-full overflow-hidden
                                    border-[2px] xl:border-[5px] border-[white]"
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center pt-[27px] xl:pt-0">
            <Title
              text={
                isXl
                  ? `Cre8ors Are Way More\nThean Just Profile Pictures`
                  : `Cre8ors Are Way\nMore Than Just\nProfile Pictures`
              }
              className="leading-[103.3%] 
                            text-center xl:text-right
                            !text-[22px] xs:!text-[27px] xl:!text-[65px]"
            />
            <Content
              content={
                isXl
                  ? `They’re a novel collection of 8,888 Artificially Intelligent Protocol-Enabled\nPictures, or AiPEPs (Powered by the ERC-6551 token standard) that blend\nB&W AI photography with colorful 2D-characters into one stand-out\navatar. PFPs will never be the same. `
                  : `They’re a novel collection of 8,888 Artificially\nIntelligent Protocol-Enabled Pictures, or AiPEPs\n(Powered by the ERC-6551 token standard) that blend\nB&W AI photography with colorful 2D-characters into\none stand-out avatar. PFPs will never be the same.`
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

export default Cre8orsWay
