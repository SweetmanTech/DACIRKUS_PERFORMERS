import { useMediaQuery } from "usehooks-ts"
import Layout from "../Layout"
import MintNow from "./MintNow"
import Cre8orsWay from "./Cre8orsWay"
import PFPs from "./PFPs"
import Archetypes from "./Archetypes"
import InHouse from "./InHouse"
import Collaborate from "./Collaborate"
import Footer from "../Footer"

const MintPage = () => {
  const isXl = useMediaQuery("(max-width: 1150px)")

  return (
    <Layout type="base">
      <div className="h-screen overflow-y-auto overflow-x-hidden">
        <MintNow />
        <Cre8orsWay />
        <PFPs />
        {!isXl && <Archetypes />}
        <InHouse />
        {isXl && <Archetypes />}
        {!isXl && <Collaborate />}
        <Footer className="pt-0" />
      </div>
    </Layout>
  )
}

export default MintPage
