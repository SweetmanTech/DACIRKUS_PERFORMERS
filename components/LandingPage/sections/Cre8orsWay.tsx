import Image from "next/image"
import { useMediaQuery } from "usehooks-ts"
import SectionTitle from "../SectionTitle"
import SectionContent from "../SectionContent"

import ProfileImage from "../../../public/assets/Landing/profile.png"

const Cre8orsWay = () => {
  const isMobile = useMediaQuery("(max-width: 490px)")

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 gap-y-4 pt-[10rem] pb-[6rem]">
      <div className="flex justify-center mb-6 md:mb-0">
        <Image
          src={ProfileImage.src}
          width={!isMobile ? 337 : 250}
          height={!isMobile ? 673 : 446}
          alt="not found profile img"
        />
      </div>
      <div className="flex flex-col justify-center">
        <div>
          <SectionTitle text="Cre8ors are Way More than Just Profile Pictures" />
          <SectionContent>
            {`They're AiPEPs, or Artificially Intelligent Protocol-Enabled Pictures.`} <br />
            {`As AI evolves, so does your NFT. Holders get full rights to all IP their AiPEP generates. PFPs
            that work for you, forever.`}
          </SectionContent>
        </div>
      </div>
    </div>
  )
}

export default Cre8orsWay
