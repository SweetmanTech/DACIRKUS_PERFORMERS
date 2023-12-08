import Media from "../../shared/Media"

const PlayButton = () => (
  <button
    type="button"
    className="md:w-[39px] lg:w-[52px] xl:w-[65px] aspect-[1/1] border-[2px] border-black flex justify-center items-center
                  bg-[#626975] active:bg-[#4e545d] shadow-[inset_0px_-3px_0px_1px_#323840] active:shadow-[inset_none] rounded-[5px]"
  >
    <Media
      type="image"
      link="/images/Buttons/play.png"
      blurLink="/images/Buttons/play.png"
      containerClasses="md:w-[30px] lg:w-[40px] xl:w-[50px] aspect-[1/1]"
    />
  </button>
)

export default PlayButton
