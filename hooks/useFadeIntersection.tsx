import * as React from 'react'

interface Props {
    ref: React.RefObject<HTMLDivElement>
}

const useFadeInstersection = ({
    ref
}: Props) => {

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
}

export default useFadeInstersection