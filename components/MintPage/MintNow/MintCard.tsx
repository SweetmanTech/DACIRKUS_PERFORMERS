import { FC } from "react"
import Link from "next/link"
import Media from "../../../shared/Media"

interface MintCardProps {
  clasName?: string
  label: string
  mintPrice: number
  desc: string
}

const MintCard: FC<MintCardProps> = ({ clasName, label, mintPrice, desc }) => (
  <div
    className={`relative w-[336px] h-[334px] rounded-[15px] 
            px-[20px] pt-[20px] pb-[40px]
            flex flex-col justify-between ${clasName}`}
  >
    <Link href="/faq" target="_self">
      <div className="absolute top-[10px] right-[10px] cursor-pointer">
        <Media
          link="/assets/Mint/MintNow/MintCard/help.png"
          type="image"
          containerClasses="w-[31px] h-[31px]"
        />
      </div>
    </Link>
    <div>
      <div className="text-[29px] font-bold font-quicksand">{label}</div>
      <div className="text-[59px] font-eigerdals font-bold">${mintPrice}</div>
    </div>
    <div className="flex items-center gap-x-[10px] justify-center">
      <Media
        link="/assets/Mint/MintNow/MintCard/tick.png"
        type="image"
        containerClasses="w-[33px] h-[33px]"
      />
      <div className="font-[700] font-quicksand text-[19px]">{desc}</div>
    </div>
    <div className="flex justify-center">
      <div
        className="hover:scale-[1.1] scale-[1] transition duration-[300ms] px-[28px] py-[11px] font-bold font-quicksand 
                        uppercase text-white dark:text-[black] rounded bg-[black] dark:bg-[white] 
                        shadow-[0px_4px_4px_rgb(0,0,0,0.25)] dark:shadow-[0px_4px_4px_rgb(255,255,255,0.25)]
                        flex items-center justify-center gap-[10px]
                        cursor-pointer"
      >
        <div className="flex gap-x-[20px]">
          <button type="button">-</button>
          QUANTITY
          <button type="button">+</button>
        </div>
      </div>
    </div>
  </div>
)

export default MintCard
