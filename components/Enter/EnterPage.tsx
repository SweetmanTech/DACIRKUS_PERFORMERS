import { useState, useEffect, useRef } from "react"

import Image from "next/image"
import { useRouter } from "next/router"
import { useReadLocalStorage } from "usehooks-ts"
import { Button } from "../../shared/Button"
import useGradualFadeEffect from "../../hooks/useGradualFade"
import useFadeIntersection from "../../hooks/useFadeIntersection"

const EnterPage = () => {
  const [loaded, setLoaded] = useState(false)
  const router = useRouter()

  const isScrollUp = useReadLocalStorage<boolean>("isScrollUp")

  const titleRef = useRef()
  const contentRef = useRef()
  const buttonRef = useRef()

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
    isScrollUp,
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
          className="appear font-bold text-[16px] xs:text-[18px] md:text-[2rem] text-[black] uppercase font-quicksand"
          ref={titleRef}
        >
          Cre·8·or • krē-ˈā-tər \ noun
        </div>
        <div
          className="appear text-[16px] xs:text-[18px] md:text-[1.5rem] max-w-[326px] xs:max-w-[363px] md:max-w-[450px] text-center uppercase font-quicksand"
          ref={contentRef}
        >
          Someone that brings (something) NEW into existence.
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
    </div>
  )
}

export default EnterPage
