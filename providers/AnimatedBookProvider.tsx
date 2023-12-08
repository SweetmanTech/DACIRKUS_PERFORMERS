import { createContext, useContext, useEffect, useMemo, useState } from "react"
import { STATUS } from "../lib/bookStatus";

const AnimatedBookContext = createContext(null)

const AnimatedBookProvider = ({ children }) => {
    const openFrames = [
        '/images/Book/Open/1.png',
        '/images/Book/Open/2.png',
        '/images/Book/Open/3.png',
        '/images/Book/Open/4.png',
        '/images/Book/Open/5.png',
        '/images/Book/Open/6.png',
    ];

    const leftFlipFrames = [
        '/images/Book/LeftFlip/1.png',
        '/images/Book/LeftFlip/2.png',
        '/images/Book/LeftFlip/3.png',
        '/images/Book/LeftFlip/4.png',
        '/images/Book/LeftFlip/5.png',
        '/images/Book/LeftFlip/6.png',
        '/images/Book/LeftFlip/7.png',
        '/images/Book/LeftFlip/8.png',
    ]

    const idleFrames = [
        '/images/Book/Open/1.png'
    ]

    const closeFrames = [
        '/images/Book/Close/1.png',
        '/images/Book/Close/2.png',
        '/images/Book/Close/3.png',
        '/images/Book/Close/4.png',
        '/images/Book/Close/5.png',
        '/images/Book/Close/6.png',
    ];

    const openedFrames = [
        '/images/Book/Opened/1.png',
    ]

    const frames = {
        "Idle": idleFrames,
        "Open": openFrames,
        "Close": closeFrames,
        "Opened": openedFrames,
        "LeftFlip": leftFlipFrames
    }
  
    
    const [currentFrame, setCurrentFrame] = useState(0);
    const [currentStatus, setCurrentStatus] = useState(STATUS.IDLE)

    const openBook = () => {
        setCurrentFrame(0)
        setCurrentStatus(STATUS.OPEN)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentFrame((prevIndex) => {
                if (prevIndex === frames[currentStatus].length - 1) {
                    clearInterval(interval)
                    if (currentStatus === STATUS.OPEN || currentStatus === STATUS.LEFTFLIP) {
                        setCurrentStatus(STATUS.OPENED)
                        return 0
                    }
                    if (currentStatus === STATUS.CLOSE) {
                        setCurrentStatus(STATUS.IDLE)
                        return 0
                    }
                    return prevIndex
                }
                return (prevIndex + 1) % frames[currentStatus].length
            });
        }, 200)

        return () => clearInterval(interval);
    }, [currentStatus]);
    
    const frameUrl = useMemo(() => {
        return `/images/Book/${currentStatus}/${currentFrame+1}.png`
    }, [currentFrame, currentStatus])

  const value = useMemo(() => ({
        currentFrame,
        frameUrl,
        currentStatus,
        setCurrentStatus,
        openBook
    }), 
    [
        currentFrame,
        frameUrl,
        currentStatus,
        openBook,
        setCurrentStatus
    ]
  )

  return <AnimatedBookContext.Provider value={value}>{children}</AnimatedBookContext.Provider>
}

export const useAnimatedBook = () => {
  const context = useContext(AnimatedBookContext)
  if (!context) {
    throw new Error("useAnimatedBook must be used within a AnimatedBookProvider")
  }
  return context
}

export default AnimatedBookProvider
