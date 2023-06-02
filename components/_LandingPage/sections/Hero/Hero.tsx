import Image from "next/image"
import customLoader from "../../../../lib/customLoader"

const Hero = () => (
  <div className="relative flex justify-center w-full mt-12">
    <Image
      src="/LOGO_CITYSCAPE.png"
      alt="cre8ors cityscape"
      width={1158}
      height={691}
      loader={customLoader}
    />
    <div className="absolute z-10 justify-center inline-block mx-2 mt-20 samsungS8:mt-[28px] lg:top-96 md:top-80 top-32 md:mx-4">
      <Image
        src="/CRE8ORSLOGO_HEROPAGE.png"
        alt="cre8ors logo"
        width={1459}
        height={288}
        loader={customLoader}
      />
    </div>
  </div>
)

export default Hero
