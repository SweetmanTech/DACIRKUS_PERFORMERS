import { STATUS } from "../../lib/bookStatus"
import { useAnimatedBook } from "../../providers/AnimatedBookProvider"
import Media from "../../shared/Media"

const HomeButton = ({ onClick }) => {
  const { setCurrentStatus } = useAnimatedBook() as any as any
  const backToHome = () => {
    setCurrentStatus(STATUS.CLOSE)
    onClick()
  }

  return (
    <button
      type="button"
      className="md:w-[39px] lg:w-[52px] xl:w-[65px] aspect-[1/1] border-[2px] border-black flex justify-center items-center
                  bg-[#626975] active:bg-[#4e545d] shadow-[inset_0px_-3px_0px_1px_#323840] active:shadow-[inset_none] rounded-[5px]"
      onClick={backToHome}
    >
      <Media
        type="image"
        link="/images/Buttons/home.png"
        blurLink="/images/Buttons/home.png"
        containerClasses="md:w-[30px] lg:w-[40px] xl:w-[50px] aspect-[1/1]"
      />
    </button>
  )
}

export default HomeButton
