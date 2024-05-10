import { useMemo } from "react"
import { zorbImageDataURI } from "@zoralabs/zorb"

const SWEETS = "0xcfBf34d385EA2d5Eb947063b67eA226dcDA3DC38"

const useZorbImage = (address) => {
  const zorbImage = useMemo(() => zorbImageDataURI(address || SWEETS), [address])

  return {
    zorbImage,
  }
}

export default useZorbImage
