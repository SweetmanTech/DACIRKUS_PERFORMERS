import { useRef } from "react"
import { useScroll } from "framer-motion"
import WelcomeToCre8ors from "./sections/WelcomeToCre8ors"
import InviteForCreator from "./sections/InviteForCreator"
import Networking from "./sections/Networking"
import Cre8orsWay from "./sections/Cre8orsWay"
import Brands from "./sections/Brands"
import OpenSoon from "./sections/OpenSoon"
import Footer from "../Footer/Footer"
import SectionLayout from "./SectionLayout"
import Layout from "../Layout"
import useFadeScrollY from "../../hooks/useFadeScrollY"

const LandingPage = () => {
  const conatinerRef = useRef(null)

  const { scrollY } = useScroll({ container: conatinerRef })

  useFadeScrollY({
    scrollY,
  })

  return (
    <Layout type="base">
      <div className="h-full overflow-y-scroll" ref={conatinerRef}>
        <SectionLayout className="bg-[url('/assets/Landing/dark_bg/overlook.png')]">
          <WelcomeToCre8ors />
        </SectionLayout>
        <SectionLayout
          className="bg-[url('/assets/Landing/dark_bg/timessquare.png')]"
          containerClassName="fade_bg"
        >
          <InviteForCreator />
        </SectionLayout>
        <SectionLayout
          className="bg-[url('/assets/Landing/dark_bg/trainstation.png')]"
          containerClassName="fade_bg"
        >
          <Networking />
        </SectionLayout>
        <SectionLayout
          className="bg-[url('/assets/Landing/dark_bg/replicate.png')]"
          containerClassName="fade_bg"
        >
          <Cre8orsWay />
        </SectionLayout>
        <SectionLayout
          className="bg-[url('/assets/Landing/dark_bg/path.png')]"
          containerClassName="fade_bg"
        >
          <Brands />
        </SectionLayout>
        <SectionLayout
          className="bg-[url('/assets/Landing/dark_bg/factory.png')]"
          containerClassName="fade_bg"
        >
          <OpenSoon />
        </SectionLayout>
        <Footer />
      </div>
    </Layout>
  )
}

export default LandingPage
