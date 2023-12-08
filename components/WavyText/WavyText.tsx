import { FC } from "react"
import { motion } from "framer-motion"

interface Props {
  text: string
  className?: string
}

const WavyText: FC<Props> = ({ text, className }: Props) => {
  const letters = Array.from(text)

  return (
    <div className={`flex ${className || ""}`}>
      {letters.map((letter, i) => (
        <motion.span
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          initial={{
            y: 0,
          }}
          animate={{
            y: [0, 1.5, 3, 1.5, 0],
          }}
          transition={{
            delay: 0.1 * (i + 1),
            duration: 1,
            repeat: Infinity,
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </div>
  )
}

export default WavyText
