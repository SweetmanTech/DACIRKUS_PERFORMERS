/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { Logger, ILogObj } from "tslog"
import Header from "../components/Header"
import SeoHead from "../components/SeoHead"
import customLoader from "../lib/customLoader"

const log: Logger<ILogObj> = new Logger()
log.settings.hideLogPositionForProduction = true
log.settings.stylePrettyLogs = true
log.settings.minLevel = 2
const Home: NextPage = () => {
  const [isHovered, setIsHovered] = useState({ red: false, yellow: false, purple: false })
  return (
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
      <div className="flex flex-col items-center justify-center mt-20 mb-24 lg:md:mt-72">
        <div className="lg:w-[58%] w-3/4 space-y-8 items-center space-between">
          <div className="py-12 space-y-4 lg:pb-72 md:py-24">
            <p className="justify-around text-2xl text-center lg:m-12 lg:text-8xl md:text-6xl font-eigerdals">
              A community built for Web3 creators.
            </p>
            <p className="justify-center w-full text-center text-md lg:text-3xl md:text-2xl font-objektivmk1">
              We are a curated group of inovators, misfits, inventors, and connectors - building
              something new today to make the world way better than yesterday.
            </p>
          </div>
          <div className="pb-12 space-y-4 lg:pb-72 md:pb-24">
            <p className="justify-around text-2xl text-center lg:m-12 lg:text-8xl md:text-6xl font-eigerdals">
              This isn&apos;t your typical NFT project.
            </p>
            <p className="justify-center w-full text-center text-md lg:text-3xl md:text-2xl font-objektivmk1">
              We are not an alpha group, DAO, or PFP...yet. Before all that we&apos;re working
              together to solve the real world problems that Web3 creators face every day.
            </p>
          </div>
          <div className="mb-48 space-y-4 md:pb-24">
            <p className="justify-around text-2xl text-center lg:m-12 lg:text-8xl md:text-6xl font-eigerdals">
              Unlocking everyone&apos;s inner creativity.
            </p>
            <p className="justify-center w-full text-center text-md lg:text-3xl md:text-2xl font-objektivmk1">
              Imagine a world full of co-creation and collaboration, all powered by protocols.
              We&apos;re shipping utility to pass down to your grandkids for generations to come.
            </p>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col items-center justify-center mt-24">
        <Image
          src="/CITYSCAPE2.png"
          alt="cityscape"
          width={1988}
          height={2671}
          loader={customLoader}
        />
        <div className="absolute z-10 justify-center inline-block cursor-pointer lg:md:mt-36 lg:top-96 md:top-80 top-24 lg:md:top-36 samsungS8:top-10">
          <div className="flex flex-row m-2 gap-x-4">
            <motion.div
              whileHover={{
                scale: 1.005,
              }}
              onMouseEnter={() => setIsHovered({ ...isHovered, red: true })}
              onMouseLeave={() => setIsHovered({ ...isHovered, red: false })}
            >
              <Link href="https://cre8ors.beehiiv.com/?_gl=1*16y8c82*_ga*NzQ0MjY2NzkyLjE2NzI4NzY1OTY.*_ga_E6Y4WLQ2EC*MTY4MTQ5NTA5Ny4zNS4xLjE2ODE0OTUxMDAuNTcuMC4w">
                <Image
                  src={isHovered.red ? "/hover/COMMUNITYFUNNEL-HOVER.png" : "/COMMUNITYFUNNEL.png"}
                  alt="community funnel"
                  width={680}
                  height={413}
                  loader={customLoader}
                />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.005,
              }}
              onMouseEnter={() => setIsHovered({ ...isHovered, yellow: true })}
              onMouseLeave={() => setIsHovered({ ...isHovered, yellow: false })}
            >
              <Link href="https://cre8ors.beehiiv.com/?_gl=1*16y8c82*_ga*NzQ0MjY2NzkyLjE2NzI4NzY1OTY.*_ga_E6Y4WLQ2EC*MTY4MTQ5NTA5Ny4zNS4xLjE2ODE0OTUxMDAuNTcuMC4w">
                <Image
                  src={isHovered.yellow ? "/hover/CRE8ORSWORLD-HOVER.png" : "/CRE8ORSWORLD.png"}
                  alt="community world"
                  width={680}
                  height={413}
                  loader={customLoader}
                />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.005,
              }}
              onMouseEnter={() => setIsHovered({ ...isHovered, purple: true })}
              onMouseLeave={() => setIsHovered({ ...isHovered, purple: false })}
            >
              <Link href="https://cre8ors.beehiiv.com/?_gl=1*16y8c82*_ga*NzQ0MjY2NzkyLjE2NzI4NzY1OTY.*_ga_E6Y4WLQ2EC*MTY4MTQ5NTA5Ny4zNS4xLjE2ODE0OTUxMDAuNTcuMC4w">
                <Image
                  src={isHovered.purple ? "/hover/EMPATHY-HOVER.png" : "/EMPATHY.png"}
                  alt="community funnel"
                  width={680}
                  height={413}
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
}

export default Home
