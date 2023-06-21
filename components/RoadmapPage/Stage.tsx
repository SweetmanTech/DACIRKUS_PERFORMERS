import { FC, useEffect, useState, useRef } from "react"
import Image from "next/image"
import { useMediaQuery } from "usehooks-ts"
import useShakeEffect from "../../hooks/useShakeEffect"
import { StageData } from "./types"

interface StageProps {
  stageData: StageData
  stageNumber: number
  slideWidth: number
  slideHeight: number
  imgWidth: number
  imgHeight: number
}

const Stage: FC<StageProps> = ({
  stageData,
  stageNumber,
  slideHeight,
  slideWidth,
  imgWidth,
  imgHeight,
}) => {
  const [isLocked, setIsLocked] = useState(false)
  const shakeRef = useRef()

  const isReponsive = useMediaQuery("(max-width: 1150px)")

  useShakeEffect({
    ref: shakeRef,
    isEnabled: isLocked || !stageData.date,
  })

  useEffect(() => {
    if (new Date(stageData.date).getTime() - new Date().getTime() > 0) setIsLocked(true)
  }, [stageData])

  return (
    <div
      className="relative
            cursor-grab flex justify-center items-center relative"
      style={{
        width: `${slideWidth}px`,
        height: `${slideHeight}px`,
      }}
    >
      <div
        className="relative z-[1] rounded-[10px] md:!rounded-[20px]
                [&>div]:rounded-[10px] [&>div]:md:!rounded-[20px]
                hover:scale-[1.02] transition duration-[500ms] shake"
        style={{
          backgroundImage: `url('${stageData.backImg}')`,
          boxShadow: isLocked || !stageData.date ? "0px 0px 8px 4px rgb(0, 0, 0)" : "",
          backgroundSize: `${imgWidth}px ${imgHeight}px`,
          width: `${imgWidth}px`,
          height: `${imgHeight}px`,
        }}
        ref={shakeRef}
      >
        {isLocked && (
          <div className="absolute w-[100%] h-[100%] backdrop-blur-[10px] top-0 left-0 z-[2]  pointer-events-none" />
        )}
        <div
          className="absolute w-[100%] h-[100%] z-[1] top-0 left-0
                    bg-gradient-to-r from-[#000000ed] via-[transparent] to-[#000000ed]"
        />
        <div className="absolute w-[100%] h-[100%] z-[1] top-0 left-0 z-[3]">
          <div
            className="font-[eigerdals] pl-[30px] text-white opacity-[0.3]"
            style={{
              fontSize: isReponsive ? `${(250 / 257) * imgHeight}px` : "250px",
              lineHeight: isReponsive ? `${(261 / 257) * imgHeight}px` : "261px",
            }}
          >
            {stageData.date ? stageNumber : "XX"}
          </div>
        </div>

        <div
          className="absolute w-[100%] h-[100%] flex items-end
                    left-0 top-0 z-[4]"
          style={{
            boxShadow: isLocked || !stageData.date ? "inset 0px 0px 18px 5px" : "",
          }}
        >
          <div
            className="text-white uppercase p-3 md:p-6 font-[quicksand] font-[650]"
            style={{
              fontSize: `${(28 / 1065) * imgWidth}px`,
            }}
          >
            {stageData.date ? stageData.label : "[REDACTED]"}
          </div>
        </div>
        <div
          className="absolute w-[100%] h-[100%] flex flex-col items-end justify-between
                    left-0 top-0 z-[5] p-3 md:p-6"
        >
          <Image
            src={
              isLocked || !stageData.date
                ? "/assets/Roadmap/lock.svg"
                : "/assets/Roadmap/unlock.svg"
            }
            width={
              isLocked || !stageData.date ? (36 / 1065) * slideWidth : (47.44 / 1065) * slideWidth
            }
            height={
              isLocked || !stageData.date ? (47.25 / 1065) * slideWidth : (46 / 1065) * slideWidth
            }
            alt="not found image"
          />
          <div
            className="font-[quicksand] text-white font-[700] uppercase"
            style={{
              fontSize: `${(28 / 1065) * imgWidth}px`,
            }}
          >
            {
              // eslint-disable-next-line no-nested-ternary
              stageData.date
                ? `${new Date(stageData.date).toLocaleDateString("en-US", { month: "long" })} ${
                      stageData.certain ? new Date(stageData.date).getDate() : ""
                    }`
                : "???????????"
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stage
