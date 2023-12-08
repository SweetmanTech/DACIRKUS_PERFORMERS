import CharacterList from "../CharacterList"
import CreateDescription from "../CreateDescription"

const CharacterSelect = () => (
  <div className="w-full h-full grid grid-cols-2">
    <CreateDescription />
    <CharacterList />
  </div>
)

export default CharacterSelect
