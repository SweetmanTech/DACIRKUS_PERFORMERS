import { useState, useEffect, useRef } from "react"

import Image from "next/image"
import { useRouter } from "next/router"
import { Button } from "../../shared/Button"
import useGradualFadeEffect from "../../hooks/useGradualFade"
import useFadeIntersection from "../../hooks/useFadeIntersection"
import Redeem from "../ClaimPage/Redeem"
import Popover from "../../shared/Popover"

const EnterPage = () => {
  const [loaded, setLoaded] = useState(false)
  const router = useRouter()

  const titleRef = useRef()
  const contentRef = useRef()
  const buttonRef = useRef()

  const currentTime = new Date().getTime()
  const shipDay = "30 Jun 2023 09:00:00 UTC"
  const alertEndDay = "2 Jul 2023 09:00:00 UTC"

  const shouldOpenModal =
    currentTime >= new Date(shipDay).getTime() && new Date(alertEndDay).getTime() >= currentTime

  useFadeIntersection({
    ref: titleRef,
  })

  useFadeIntersection({
    ref: contentRef,
  })

  useFadeIntersection({
    ref: buttonRef,
  })

  useGradualFadeEffect({
    elements: [
      {
        domObject: titleRef.current,
        type: "self",
      },
      {
        domObject: contentRef.current,
        type: "self",
      },
      {
        domObject: buttonRef.current,
        type: "self",
      },
    ],
    isScrollUp: false,
  })

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true)
    }, 2000)
  }, [])

  return (
    <div className="w-screen min-h-screen bg-white">
      <div
        className={`min-h-screen w-screen items-center justify-center flex-col bg-white ${
          loaded ? "flex" : "hidden"
        }`}
      >
        <div
          className="appear font-bold text-[16px] xs:text-[18px] md:text-[26px] text-[black] uppercase font-quicksand"
          ref={titleRef}
        >
          Cre·8·or • krē-ˈā-tər \ noun
        </div>
        <div
          className="appear 
            text-[16px] xs:text-[18px] md:text-[26px] 
            md:w-[611px] 
            text-center uppercase font-quicksand"
          ref={contentRef}
        >
          Someone that brings (something)
          <br /> NEW into existence.
        </div>
        <div className="appear pt-[40px]" ref={buttonRef}>
          <Button
            id="enter_btn"
            className="!bg-[black] !text-white !shadow-[0px_4px_4px_rgb(0,0,0,0.25)]"
            onClick={() => router.push("/home")}
          >
            ENTER
          </Button>
        </div>
      </div>
      <div
        className={`${loaded ? "hidden" : "flex"} items-center justify-center w-screen h-screen`}
      >
        <Image src="/assets/Common/loading.svg" width={64} height={64} alt="not found image" />
      </div>
      <Popover className="w-full" id="connect_popver_claim" open={shouldOpenModal}>
        <div />
        {({ toggleModal }) => <Redeem handleClose={toggleModal} />}
      </Popover>
    </div>
  )
}

export default EnterPage
