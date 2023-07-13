import Layout from "../Layout"
import MintNow from "./MintNow"
import Cre8orsWay from "./Cre8orsWay"
import PFPs from "./PFPs"
import Archetypes from "./Archetypes"
import InHouse from "./InHouse"
import Collaborate from "./Collaborate"

const MintPage = () => (
  <Layout type="base">
    <div className="h-screen overflow-y-auto overflow-x-hidden">
      <MintNow />
      <Cre8orsWay />
      <PFPs />
      <Archetypes />
      <InHouse />
      <Collaborate />
    </div>
  </Layout>
)

export default MintPage
