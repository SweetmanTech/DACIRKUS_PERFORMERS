import { useMediaQuery } from "usehooks-ts"
import SectionTitle from "../SectionTitle"
import SectionContent from "../SectionContent"
import FadeInImage from "../FadeInImage"

const Cre8orsWay = () => {
  const isMobile = useMediaQuery("(max-width: 490px)")

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 gap-y-4 pt-[10rem] pb-[6rem] relative">
      <div className="flex justify-start mb-6 md:mb-0">
        <FadeInImage
          url="/assets/Landing/profile.svg"
          width={!isMobile ? 337 : 215.07}
          height={!isMobile ? 673 : 429.83}
          className={`
            md:!translate-y-[40px] md:!translate-x-[60px]
            !translate-y-[150px] !translate-x-[135px]
          `}
        />
      </div>
      <div
        className="flex flex-col justify-center
        translate-y-[150px] 
        md:translate-y-[0px]
        dark:bg-[black] bg-white md:!bg-transparent
        shadow-none dark:shadow-[0_0_10px_10px_rgba(0,0,0)] md:!shadow-none"
      >
        <div>
          <SectionTitle
            text="Cre8ors are Way More than Just Profile Pictures"
            className="md:text-right md:!leading-[63px]"
          />
          <SectionContent className="md:text-right md:mx-10">
            {isMobile ? (
              <>
                {`They're AiPEPs, or Artificially Intelligent`} <br />{" "}
                {`Protocol-Enabled Pictures. As AI
                evolves,`}
                <br /> so does your NFT. Holders get full rights
                <br /> to all IP their AiPEP generates. PFPs that <br />
                work for you, forever.
              </>
            ) : (
              <>
                {`They're AiPEPs, or Artificially Intelligent Protocol-Enabled Pictures.`} <br />
                {`As AI evolves, so does your NFT. Holders get full rights to all IP their AiPEP
                generates. PFPs that work for you, forever.`}
              </>
            )}
          </SectionContent>
        </div>
      </div>
    </div>
  )
}

export default Cre8orsWay
