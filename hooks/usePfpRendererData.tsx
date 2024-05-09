import { useRef } from "react"

const usePfpRendererData = () => {
    const singleRef = useRef()

    return {
        singleRef
    }
}

export default usePfpRendererData