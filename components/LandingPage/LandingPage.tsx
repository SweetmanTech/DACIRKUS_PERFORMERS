/* eslint-disable @typescript-eslint/no-unused-vars */
import Header from "../Header"
import SeoHead from "../SeoHead"
import Community from "./sections/Community"
import Content from "./sections/Content"

import Hero from "./sections/Hero"

const LandingPage = () => (
  <div className="h-screen overflow-y-auto text-black bg-white">
    <SeoHead title="Cre8ors" description="Cre8ors" image="/CRE8ORSLOGO_ICON.svg" />
    <Header />
    <Hero />
    <Content />
    <Community />
  </div>
)

export default LandingPage
