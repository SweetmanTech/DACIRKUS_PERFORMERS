import Image from "next/image"
import SectionTitle from "../SectionTitle"
import SectionContent from "../SectionContent"

import { Button } from "../../../shared/Button"
import FadeInImage from "../FadeInImage"

const WelcomeToCre8ors = () => (
  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 gap-y-4 pt-[10rem] pb-[6rem]">
    <div className="md:hidden flex justify-center mb-6">
      <FadeInImage url={'/assets/Landing/creativity.png'} width={200} height={460} />
    </div>
    <div className="flex flex-col justify-center">
      <div>
        <SectionTitle text="Welcome to the Next Generation of Creativity" />
        <SectionContent>
          Cre8ors is a next-gen media brand made for the metaverse; <br />
          powered by our curated collective of web3 creators, IP co-creation protocols and
          AI-enabled NFTs.
        </SectionContent>
        <div className="m-6 lg:m-12 flex justify-center md:justify-start">
          <Button id="welcome_reserve_btn">
            <a target="_blank" rel="noreferrer" href="http://reserve.cre8ors.com/">
              Reserve List
            </a>
          </Button>
        </div>
      </div>
    </div>
    <div className="md:flex hidden justify-center ">
      <FadeInImage url={'/assets/Landing/creativity.png'} width={319} height={671}/>
    </div>
  </div>
)

export default WelcomeToCre8ors
