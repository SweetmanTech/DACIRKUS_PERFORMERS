import { motion, AnimatePresence } from "framer-motion"
import { STATUS } from "../../lib/bookStatus"
import { useAnimatedBook } from "../../providers/AnimatedBookProvider"

const AnimatedBook = ({ children }) => {
  const { currentFrame, frameUrl, currentStatus, openBook } = useAnimatedBook()

  return (
    <div className="relative">
      <AnimatePresence>
        <motion.img
          key={currentFrame}
          src={frameUrl}
          alt={`Scene ${currentFrame}`}
          className="xl:w-[1280px] lg:w-[1024px] md:w-[768px] aspect-[848/640]"
        />
      </AnimatePresence>
      {currentStatus === STATUS.OPENED && (
        <div className="absolute z-[1] left-0 top-0 w-full h-full flex justify-center">
          <div
            className="xl:w-[990px] lg:w-[792px] md:w-[594px] 
            xl:h-[600px] lg:h-[480px] md:h-[360px] 
            xl:translate-y-[220px] lg:translate-y-[176px] md:translate-y-[132px] 
            xl:translate-x-[-25px] lg:translate-x-[-20px] md:translate-x-[-15px]"
          >
            {children}
          </div>
        </div>
      )}
      {currentStatus === STATUS.IDLE && (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        <div
          className="absolute z-[1] left-0 top-0 w-full h-full flex justify-center cursor-pointer"
          onClick={openBook}
        >
          <div
            className="xl:w-[480px] lg:w-[384px] md:w-[288px] 
            xl:h-[600px] lg:h-[480px] md:h-[360px] 
            xl:translate-y-[220px] lg:translate-y-[176px] md:translate-y-[132px] 
            xl:translate-x-[10px] lg:translate-x-[8px] md:translate-x-[6px]"
          >
            {children}
          </div>
        </div>
      )}
    </div>
  )
}

export default AnimatedBook
