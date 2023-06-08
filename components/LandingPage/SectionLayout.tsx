import * as React from "react"
import { useMediaQuery } from "usehooks-ts"
import Container from "../Layout/Container"
import { useTheme } from "../../providers/ThemeProvider"
import useAutoPerfectCursor from "../../hooks/useAutoPerfectCursor"

interface LayoutProps {
  containerClassName?: string
  className?: string
  children: React.ReactNode
  backgroundImage?: string
}

const SectionLayout: React.FC<LayoutProps> = ({
  containerClassName,
  className,
  children,
  backgroundImage,
}) => {
  const cursorRef = React.useRef(null)
  const clipRef = React.useRef(null)
  const containerRef = React.useRef(null)

  const isMobile = useMediaQuery("(max-width: 490px)")

  const { themeMode } = useTheme()

  useAutoPerfectCursor({
    containerRef,
    cursorRef: !isMobile && cursorRef,
    clipRef,
  })

  return (
    <div
      className={`${containerClassName} relative bg-white dark:bg-[black] border-none md:overflow-hidden`}
      ref={containerRef}
    >
      {!isMobile && (
        <div
          ref={cursorRef}
          className="hidden rounded-full w-[152px] h-[152px] z-[30] absolute border-[5px] border-[black] dark:border-[white] pointer-events-none p-1"
        />
      )}
      <div
        className={`relative bg-none ${className} md:dark:bg-center dark:bg-cover md:dark:bg-contain bg-no-repeat`}
      >
        <div
          ref={clipRef}
          className={`
              ${themeMode === "light" ? "dark_mode" : "light_mode"}
              ${backgroundImage}
                md:bg-center bg-cover md:bg-contain bg-no-repeat
                absolute
                z-[7] dark:z-[6]
                w-full h-full opacity-0
                hidden
                md:!block
            `}
        >
          <Container>{children}</Container>
        </div>
        <div className="relative z-[6]">
          <Container>{children}</Container>
        </div>
        <div className="hidden dark:block absolute h-[100%] top-0 left-0 z-[4] w-full left-0 top-0 backdrop-blur-[5.5px] bg-[#12121252] shadow-[0_0_15px_5px_rgba(0,0,0)]">
          <div className="w-full shadow-[inset_0_0_15px_5px_rgba(0,0,0)]" />
        </div>
      </div>
    </div>
  )
}

export default SectionLayout
