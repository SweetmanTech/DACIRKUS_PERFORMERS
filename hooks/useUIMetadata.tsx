import { useMemo } from "react"
import { useMediaQuery } from "usehooks-ts"

const useUiMetadata = (quantity) => {
  const isXl = useMediaQuery("(min-width: 1280px)")
  const isLg = useMediaQuery("(min-width: 1024px)")

  const uiMedatdata = useMemo(() => {
    if (isXl) {
      if (quantity === 5)
        return {
          imageWidth: 173,
          imagHeight: 180,
          scale: 0.3,
          leftOffset: -100,
          topOffset: -180,
        }
      if (quantity === 10)
        return {
          imageWidth: 114,
          imagHeight: 139,
          scale: 0.23,
          leftOffset: -110,
          topOffset: -210,
        }
      return {
        imageWidth: 84,
        imagHeight: 102,
        scale: 0.17,
        leftOffset: -180,
        topOffset: -205,
      }
    }

    if (isLg) {
      if (quantity === 5)
        return {
          imageWidth: 118,
          imagHeight: 145,
          scale: 0.3,
          leftOffset: -70,
          topOffset: -150,
        }
      if (quantity === 10)
        return {
          imageWidth: 91,
          imagHeight: 110,
          scale: 0.23,
          leftOffset: -95,
          topOffset: -165,
        }
      return {
        imageWidth: 67,
        imagHeight: 81,
        scale: 0.17,
        leftOffset: -145,
        topOffset: -165,
      }
    }

    if (quantity === 5)
      return {
        imageWidth: 89,
        imagHeight: 108,
        scale: 0.3,
        leftOffset: -50,
        topOffset: -110,
      }
    if (quantity === 10)
      return {
        imageWidth: 69,
        imagHeight: 83,
        scale: 0.23,
        leftOffset: -75,
        topOffset: -125,
      }
    return {
      imageWidth: 50,
      imagHeight: 61,
      scale: 0.17,
      leftOffset: -110,
      topOffset: -125,
    }
  }, [isLg, isXl, quantity])

  return uiMedatdata
}

export default useUiMetadata
