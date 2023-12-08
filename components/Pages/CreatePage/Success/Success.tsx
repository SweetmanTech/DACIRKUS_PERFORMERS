import WavyText from "../../../WavyText"
import SelectedAttributes from "../SelectedAttributes"
import SuccessButtons from "../SuccessButtons"

const Success = () => (
  <div className="w-full h-full grid grid-cols-2">
    <div />
    <div
      className="md:py-[18px] lg:py-[24px] xl:py-[30px] 
    md:pl-[42px] lg:pl-[56px] xl:pl-[70px] 
    md:pr-[18px] lg:pr-[24px] md:pr-[30px]"
    >
      <WavyText
        text="Welcome To"
        className="text-white md:text-[36px] lg:text-[48px] xl:text-[60px] font-slimfit leading-[100%] 
        md:pb-[12px] lg:pb-[16px] xl:pb-[20px]"
      />
      <WavyText
        text="Da Cirkus"
        className="text-white md:text-[36px] lg:text-[48px] xl:text-[60px] font-slimfit leading-[100%]"
      />
      <p
        className="text-white font-slimfit md:text-[38.4px] lg:text-[51.2px] xl:text-[64px] drop-shadow-[2px_2px_2px_rgba(0,0,0,1)] text-right 
      md:pt-[6px] lg:pt-[8px] xl:pt-[10px]"
      >
        #0000
      </p>
      <SelectedAttributes />
      <SuccessButtons />
    </div>
  </div>
)

export default Success
