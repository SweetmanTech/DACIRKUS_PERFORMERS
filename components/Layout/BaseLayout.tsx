import React from "react"
import { ILayout } from "./types"
import SeoHead from "../SeoHead"
import Header from "../Header"

function BaseLayout({ children }: ILayout) {
  return (
    <div className="h-screen text-black bg-white">
      <SeoHead title="Cre8ors" description="Cre8ors" image="/CRE8ORSLOGO_ICON.svg" />
      <Header />
      {children}
    </div>
  )
}

export default BaseLayout
