import * as React from 'react'

interface Props {
    containerRef: React.RefObject<HTMLDivElement>,
    cursorRef: React.RefObject<HTMLDivElement>,
    imageRef: React.RefObject<HTMLImageElement>
}

const useAutoPerfectCursor = ({
    containerRef,
    cursorRef,
    imageRef
} : Props) => {
    const CURSOR_RADIUS = 120 / 2;

    const sign = (value: number) => {
        return value * -1
    }

    const animationEffect = (event: MouseEvent) => {
        const rect = containerRef.current.getBoundingClientRect()

        const x = event.clientX + rect.left - CURSOR_RADIUS
        const y = event.clientY + sign(rect.top) - CURSOR_RADIUS

        const clipX = event.clientX + rect.left
        const clipY = event.clientY + sign(rect.top)

        cursorRef.current.style.left = `${x}px`;
        cursorRef.current.style.top = `${y}px`;
        cursorRef.current.style.display = 'block';

        imageRef.current.style.clipPath = `circle(${CURSOR_RADIUS}px at ${clipX}px ${clipY}px)`;
        imageRef.current.style.opacity = `1`;
    }

    const removeAllEventListener = () => {
        if(containerRef.current) {
            containerRef.current.removeEventListener('mousemove', () => {})
            containerRef.current.removeEventListener('mouseenter', () => {})
            containerRef.current.removeEventListener('mouseleave', () => {})
        }
    }

    React.useEffect(() => {
        if(cursorRef?.current && imageRef?.current && containerRef?.current) {
            removeAllEventListener()

            containerRef.current.addEventListener('mousemove', (event: MouseEvent) => {
                animationEffect(event)
            })

            containerRef.current.addEventListener('mouseenter', (event: MouseEvent) => {
                animationEffect(event)
            })

            containerRef.current.addEventListener('mouseleave', () => {
                cursorRef.current.style.display = 'none'

                imageRef.current.style.clipPath = `none`
                imageRef.current.style.opacity = '0'
            })
        }
    }, [cursorRef, imageRef, containerRef])
}

export default useAutoPerfectCursor