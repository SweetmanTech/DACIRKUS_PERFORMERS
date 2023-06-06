import { useRef } from "react"
import useFadeIntersection from "../../hooks/useFadeIntersection"

interface SectionContentProps {
  children: React.ReactNode
}

const SectionContent: React.FC<SectionContentProps> = ({ children }) => {
  const ref = useRef()

  useFadeIntersection({
    ref,
  })

  return (
    <div
      ref={ref}
      className="appear m-6 md:mx-12 md:mb-12 md:mt-6 md:text-[18px] md:leading-[108.8%] font-medium text-center md:text-left font-quicksand text-[black] dark:text-[white] dark:drop-shadow-[0_4px_2px_rgba(0,0,0,0.75)]"
    >
      {children}
    </div>
  )
}

export default SectionContent
