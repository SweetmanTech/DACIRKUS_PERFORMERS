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
    if (new Date(stageData.date).getTime() - new Date().getTime() > 0 || !stageData.date)
      setIsLocked(true)
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
      <a
        href={isLocked ? "/#" : stageData.link}
        target={isLocked ? "_self" : "_blank"}
        rel="noreferrer"
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
              className="font-[eigerdals] pl-3 text-white opacity-[0.3]
                xl:pl-8
                md:pl-6
                pl-2 
              "
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
                      left-0 top-0 z-[7] pointer-events-none"
            style={{
              boxShadow: isLocked || !stageData.date ? "inset 0px 0px 18px 5px" : "",
            }}
          >
            <div
              className="text-white uppercase px-3 pb-2 md:p-6 font-[quicksand] font-[650]"
              style={{
                fontSize: `${(28 / 1065) * imgWidth}px`,
              }}
            >
              {stageData.date ? stageData.label : "[REDACTED]"}
            </div>
          </div>
          <div
            className="absolute w-[100%] h-[100%] flex flex-col items-end justify-between
                      left-0 top-0 z-[5] p-3 md:p-6 pointer-events-none"
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
          <pre
            className="z-[4] w-[100%] h-[100%] absolute left-0 top-0 
            xl:pl-8 xl:pr-20 xl:py-8
            md:px-6 md:pt-6
            xs:px-3 xs:pt-3
            px-3 pt-3
            font-quicksand 
            text-[5px] xs:text-[6.5px] md:text-[13.5px] xl:text-[19px] 
            text-white hover:opacity-[1] opacity-0 
            rounded-[10px] md:rounded-[20px]
            hover:bg-gradient-to-r hover:from-[#000000cf] hover:via-[#00000080] hover:to-[#000000cf]
            bg-transparent
            transition duration-[200ms]"
          >
            <div className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">{stageData.text}</div>
          </pre>
        </div>
      </a>
    </div>
  )
}

export default Stage
