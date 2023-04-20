import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import customLoader from "../../../../lib/customLoader"

const Community = () => {
  const [isHovered, setIsHovered] = useState({ red: false, yellow: false, purple: false })

  return (
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
  )
}

export default Community
