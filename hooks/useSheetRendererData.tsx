import { createRef, useMemo, useRef } from "react"
import domtoimage from "dom-to-image"
import { uploadToIpfs } from "@/lib/ipfs"

const useSheetRendererData = () => {
  const singleSheetRef = useRef()

  const multipleSheetRefs = useMemo(() => {
    return Array.from({ length: 25 }).map(() => createRef())
  }, [])

  const uploadPfp = async (pfpRef) => {
    if (!pfpRef?.current) return ""
    try {
      const options = {
        quality: 1,
        scale: 2,
        style: {
          transform: "scale(2)",
          transformOrigin: "top left",
          width: `${pfpRef.current.offsetWidth}px`,
          height: `${pfpRef.current.offsetHeight}px`,
        },
        width: pfpRef.current.offsetWidth * 2,
        height: pfpRef.current.offsetHeight * 2,
      }

      const blob = await domtoimage.toBlob(pfpRef.current, options)
      const ipfsCid = await uploadToIpfs(blob)
      return ipfsCid
    } catch (error) {
      console.error("Error uploading PFP:", error)
      return ""
    }
  }

  const renderSingleSheet = async () => {
    const cid = await uploadPfp(singleSheetRef)
    return cid
  }

  const renderMultipleSheets = async (quantity) => {
    let cids = []
    let renderModuleCnt = 5

    for (let i = 0; i < quantity; i += renderModuleCnt) {
      const renderPromise = Array.from({ length: renderModuleCnt }).map(async (_, j) => {
        const cid = await uploadPfp(multipleSheetRefs[i + j])
        return cid
      })
      const groupCids = await Promise.all(renderPromise)
      cids = cids.concat(groupCids)
    }
    return cids
  }

  return {
    singleSheetRef,
    multipleSheetRefs,
    renderSingleSheet,
    renderMultipleSheets,
  }
}

export default useSheetRendererData
