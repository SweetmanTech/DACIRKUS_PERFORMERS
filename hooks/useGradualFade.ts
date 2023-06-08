import { useEffect } from 'react'

interface Props {
    elements: any[],
    isScrollUp: boolean
}

const useGradualFadeEffect = ({
    elements,
    isScrollUp
}: Props) => {

    useEffect(() => {
        if(!isScrollUp) {
            for(let i = 0 ; i < elements.length ; i++) {
                if(elements[i]?.style) {
                    console.log(elements[i])
                    console.log(elements[i])
                    elements[i].style.transitionDelay = `${1000 * (i + 1)}ms`;
                }
            }
        }
    }, [isScrollUp, elements])
}

export default useGradualFadeEffect