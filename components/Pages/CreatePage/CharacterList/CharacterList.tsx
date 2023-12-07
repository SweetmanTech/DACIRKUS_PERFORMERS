import WavyText from "../../../WavyText"
import CharacterItem from "../CharacterItem"

const CharacterList = () => (
  <div className="pl-[70px] pt-[60px] flex flex-col gap-y-[20px]">
    <CharacterItem type={1} label="Custom Character" />
    <CharacterItem type={5} label="Random Character" />
    <CharacterItem type={25} label="Random Character" />
    <CharacterItem type={100} label="Random Character" />
    <WavyText
      text={`"Whale's only"`}
      className="text-[#ca4343] drop-shadow-[2px_2px_2px_rgba(0,0,0,1)] font-slimfit text-[30px]"
    />
  </div>
)

export default CharacterList
