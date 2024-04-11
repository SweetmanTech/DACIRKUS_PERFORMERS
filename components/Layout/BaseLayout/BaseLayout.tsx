import React from "react"
import Media from "@/shared/Media"
import { ILayout } from "../types"

const BaseLayout = ({ children }: ILayout) => (
  <div className="w-screen h-screen">
    <div className="absolute z-[2] w-full h-full left-0 top-0">
      <Media
        type="image"
        link="/images/Layout/background-green.png"
        blurLink="/images/Layout/background-gree.png"
        containerClasses="w-full h-full"
        containerStyle={{
          imageRendering: "pixelated",
        }}
        imageClasses="!object-cover"
      />
    </div>
    <div
      className="relative z-[3] w-full h-full
    flex justify-center overflow-hidden"
    >
      {children}
    </div>
  </div>
)

export default BaseLayout
