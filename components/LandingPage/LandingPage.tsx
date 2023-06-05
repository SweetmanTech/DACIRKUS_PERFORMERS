import Header from "../Header"
import SeoHead from "../SeoHead"
import WelcomeToCre8ors from "./sections/WelcomeToCre8ors"
import InviteForCreator from "./sections/InviteForCreator"
import Networking from "./sections/Networking"
import Cre8orsWay from "./sections/Cre8orsWay"
import Brands from "./sections/Brands"
import OpenSoon from "./sections/OpenSoon"
import Footer from "./sections/Footer"
import SectionLayout from "./SectionLayout"

const LandingPage = () => (
  <div className="h-screen overflow-y-auto text-black bg-white">
    <SeoHead title="Cre8ors" description="Cre8ors" image="/CRE8ORSLOGO_ICON.svg" />
    <Header />
    <SectionLayout className="bg-[url('/assets/Landing/dark_bg/overlook.png')]">
      <WelcomeToCre8ors />
    </SectionLayout>
    <SectionLayout className="bg-[url('/assets/Landing/dark_bg/timessquare.png')]">
      <InviteForCreator />
    </SectionLayout>
    <SectionLayout className="bg-[url('/assets/Landing/dark_bg/trainstation.png')]">
      <Networking />
    </SectionLayout>
    <SectionLayout className="bg-[url('/assets/Landing/dark_bg/replicate.png')]">
      <Cre8orsWay />
    </SectionLayout>
    <SectionLayout className="bg-[url('/assets/Landing/dark_bg/path.png')]">
      <Brands />
    </SectionLayout>
    <SectionLayout className="bg-[url('/assets/Landing/dark_bg/factory.png')]">
      <OpenSoon />
    </SectionLayout>
    <Footer />
  </div>
)

export default LandingPage
