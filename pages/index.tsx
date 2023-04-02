/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next"
import SeoHead from "../components/SeoHead"

const Home: NextPage = () => (
  <div className="h-full overflow-y-auto text-white bg-black">
    <SeoHead title="Evil Corp" description="Evil Corp" image="/evclogoIcon.png" />
    Home Page
  </div>
)

export default Home
