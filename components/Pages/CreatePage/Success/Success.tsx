import WavyText from "../../../WavyText"
import SelectedAttributes from "../SelectedAttributes"
import SuccessButtons from "../SuccessButtons"

const Success = () => (
  <div className="w-full h-full grid grid-cols-2">
    <div />
    <div className="py-[30px] pl-[70px] pr-[30px]">
      <WavyText
        text="Welcome To"
        className="text-white text-[60px] font-slimfit leading-[100%] pb-[20px]"
      />
      <WavyText text="Da Cirkus" className="text-white text-[60px] font-slimfit leading-[100%]" />
      <p className="text-white font-slimfit text-[64px] drop-shadow-[2px_2px_2px_rgba(0,0,0,1)] text-right pt-[10px]">
        #0000
      </p>
      <SelectedAttributes />
      <SuccessButtons />
    </div>
  </div>
)

export default Success
