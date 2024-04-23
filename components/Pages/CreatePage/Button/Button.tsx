import Media from "../../../../shared/Media"

const Button = ({ value, label, onNext, onPrev, onRandom }) => {
  const buttonClasses = `md:w-[29px] lg:w-[38px] xl:w-[48px] aspect-[1/1] border-[2px] border-black flex justify-center items-center
  bg-[#626975] active:bg-[#4e545d] shadow-[inset_0px_-3px_0px_1px_#323840] active:shadow-[inset_none] rounded-[5px]`
  const qButtonClasses = `md:w-[24px] lg:w-[32px] xl:w-[40px] aspect-[1/1] border-[2px] border-black flex justify-center items-center
  bg-[#626975] active:bg-[#4e545d] shadow-[inset_0px_-3px_0px_1px_#323840] active:shadow-[inset_none] rounded-[5px]`

  return (
    <div className="flex md:gap-x-[12px] lg:gap-x-[16px] xl:gap-x-[20px] items-center">
      <button type="button" className={qButtonClasses} onClick={onRandom}>
        <Media
          type="image"
          link="/images/Buttons/random.png"
          blurLink="/images/Buttons/random.png"
          containerClasses="md:w-[17.4px] lg:w-[23.2px]  xl:w-[29px] aspect-[1/1]"
        />
      </button>

      <div className="flex md:min-w-[120px] lg:min-w-[160px] xl:min-w-[200px] justify-between items-center">
        <button type="button" className={buttonClasses} onClick={onPrev}>
          <Media
            type="image"
            link="/images/Buttons/prev.png"
            blurLink="/images/Buttons/prev.png"
            containerClasses="md:w-[26.4px] lg:w-[35.2px] xl:w-[44px] aspect-[1/1]"
          />
        </button>
        <p className="md:text-[14.4px] lg:text-[19.2px] xl:text-[24px] font-slimfit text-white leading-[100%]">
          {label}
        </p>
        <button type="button" className={buttonClasses} onClick={onNext}>
          <Media
            type="image"
            link="/images/Buttons/next.png"
            blurLink="/images/Buttons/next.png"
            containerClasses="md:w-[26.4px] lg:w-[35.2px] xl:w-[44px] aspect-[1/1]"
          />
        </button>
      </div>
      <p className="text-white font-slimfit md:text-[10.8px] lg:text-[14.4px] xl:text-[18px]">
        {value}
      </p>
    </div>
  )
}

export default Button
