import Header from "../Header"
import SeoHead from "../SeoHead"
import WelcomeToCre8ors from './sections/WelcomeToCre8ors'
import InviteForCreator from './sections/InviteForCreator'
import Networking from './sections/Networking'
import Cre8orsWay from './sections/Cre8orsWay'
import Brands from './sections/Brands'
import OpenSoon from './sections/OpenSoon'
import Footer from './sections/Footer'

const LandingPage = () => (
    <div className="h-screen overflow-y-auto text-black bg-white pt-[10rem]">
        <SeoHead title="Cre8ors" description="Cre8ors" image="/CRE8ORSLOGO_ICON.svg" />
        <Header />
        <WelcomeToCre8ors />
        <InviteForCreator />
        <Networking />
        <Cre8orsWay />
        <Brands />
        <OpenSoon />
        <Footer />
    </div>
)

export default LandingPage;