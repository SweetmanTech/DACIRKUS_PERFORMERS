import React from "react"
import { ILayout } from "../types"

const BaseLayout = ({ children }: ILayout) => (
  <div
    className="w-screen h-screen bg-[url('/images/Layout/background.png')] bg-contain
    flex justify-center overflow-hidden"
  >
    {children}
  </div>
)

export default BaseLayout
