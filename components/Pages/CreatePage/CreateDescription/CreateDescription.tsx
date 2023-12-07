import Media from "../../../../shared/Media"
import WavyText from "../../../WavyText"

const CreateDescription = () => (
  <div className="px-[30px] py-[20px] text-[20px] font-slimfit text-white">
    <div className="flex justify-center translate-y-[-20px]">
      <Media
        type="image"
        link="/images/Create/logo.png"
        blurLink="/images/Create/logo.png"
        containerClasses="w-[200px] aspect-[1/1]"
      />
    </div>
    <div className="translate-y-[-70px] font-bold">
      <WavyText
        text="Da Performers"
        className="text-[#ca4343] text-[54px] drop-shadow-[2px_2px_2px_rgba(0,0,0,1)]"
      />
      <WavyText
        text="Casting call!!!"
        className="text-[#d0c000] text-[36px] drop-shadow-[2px_2px_2px_rgba(0,0,0,1)] flex justify-center"
      />
    </div>
    <div className="translate-y-[-60px]">
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
