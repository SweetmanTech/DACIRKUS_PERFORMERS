import { useCreate } from "../../../../providers/CreateProvider"

const CharacterItem = ({ type, label, onClick }) => {
  const { setCharacterType } = useCreate() as any

  return (
    <div
      className="w-full items-center flex 
      md:gap-x-[12px] lg:gap-x-[16px] xl:gap-x-[20px]"
    >
      <button
        className="md:w-[54px] lg:w-[72px] xl:w-[90px] aspect-[1/1] bg-[#ca4343]
        shadow-[inset_0px_-3px_0px_2px_#8c2323] active:shadow-[inset_0_-1px_0px_2px_#a53434]
        rounded-[5px] border-[3px] border-black"
        type="button"
        onClick={() => {
          setCharacterType(type)
          onClick()
        }}
      >
        <p
          className="text-[white] drop-shadow-[2px_2px_2px_rgba(0,0,0,1)] font-slimfit 
          md:text-[25.2px] lg:text-[33.6px] xl:text-[42px]"
        >
          {type}
        </p>
      </button>
      <p
        className="text-[white] drop-shadow-[2px_2px_2px_rgba(0,0,0,1)] font-slimfit 
        md:text-[18px] lg:text-[24px] xl:text-[30px]"
      >
        {label}
      </p>
    </div>
  )
}

export default CharacterItem
