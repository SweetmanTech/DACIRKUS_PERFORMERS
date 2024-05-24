import { useEffect, useState } from "react"

const useCharacterAnimation = () => {
  const [currentFrame, setCurrentFrame] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prevIndex) => (prevIndex + 1) % 4)
    }, 400)

    return () => clearInterval(interval)
  }, [currentFrame])

  return {
    currentFrame,
  }
}

export default useCharacterAnimation
