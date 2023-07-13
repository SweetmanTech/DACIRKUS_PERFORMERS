import { FC } from "react"
import Link from "next/link"
import Media from "../../../shared/Media"

interface MintCardProps {
  className?: string
  label: string
  mintPrice: number
  desc: string
}

const MintCard: FC<MintCardProps> = ({ className, label, mintPrice, desc }) => (
  <div
    className={`relative 
            w-[210px] h-[209px]
            xl:w-[336px] xl:h-[334px]
            rounded-[15px] 
            px-[20px] pt-[20px] pb-[20px] xl:pb-[40px]
            flex flex-col justify-between ${className}`}
  >
    <Link href="/faq" target="_self">
      <div className="absolute top-[10px] right-[10px] cursor-pointer">
        <Media
          link="/assets/Mint/MintNow/MintCard/help.png"
          type="image"
          containerClasses="w-[20px] h-[20px]
          xl:w-[31px] xl:h-[31px]"
        />
      </div>
    </Link>
    <div>
      <div
        className="text-[22px] xl:text-[29px] font-bold font-quicksand
      text-center xl:text-left leading-[103.3%] xl:leading-[150%]"
      >
        {label}
      </div>
      <div
        className="text-[46px] xl:text-[59px] font-eigerdals font-bold
      text-center xl:text-left leading-[120%] xl:leading-[150%]"
      >
        ${mintPrice}
      </div>
    </div>
    <div className="flex items-center gap-x-[10px] justify-center">
      <Media
        link="/assets/Mint/MintNow/MintCard/tick.png"
        type="image"
        containerClasses="xl:w-[33px] xl:h-[33px]
        w-[20px] h-[20px]"
      />
      <div
        className="font-[700] font-quicksand 
      text-[14px] xl:text-[19px]"
      >
        {desc}
      </div>
    </div>
    <div className="flex justify-center">
      <div
        className="hover:scale-[1.1] scale-[1] transition duration-[300ms] font-bold font-quicksand 
                        uppercase text-white dark:text-[black] rounded bg-[black] dark:bg-[white] 
                        shadow-[0px_4px_4px_rgb(0,0,0,0.25)] dark:shadow-[0px_4px_4px_rgb(255,255,255,0.25)]
                        flex items-center justify-center gap-[10px]
                        cursor-pointer
                        w-[102px] h-[27px] xl:w-[170px] xl:h-[45px]"
      >
        <div className="flex gap-x-[10px] xl:gap-x-[20px] text-[9px] xl:text-[15px]">
          <button type="button">-</button>
          QUANTITY
          <button type="button">+</button>
        </div>
      </div>
    </div>
  </div>
)

export default MintCard
