import { motion, AnimatePresence } from "framer-motion"
import { STATUS } from "../../lib/bookStatus"
import { useAnimatedBook } from "../../providers/AnimatedBookProvider"

const AnimatedBook = ({ children }) => {
  const { currentFrame, frameUrl, currentStatus, openBook } = useAnimatedBook()

  return (
    <div className="relative flex items-center">
      <AnimatePresence>
        <motion.img
          src={frameUrl}
          alt={`Scene ${currentFrame}`}
          className="xl:w-[1280px] lg:w-[1024px] md:w-[768px] 
          xl:h-[966px] lg:h-[772.83px] md:h-[579.62px]"
        />
      </AnimatePresence>
      {currentStatus === STATUS.OPENED && (
        <div className="absolute z-[1] left-0 top-0 w-full h-full flex justify-center items-center">
          <div
            className="xl:w-[990px] lg:w-[792px] md:w-[594px] 
            xl:h-[600px] lg:h-[480px] md:h-[360px]
            md:translate-y-[21px] lg:translate-y-[28px] xl:translate-y-[35px]
            md:translate-x-[-15px] lg:translate-x-[-20px] xl:translate-x-[-25px]"
          >
            {children}
          </div>
        </div>
      )}
      {currentStatus === STATUS.IDLE && (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        <div
          className="absolute z-[1] left-0 top-0 w-full h-full flex justify-center items-center cursor-pointer"
          onClick={openBook}
        >
          <div
            className="xl:w-[480px] lg:w-[384px] md:w-[288px] 
            xl:h-[600px] lg:h-[480px] md:h-[360px]
            md:translate-y-[21px] lg:translate-y-[28px] xl:translate-y-[35px]"
          >
            {children}
          </div>
        </div>
      )}
    </div>
  )
}

export default AnimatedBook
