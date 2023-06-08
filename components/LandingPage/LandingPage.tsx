import { useRef, useState } from "react"
import { useScroll } from "framer-motion"
import WelcomeToCre8ors from "./sections/WelcomeToCre8ors"
import InviteForCreator from "./sections/InviteForCreator"
import Networking from "./sections/Networking"
import Cre8orsWay from "./sections/Cre8orsWay"
import Brands from "./sections/Brands"
import OpenSoon from "./sections/OpenSoon"
import Footer from "../Footer"
import SectionLayout from "./SectionLayout"
import Layout from "../Layout"
import useFadeScrollY from "../../hooks/useFadeScrollY"

const LandingPage = () => {
  const [email, setEmail] = useState("")
  const conatinerRef = useRef(null)

  const { scrollY } = useScroll({ container: conatinerRef })

  useFadeScrollY({
    scrollY,
  })

  const onChangeEmail = (e: any) => {
    setEmail(e.target.value)
  }

  return (
    <Layout type="base">
      <div className="h-full overflow-y-scroll" ref={conatinerRef}>
        <SectionLayout
          className="dark:bg-[url('/assets/Landing/dark_bg/overlook.png')] dark:bg-[center_bottom] md:h-[975px] z-[5]"
          backgroundImage="bg-[url('/assets/Landing/dark_bg/overlook.png')]"
        >
          <WelcomeToCre8ors value={email} onChange={onChangeEmail} />
        </SectionLayout>
        <SectionLayout
          className="dark:bg-[url('/assets/Landing/dark_bg/timessquare.png')] dark:bg-[center_top] h-[972px] mt-[120px] md:mt-[0px] z-[4]"
          containerClassName="fade_bg"
          backgroundImage="bg-[url('/assets/Landing/dark_bg/timessquare.png')]"
        >
          <InviteForCreator />
        </SectionLayout>
        <SectionLayout
          className="dark:bg-[url('/assets/Landing/dark_bg/trainstation.png')] dark:bg-[length:922px_625px] bg-[right_-70px_top] h-[975px] mt-[255px] md:mt-0"
          containerClassName="fade_bg"
          backgroundImage="bg-[url('/assets/Landing/dark_bg/trainstation.png')]"
        >
          <Networking />
        </SectionLayout>
        <SectionLayout
          className="dark:bg-[url('/assets/Landing/dark_bg/replicate.png')] dark:bg-[length:983px_665px] h-[973px] mt-[80px] md:mt-[0px]"
          containerClassName="fade_bg"
          backgroundImage="bg-[url('/assets/Landing/dark_bg/replicate.png')]"
        >
          <Cre8orsWay />
        </SectionLayout>
        <SectionLayout
          className="md:dark:bg-[url('/assets/Landing/dark_bg/path.png')] h-[984px] mt-[-1px]"
          containerClassName="fade_bg"
          backgroundImage="bg-[url('/assets/Landing/dark_bg/path.png')]"
        >
          <Brands />
        </SectionLayout>
        <SectionLayout
          className="dark:bg-[url('/assets/Landing/dark_bg/factory.png')] bg-[length:1214px_910px] bg-center h-[1079px] mt-[-1px]"
          containerClassName="fade_bg"
          backgroundImage="bg-[url('/assets/Landing/dark_bg/factory.png')]"
        >
          <OpenSoon />
        </SectionLayout>
        <Footer />
      </div>
    </Layout>
  )
}

export default LandingPage
