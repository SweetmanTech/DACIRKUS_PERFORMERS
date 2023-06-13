import React from "react"
import Image from "next/image"
import { useWindowSize } from "usehooks-ts"
import { ILayout } from "./types"
import SeoHead from "../SeoHead"
import Header from "../Header"
import Footer from "../Footer/Footer"

function ContainedLayout({ children }: ILayout) {
  const { width } = useWindowSize()

  return (
    <div
      className="min-h-[100vh] w-screen text-black bg-transparent dark:bg-[black] relative overflow-hidden
    "
    >
      <div
        className="
        dark:hidden absolute left-0 top-[0px] z-[1]
      "
      >
        <Image
          src="/assets/Layout/whitepaper.svg"
          width={width}
          height={(width / 1444) * 6175}
          alt="not found image"
        />
      </div>
      <SeoHead title="Cre8ors" description="Cre8ors" image="/CRE8ORSLOGO_ICON.svg" />
      <Header />
      <div className="flex justify-center relative z-[2]">
        <div className="md:w-[1280px] relative">{children}</div>
      </div>
      <div className="relative z-[3]">
        <Footer className="!pt-6" />
      </div>
    </div>
  )
}

export default ContainedLayout
