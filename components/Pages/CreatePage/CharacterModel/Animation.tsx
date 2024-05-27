import useCharacterAnimation from "@/hooks/useCharacterAnimation"
import CharacterModel from "./CharacterModel"

const Animation = () => {
  const { currentFrame } = useCharacterAnimation()

  return (
    <div
      className="absolute top-0 md:w-[279px] lg:w-[372px] xl:w-[465px] 
        md:h-[358.8px] lg:h-[478.4px] xl:h-[598px] overflow-hidden
        md:left-[-115.8px] lg:left-[-154.4px] xl:left-[-193px]"
    >
      {currentFrame === 0 && (
        <div
          className="absolute scale-[3.5] h-full w-full left-0 top-0
            md:translate-y-[510px] lg:translate-y-[680px] xl:translate-y-[850px] 
            md:translate-x-[258px] lg:translate-x-[344px] xl:translate-x-[430px]"
        >
          <CharacterModel isSingle />
        </div>
      )}
      {currentFrame === 1 && (
        <div
          className="absolute scale-[3.5] h-full w-full left-0 top-0
            md:translate-y-[510px] lg:translate-y-[680px] xl:translate-y-[850px] 
            md:translate-x-[100.8px] lg:translate-x-[134.4px] xl:translate-x-[168px]"
        >
          <CharacterModel isSingle />
        </div>
      )}
      {currentFrame === 2 && (
        <div
          className="absolute scale-[3.5] h-full w-full left-0 top-0
            md:translate-y-[510px] lg:translate-y-[680px] xl:translate-y-[850px] 
            md:translate-x-[-56.4px] lg:translate-x-[-75.2px] xl:translate-x-[-94px]"
        >
          <CharacterModel isSingle />
        </div>
      )}
      {currentFrame === 3 && (
        <div
          className="absolute scale-[3.5] h-full w-full left-0 top-0
            md:translate-y-[510px] lg:translate-y-[680px] xl:translate-y-[850px] 
            md:translate-x-[-214.2px] lg:translate-x-[-285.6px] xl:translate-x-[-357px]"
        >
          <CharacterModel isSingle />
        </div>
      )}
    </div>
  )
}

export default Animation
