import Image from "next/image"
import { FC, useRef } from "react"
import useFadeIntersection from "../../hooks/useFadeIntersection"

interface FadeInImageProps {
    url: string
    width: number
    height: number
}

const FadeInImage: FC<FadeInImageProps> = ({url, width, height}) => {
    const ref = useRef()

    useFadeIntersection({
        ref,
    })

    return (
        <div
            ref={ref}
            className="appear"
        >
            <Image src={url} width={width} height={height} alt="not found image" />
        </div>
    )
}

export default FadeInImage