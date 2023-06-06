import * as React from "react"
import Container from "../Layout/Container"
import { useTheme } from "../../providers/ThemeProvider"
import useAutoPerfectCursor from "../../hooks/useAutoPerfectCursor"

interface LayoutProps {
  containerClassName?: string
  className?: string
  children: React.ReactNode
}

const SectionLayout: React.FC<LayoutProps> = ({ containerClassName, className, children }) => {
  const cursorRef = React.useRef(null)
  const darkImageRef = React.useRef(null)
  const whiteImageRef = React.useRef(null)
  const containerRef = React.useRef(null)

  const { themeMode } = useTheme()

  useAutoPerfectCursor({
    containerRef,
    cursorRef,
    imageRef: themeMode === "light" ? whiteImageRef : darkImageRef,
  })

  return (
    <div className={`${containerClassName} relative`} ref={containerRef}>
      <div
        ref={cursorRef}
        className="hidden rounded-full w-[122px] h-[122px] z-[30] absolute border-[1px] border-[black] dark:border-[white] pointer-events-none p-1"
      >
        <div className="border-[1px] border-[white] w-[100%] h-[100%] rounded-full" />
      </div>

      <div className={`relative ${className} bg-center bg-cover bg-no-repeat dark:!block hidden`}>
        <div
          ref={darkImageRef}
          className={`absolute ${className} bg-center bg-cover bg-no-repeat z-[5] w-full h-full opacity-[0]`}
        />
        <div className="relative z-[6]">
          <Container>{children}</Container>
        </div>
        <div className="absolute h-[100%] top-0 left-0 z-[4] w-full left-0 top-0 backdrop-blur-[7.5px] bg-[#12121252] shadow-[0_0_15px_5px_rgba(0,0,0)]">
          <div className="w-full shadow-[inset_0_0_15px_5px_rgba(0,0,0)]" />
        </div>
      </div>

      <div className="dark:hidden block">
        <div
          ref={whiteImageRef}
          className={`absolute ${className} bg-center bg-cover bg-no-repeat z-[5] w-full h-full opacity-[0]`}
        />
        <div className="relative z-[6]">
          <Container>{children}</Container>
        </div>
      </div>
    </div>
  )
}

export default SectionLayout
