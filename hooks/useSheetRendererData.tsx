import { createRef, useMemo, useRef } from "react"
import domtoimage from "dom-to-image"
import { uploadFile } from "@/lib/uploadFile"

const useSheetRendererData = () => {
  const singleSheetRef = useRef()

  const multipleSheetRefs = useMemo(() => {
    return Array.from({ length: 25 }).map(() => createRef())
  }, [])

  const uploadPfp = async (pfpRef) => {
    if (!pfpRef?.current) return ""
    try {
      const blob = await domtoimage.toBlob(pfpRef.current)
      const fileName = "sheet.png"
      const fileType = "image/png"
      const sheetFile = new File([blob], fileName, { type: fileType })
      const { uri } = await uploadFile(sheetFile)
      console.log("ZIAD", uri)
      return uri
    } catch (error) {
      console.log("ZIAD", error)
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
