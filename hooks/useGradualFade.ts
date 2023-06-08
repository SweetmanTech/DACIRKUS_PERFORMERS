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
                if(elements[i]?.type === 'self' && elements[i]?.domObject?.style) {
                    elements[i].domObject.style.transitionDelay = `${200 * (i + 1)}ms`;
                } else if(elements[i]?.type === 'child' && elements[i]?.domObject?.children) {
                    elements[i].domObject.children[0].style.transitionDelay = `${200 * (i + 1)}ms`;
                }
            }
        }
    }, [isScrollUp, elements])
}

export default useGradualFadeEffect