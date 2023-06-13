import { useState, useEffect } from "react"

import Image from "next/image"
import { useRouter } from "next/router"
import styles from "../../styles/Animation.module.css"
import { Button } from "../../shared/Button"

const EnterPage = () => {
  const [loaded, setLoaded] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true)
    }, 2000)
  }, [])

  return (
    <div className="w-screen min-h-screen bg-white">
      <div
        className={`
          min-h-screen w-screen items-center justify-center flex-col bg-white ${
            loaded ? "flex" : "hidden"
          }`}
      >
        <div
          className={`${styles.fade_in} font-bold text-[18px] md:text-[2rem] text-[black] uppercase font-quicksand`}
        >
          Cre·8·or • krē-ˈā-tər \ noun
        </div>
        <div
          className={`${styles.fade_in} text-[18px] md:text-[1.5rem] max-w-[450px] text-center uppercase font-quicksand`}
        >
          Someone that brings (something) NEW into existence.
        </div>
        <div className={`${styles.fade_in} pt-[40px]`}>
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
