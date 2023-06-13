import { FC, ReactNode, useRef } from "react"
import { useMediaQuery } from "usehooks-ts"
import { useScroll } from "framer-motion"
import useAutoPerfectCursor from "../../hooks/useAutoPerfectCursor"
import Footer from "../Footer"

interface AutoPerfectAreaProps {
  children: ReactNode
}

const AutoPerfectArea: FC<AutoPerfectAreaProps> = ({ children }) => {
  const cursorRef = useRef(null)
  const clipRef = useRef(null)
  const containerRef = useRef(null)

  const isMobile = useMediaQuery("(max-width: 490px)")

  const { scrollY } = useScroll({ container: containerRef })

  useAutoPerfectCursor({
    containerRef,
    cursorRef: !isMobile && cursorRef,
    clipRef,
    scrollY,
  })

  return (
    <div className="relative h-[100vh] overflow-y-scroll overflow-x-hidden" ref={containerRef}>
      {!isMobile && (
        <div
          ref={cursorRef}
          className="
            hidden 
            rounded-full 
            w-[152px] h-[152px] z-[30] 
            absolute 
            border-[5px] border-[black] 
            dark:border-[white] 
            pointer-events-none p-1
          "
        />
      )}
      <div
        ref={clipRef}
        className={`
            absolute
            w-full
            z-[10] 
            top-0
            left-0
            opacity-0
            hidden
            md:!block
            h-[full]
            perfect_area
            z-[10]
            overflow-hidden
        `}
      >
        {children}
      </div>
      <div className="relative z-[6]">{children}</div>
      <Footer />
    </div>
  )
}

export default AutoPerfectArea
