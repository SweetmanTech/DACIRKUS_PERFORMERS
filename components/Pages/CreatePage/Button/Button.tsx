import Media from "../../../../shared/Media"

const Button = ({value, label}) => {
    return (
        <div className="flex gap-x-[10px] items-center">
            <button
                type="button"
                className="w-[35px] aspect-[1/1] border-[2px] border-black flex justify-center items-center
                bg-[#626975] active:bg-[#4e545d] shadow-[inset_0px_-3px_0px_1px_#323840] active:shadow-[inset_none] rounded-[5px]"
            >
                <Media
                    type="image"
                    link="/images/Buttons/random.png"
                    blurLink="/images/Buttons/random.png"
                    containerClasses="w-[29px] aspect-[1/1]"          
                />
            </button>

            <div className="flex min-w-[200px] justify-between items-center">
                <button
                    type="button"
                    className="w-[50px] aspect-[1/1] border-[2px] border-black flex justify-center items-center
                    bg-[#626975] active:bg-[#4e545d] shadow-[inset_0px_-3px_0px_1px_#323840] active:shadow-[inset_none] rounded-[5px]"
                >
                    <Media
                        type="image"
                        link="/images/Buttons/prev.png"
                        blurLink="/images/Buttons/prev.png"
                        containerClasses="w-[44px] aspect-[1/1]"          
                    />
                </button>
                <p className="text-[28px] font-slimfit text-white leading-[100%]">{label}</p>
                <button
                    type="button"
                    className="w-[50px] aspect-[1/1] border-[2px] border-black flex justify-center items-center
                    bg-[#626975] active:bg-[#4e545d] shadow-[inset_0px_-3px_0px_1px_#323840] active:shadow-[inset_none] rounded-[5px]"
                >
                    <Media
                        type="image"
                        link="/images/Buttons/next.png"
                        blurLink="/images/Buttons/next.png"
                        containerClasses="w-[44px] aspect-[1/1]"          
                    />
                </button>
            </div>
            <p className="text-white font-slimfit text-[20px]">{value}</p>
        </div>
    )
}

export default Button