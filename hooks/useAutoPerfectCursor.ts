import * as React from 'react'

interface Props {
    containerRef: React.RefObject<HTMLDivElement>,
    cursorRef: React.RefObject<HTMLDivElement>,
    clipRef: React.RefObject<HTMLImageElement>
}

const useAutoPerfectCursor = ({
    containerRef,
    cursorRef,
    clipRef
} : Props) => {
    const CURSOR_RADIUS = 150 / 2;

    const sign = (value: number) => {
        return value * -1
    }

    const animationEffect = (event: MouseEvent) => {
        if(cursorRef.current && clipRef.current) {
            const rect = containerRef.current.getBoundingClientRect()

            const x = event.clientX + rect.left - CURSOR_RADIUS
            const y = event.clientY + sign(rect.top) - CURSOR_RADIUS

            const clipX = event.clientX + rect.left
            const clipY = event.clientY + sign(rect.top)

            cursorRef.current.style.left = `${x}px`;
            cursorRef.current.style.top = `${y}px`;
            cursorRef.current.style.display = 'block';

            clipRef.current.style.clipPath = `circle(${CURSOR_RADIUS}px at ${clipX}px ${clipY}px)`;
            clipRef.current.style.opacity = `1`;
        }
    }

    const removeAllEventListener = () => {
        if(containerRef.current) {
            containerRef.current.removeEventListener('mousemove', () => {})
            containerRef.current.removeEventListener('mouseenter', () => {})
            containerRef.current.removeEventListener('mouseleave', () => {})
        }
    }

    React.useEffect(() => {
        if(cursorRef?.current && clipRef?.current && containerRef?.current) {
            removeAllEventListener()

            containerRef.current.addEventListener('mousemove', (event: MouseEvent) => {
                animationEffect(event)
            })

            containerRef.current.addEventListener('mouseenter', (event: MouseEvent) => {
                animationEffect(event)
            })

            containerRef.current.addEventListener('mouseleave', () => {
                if(cursorRef.current) {
                    cursorRef.current.style.display = 'none'

                    clipRef.current.style.clipPath = `none`
                    clipRef.current.style.opacity = '0'
                }
            })
        }
    }, [cursorRef, clipRef, containerRef])
}

export default useAutoPerfectCursor