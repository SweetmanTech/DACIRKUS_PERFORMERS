import Image from "next/image"
import SectionTitle from "../SectionTitle"
import SectionContent from "../SectionContent"

import CreativityImage from "../../../public/assets/Landing/creativity.png"

const WelcomeToCre8ors = () => (
  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 gap-y-4">
    <div className="flex flex-col justify-center">
      <div>
        <SectionTitle text="Welcome to the Next Generation of Creativity" />
        <SectionContent>
          Cre8ors is a next-gen media brand made for the metaverse; <br />
          powered by our curated collective of web3 creators, IP co-creation protocols and
          AI-enabled NFTs.
        </SectionContent>
        <div className="lg:m-12">
          <button type="button" className="px-4 py-2 m-2 font-bold text-white rounded bg-[black]">
            Reserve list
          </button>
        </div>
      </div>
    </div>
    <div className="flex justify-center">
      <Image src={CreativityImage.src} width={319} height={671} alt="not found image" />
    </div>
  </div>
)

export default WelcomeToCre8ors
