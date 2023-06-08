import { useRef } from "react"
import useFadeIntersection from "../../hooks/useFadeIntersection"

interface SectionTitleProps {
  text: string
  className?: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({ text, className }) => {
  const ref = useRef()

  useFadeIntersection({
    ref,
  })

  return (
    <div
      ref={ref}
      className={`appear m-6 md:mx-12 md:mt-12 md:mb-4 text-[36px] leading-[94.3%] md:text-[64px] md:leading-[85%] text-center font-eigerdals text-[black] dark:text-[white] dark:drop-shadow-[0_4px_2px_rgba(0,0,0,0.75)] ${
        className || ""
      }`}
    >
      {text}
    </div>
  )
}

export default SectionTitle
