/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import Header from "../components/Header"
import SeoHead from "../components/SeoHead"
import customLoader from "../lib/customLoader"

const Home: NextPage = () => (
  <div className="h-screen overflow-y-auto text-black bg-white">
    <SeoHead title="Cre8ors" description="Cre8ors" image="/CRE8ORSLOGO_ICON.svg" />
    <Header />
    <div className="relative flex justify-center w-full mt-12">
      <Image
        src="/LOGO_CITYSCAPE.png"
        alt="cre8ors cityscape"
        width={1158}
        height={691}
        loader={customLoader}
      />
      <div className="absolute z-10 justify-center inline-block mt-20 lg:top-96 md:top-80 top-32">
        <Image
          src="/CRE8ORSLOGO_HEROPAGE.png"
          alt="cre8ors logo"
          width={1459}
          height={288}
          loader={customLoader}
        />
      </div>
    </div>
    <div className="flex flex-col items-center justify-center mt-20 mb-24 lg:md:mt-72">
      <Image src="/main.png" alt="main" width={2055} height={2464} loader={customLoader} />
    </div>
    <div className="relative flex flex-col items-center justify-center mt-24">
      <Image
        src="/CITYSCAPE2.png"
        alt="cityscape"
        width={1988}
        height={2671}
        loader={customLoader}
      />
      <div className="absolute z-10 justify-center inline-block cursor-pointer lg:md:mt-36 lg:top-96 md:top-80 top-24 lg:md:top-36">
        <div className="flex flex-row ">
          <motion.div
            whileHover={{
              scale: 1.005,
            }}
          >
            <Link href="https://cre8ors.beehiiv.com/?_gl=1*16y8c82*_ga*NzQ0MjY2NzkyLjE2NzI4NzY1OTY.*_ga_E6Y4WLQ2EC*MTY4MTQ5NTA5Ny4zNS4xLjE2ODE0OTUxMDAuNTcuMC4w">
              <Image
                src="/COMMUNITYFUNNEL.svg"
                alt="community funnel"
                width={980}
                height={513}
                loader={customLoader}
              />
            </Link>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.005,
            }}
          >
            <Link href="https://cre8ors.beehiiv.com/?_gl=1*16y8c82*_ga*NzQ0MjY2NzkyLjE2NzI4NzY1OTY.*_ga_E6Y4WLQ2EC*MTY4MTQ5NTA5Ny4zNS4xLjE2ODE0OTUxMDAuNTcuMC4w">
              <Image
                src="/CRE8ORSWORLD.svg"
                alt="community funnel"
                width={980}
                height={513}
                loader={customLoader}
              />
            </Link>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.005,
            }}
          >
            <Link href="https://cre8ors.beehiiv.com/?_gl=1*16y8c82*_ga*NzQ0MjY2NzkyLjE2NzI4NzY1OTY.*_ga_E6Y4WLQ2EC*MTY4MTQ5NTA5Ny4zNS4xLjE2ODE0OTUxMDAuNTcuMC4w">
              <Image
                src="/EMPATHY.svg"
                alt="community funnel"
                width={980}
                height={513}
                loader={customLoader}
              />
            </Link>
          </motion.div>
        </div>
        <div className="flex items-center justify-center w-full mt-2">
          <Image src="scroll.png" alt="scroll" width={1810} height={52} loader={customLoader} />
        </div>
      </div>
    </div>
  </div>
)

export default Home
