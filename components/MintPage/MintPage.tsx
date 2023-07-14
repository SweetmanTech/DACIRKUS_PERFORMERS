import { useMediaQuery } from "usehooks-ts"
import { useEffect, useState } from "react"
import Image from "next/image"
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
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setInterval(() => {
      setLoaded(true)
    }, 5000)
  }, [])

  return (
    <Layout type="base">
      <div className="relative h-screen overflow-y-auto overflow-x-hidden">
        {!loaded && (
          <div className="fixed w-screen h-screen flex justify-center items-center z-[10] bg-[black]">
            <Image
              src="/assets/Common/loading.svg"
              width={200}
              height={200}
              alt="not found image"
            />
          </div>
        )}
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
