import { useEffect } from "react"

interface Props {
    ref: any
    isEnabled: boolean
}

const useShakeEffect = ({
    ref,
    isEnabled
}: Props) => {
    useEffect(() => {
        if(ref.current && isEnabled) {
            ref.current.addEventListener("click", () => {
                ref.current.style.animation = "shake 0.3s ease-in-out"

                setTimeout(() => {
                    ref.current.style.animation = ''
                }, 300)
            })
        }
    }, [isEnabled])
}

export default useShakeEffect