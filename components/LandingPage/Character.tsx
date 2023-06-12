import { FC, useEffect, useState } from "react"

import FadeInImage from "./FadeInImage"

interface CharacterProps {
  screenWidth: number
  bgImgWidth: number
  bgImgHeight: number
  offsetX: number
  offsetY: number
  characterWidth: number
  characterHeight: number
  characterRef?: any
  characterUrl: string
  xDirection: "left" | "right"
  yDirection: "top" | "bottom"
  responsive: number
}

const Character: FC<CharacterProps> = ({
  screenWidth,
  bgImgWidth,
  bgImgHeight,
  offsetX,
  offsetY,
  characterWidth,
  characterHeight,
  characterRef,
  characterUrl,
  xDirection,
  yDirection,
  responsive,
}) => {
  const [style, setStyle] = useState<any>()

  useEffect(() => {
    if (xDirection && yDirection) {
      const temp = {
        left: ``,
        right: ``,
        bottom: ``,
        top: ``,
      }

      temp[`${xDirection}`] = `${(screenWidth < responsive ? bgImgWidth : screenWidth) * offsetX}px`
      temp[`${yDirection}`] = `${
        screenWidth < responsive
          ? bgImgHeight * offsetY
          : ((screenWidth * bgImgHeight) / bgImgWidth) * offsetY
      }px`

      setStyle({ ...temp })
    }
  }, [xDirection, yDirection, screenWidth, bgImgHeight, bgImgWidth, offsetX, offsetY, responsive])

  return (
    <div
      className={`
            md:block hidden absolute
            z-[11]
            pointer-events-none
          `}
      style={{
        display: screenWidth < responsive ? "none" : "block",
        ...style,
      }}
      ref={characterRef}
    >
      <FadeInImage
        url={characterUrl}
        width={
          screenWidth < responsive ? characterWidth : (characterWidth * screenWidth) / bgImgWidth
        }
        height={
          screenWidth < responsive ? characterHeight : (characterHeight * screenWidth) / bgImgWidth
        }
      />
    </div>
  )
}

export default Character
