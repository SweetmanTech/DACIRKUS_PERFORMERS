import React from "react"
import { ILayout } from "./types"
import SeoHead from "../SeoHead"

function NoHeaderLayout({ children }: ILayout) {
  return (
    <div className="h-screen text-black bg-[black]">
      <SeoHead title="Cre8ors" description="Cre8ors" image="/CRE8ORSLOGO_ICON.svg" />
      <div className="relative z-[2]">{children}</div>
    </div>
  )
}

export default NoHeaderLayout
