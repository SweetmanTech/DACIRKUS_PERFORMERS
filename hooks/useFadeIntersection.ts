import * as React from 'react'

import { useTheme } from '../providers/ThemeProvider'

interface Props {
    ref: React.RefObject<HTMLDivElement>
}

const useFadeIntersection = ({
    ref
}: Props) => {
    const {
      themeMode
    } = useTheme()

    React.useEffect(() => {
        if(ref?.current) {
              const cb = (entries) => {
                entries.forEach(entry => {
                  if(entry.isIntersecting){
                    entry.target.classList.add('inview');
                  }else{
                    entry.target.classList.remove('inview');
                  }
                });
              }
              const io = new IntersectionObserver(cb);
              
              io.observe(ref.current)
        }
    }, [ref])

    React.useEffect(() => {
      if(ref?.current) {
        ref.current.classList.add('no_transition')
        setTimeout(() => {
          ref.current.classList.remove('no_transition')
        }, 1000)
      }
    }, [themeMode])
}

export default useFadeIntersection