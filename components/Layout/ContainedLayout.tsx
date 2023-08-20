import React from "react"
import { useRouter } from "next/router"
import { ILayout } from "./types"
import SeoHead from "../SeoHead"
import Header from "../Header"
import Footer from "../Footer/Footer"

const ContainedLayout = ({ children }: ILayout) => {
  const router = useRouter()

  const seoText = router.pathname.includes("mint")
    ? "Minting Now."
    : "Welcome to the next generation of creativity."
  const seoLogo = router.pathname.includes("mint") ? "/v2-logo.png" : "/SEO_LOGO_ICON.png"

  return (
    <div className="min-h-[100vh] w-screen text-black bg-transparent dark:bg-[black] relative overflow-hidden">
      <div
        className="dark:hidden absolute left-0 top-[0px] z-[1]
          w-full h-[calc(100%+500px)]
          bg-[url('/assets/Layout/whitepaper.svg')] bg-cover bg-[center_center]"
      />
      <SeoHead title="Cre8ors" description={seoText} image={seoLogo} />
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
