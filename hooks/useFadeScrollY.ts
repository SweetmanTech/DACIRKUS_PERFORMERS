import { useEffect } from 'react'
import { MotionValue } from 'framer-motion'
import { useLocalStorage } from 'usehooks-ts'

interface Props {
    scrollY: MotionValue<number>
}

let prevScrollPos = 0

const useFadeScrollY = ({ scrollY }: Props) => {
    const [isScrollUp, setIsScrollUp] = useLocalStorage('isScrollUp', false)

    useEffect(() => {
        if (scrollY) {
            scrollY.on('change', () => {
                if(scrollY.get() > prevScrollPos) setIsScrollUp(true)
                else if(scrollY.get() < prevScrollPos) setIsScrollUp(false)
                
                prevScrollPos = scrollY.get()

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

    return {
        isScrollUp
    }
}

export default useFadeScrollY