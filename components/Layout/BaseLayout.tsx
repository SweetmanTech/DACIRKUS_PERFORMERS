import React from "react"
import { ILayout } from "./types"
import SeoHead from "../SeoHead"
import Header from "../Header"

function BaseLayout({ children }: ILayout) {
  return (
    <div className="h-screen text-black bg-[black]">
      <SeoHead title="Cre8ors" description="Cre8ors" image="/CRE8ORSLOGO_ICON.svg" />
      <Header />
      <div className="relative z-[2]">{children}</div>
    </div>
  )
}

BaseLayout.defaultProps = {
  hasFooter: true
}
export default BaseLayout
