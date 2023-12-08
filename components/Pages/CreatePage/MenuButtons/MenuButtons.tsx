import Media from "../../../../shared/Media"
import MintButton from "../MintButton"

const MenuButtons = () => (
  <div
    className="flex items-center md:gap-x-[18px] lg:gap-x-[24px] xl:gap-x-[30px]
        md:px-[18px] lg:px-[24px] xl:px-[30px]"
  >
    <button
      type="button"
      className="md:w-[39px] lg:w-[52px] xl:w-[65px] aspect-[1/1] border-[2px] border-black flex justify-center items-center
                bg-[#626975] active:bg-[#4e545d] shadow-[inset_0px_-3px_0px_1px_#323840] active:shadow-[inset_none] rounded-[5px]"
    >
      <Media
        type="image"
        link="/images/Buttons/home.png"
        blurLink="/images/Buttons/home.png"
        containerClasses="md:w-[30px] lg:w-[40px] xl:w-[50px] aspect-[1/1]"
      />
    </button>
    <button
      type="button"
      className="md:w-[39px] lg:w-[52px] xl:w-[65px] aspect-[1/1] border-[2px] border-black flex justify-center items-center
                bg-[#626975] active:bg-[#4e545d] shadow-[inset_0px_-3px_0px_1px_#323840] active:shadow-[inset_none] rounded-[5px]"
    >
      <Media
        type="image"
        link="/images/Buttons/random.png"
        blurLink="/images/Buttons/random.png"
        containerClasses="md:w-[30px] lg:w-[40px] xl:w-[50px] aspect-[1/1]"
      />
    </button>
    <MintButton />
  </div>
)

export default MenuButtons
