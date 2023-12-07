import Media from "../../../../shared/Media"
import WavyText from "../../../WavyText"

const CreateDescription = () => (
  <div
    className="md:px-[18px] lg:px-[24px] xl:px-[30px] 
    md:py-[12px] lg:py-[16px] xl:py-[20px] 
    md:text-[12px] lg:text-[16px] xl:text-[20px] font-slimfit text-white"
  >
    <div
      className="flex justify-center 
      md:translate-y-[-12px] lg:translate-y-[-16px] xl:translate-y-[-20px]"
    >
      <Media
        type="image"
        link="/images/Create/logo.png"
        blurLink="/images/Create/logo.png"
        containerClasses="md:w-[120px] lg:w-[160px] xl:w-[200px] aspect-[1/1]"
      />
    </div>
    <div className="md:translate-y-[-42px] lg:translate-y-[-56px] xl:translate-y-[-70px] font-bold">
      <WavyText
        text="Da Performers"
        className="text-[#ca4343] xl:text-[54px] lg:text-[43.2px] md:text-[32.4px] drop-shadow-[2px_2px_2px_rgba(0,0,0,1)]"
      />
      <WavyText
        text="Casting call!!!"
        className="text-[#d0c000] xl:text-[36px] lg:text-[28.8px] md:text-[21.6px] drop-shadow-[2px_2px_2px_rgba(0,0,0,1)] flex justify-center"
      />
    </div>
    <div className="md:translate-y-[-36px] lg:translate-y-[-48px] xl:translate-y-[-60px]">
      We want you to join Da Cirkus!
      <br />
      -Customize your character
      <br />
      -Mint on ETH Blockchain
      <br />
      -Unlock PFP and Sprite Sheet
      <br />
      -Use your IP to plan your Performance
      <br />
      <br />
      Roadmap
      <br />
      -Impliment characters in games
      <br />
      -Impliment characters in animations
      <br />
    </div>
  </div>
)

export default CreateDescription
