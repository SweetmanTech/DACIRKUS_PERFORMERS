import useCharacterAnimation from "@/hooks/useCharacterAnimation"
import CharacterModel from "./CharacterModel"

const Animation = () => {
  const { currentFrame } = useCharacterAnimation()

  const baseStyle = `
    absolute scale-[3.5] h-full w-full left-0 top-0
    md:translate-x-[100px] lg:translate-x-[134px] xl:translate-x-[168px]`

  const frames = [
    { id: "frame1", style: "md:translate-y-[500px] lg:translate-y-[670px] xl:translate-y-[840px]" },
    { id: "frame2", style: "md:translate-y-[510px] lg:translate-y-[680px] xl:translate-y-[850px]" },
    { id: "frame3", style: "md:translate-y-[520px] lg:translate-y-[690px] xl:translate-y-[860px]" },
    { id: "frame4", style: "md:translate-y-[530px] lg:translate-y-[700px] xl:translate-y-[870px]" },
  ]

  return (
    <div
      className="absolute md:w-[279px] lg:w-[372px] xl:w-[465px] z-50
        md:h-[358.8px] lg:h-[478.4px] xl:h-[598px] overflow-hidden
        md:left-[-115.8px] lg:left-[-154.4px] xl:left-[-193px]"
    >
      {frames.map(
        (frame) =>
          currentFrame === frames.indexOf(frame) && (
            <div className={`${baseStyle} ${frame.style}`} key={frame.id}>
              <CharacterModel isSingle />
            </div>
          ),
      )}
    </div>
  )
}

export default Animation
