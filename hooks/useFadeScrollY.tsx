import * as React from 'react'
import { MotionValue } from 'framer-motion'

interface Props {
    scrollY: MotionValue<number>
}

const useFadeScrollY = ({ scrollY }: Props) => {
    React.useEffect(() => {
        if (scrollY) {
            scrollY.on('change', () => {
                let fade_bg_sections = document.querySelectorAll('.fade_bg')

                for (let i = 0; i < fade_bg_sections.length; i++) {
                    let section = fade_bg_sections[i]

                    if (section.getBoundingClientRect().top < window.innerHeight) {
                        section.classList.add('show')
                    } else {
                        section.classList.remove('show')
                    }
                }
            })
        }
    }, [scrollY])
}

export default useFadeScrollY