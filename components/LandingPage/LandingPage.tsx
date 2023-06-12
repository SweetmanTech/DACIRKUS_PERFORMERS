import axios from "axios"
import { toast } from "react-toastify"
import { useState } from "react"
import { useWindowSize } from "usehooks-ts"
import dynamic from "next/dynamic"
import Brands from "./sections/Brands"
import AutoPerfectArea from "./AutoPerfectArea"
import LandingContent from "./LandingContent"
import Layout from "../Layout"

const SectionContainer = dynamic(() => import("./SectionContainer"), { ssr: false })

const LandingPage = () => {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const { width } = useWindowSize()

  const onChangeEmail = (e: any) => {
    setEmail(e.target.value)
  }

  const handleClick = async (e: any) => {
    e.preventDefault()
    await axios.post("/api/newsletter", { email })
    toast.success("Subscribed!")
    setEmail("")
    setIsSubscribed(true)
  }

  return (
    <Layout type="base">
      <AutoPerfectArea>
        <div className="relative">
          <div className="relative z-[1]">
            <div className="absolute left-0 top-0 backdrop-blur-[5.5px] z-[10] w-full h-full z-[10]" />
            <SectionContainer
              className="
                  dark:bg-[url('/assets/Landing/dark_bg/overlook.png')]
                  z-[5]
                "
              style={{
                backgroundSize:
                  width > 985 ? `${width}px ${Number((width / 1439) * 975).toFixed(2)}px` : "985px",
                height: width > 985 ? `${Number((width / 1439) * 975)}px` : "625px",
              }}
            />
            <SectionContainer
              className="
                dark:bg-[url('/assets/Landing/dark_bg/timessquare.png')] 
                dark:bg-[center_bottom]
                bg-cover 
                h-[799px] md:h-[972px]
                mt-[170px] md:mt-[0px]
                z-[4]
              "
            />
            <SectionContainer
              className="
                dark:bg-[url('/assets/Landing/dark_bg/trainstation.png')] 
                bg-[right_-50px_bottom] md:bg-[right_bottom]
              "
              style={{
                backgroundSize:
                  width > 985 ? `${width}px ${Number((width / 1439) * 975).toFixed(2)}px` : "985px",
                height: width > 985 ? `${Number((width / 1439) * 975)}px` : "625px",
                marginTop: width < 985 ? `245px` : `0px`,
              }}
            />
            <SectionContainer
              className={`dark:bg-[url('/assets/Landing/dark_bg/replicate.png')]
              `}
              style={{
                backgroundSize:
                  width > 985 ? `${width}px ${Number((width / 1439) * 973).toFixed(2)}px` : "985px",
                height: width > 985 ? `${Number((width / 1439) * 973)}px` : "665px",
                marginTop: width < 985 ? `338px` : `0px`,
              }}
            />
            <SectionContainer className="md:dark:bg-[url('/assets/Landing/dark_bg/path.png')] mt-[-1px]">
              <Brands className="opacity-0" />
            </SectionContainer>
            <SectionContainer
              className="
                    dark:bg-[url('/assets/Landing/dark_bg/factory.png')] 
                    bg-center 
                  "
              style={{
                backgroundSize:
                  width > 985
                    ? `${width}px ${Number((width / 1439) * 1079).toFixed(2)}px`
                    : "910px",
                height: width > 985 ? `${Number((width / 1439) * 1079)}px` : "625px",
                marginTop: width < 985 ? `-1px` : `0px`,
              }}
            />
          </div>
          <div className="absolute left-0 top-0 z-[2] w-full h-full">
            <LandingContent
              email={email}
              onChangeEmail={onChangeEmail}
              handleClick={handleClick}
              isSubscribed={isSubscribed}
            />
          </div>
        </div>
      </AutoPerfectArea>
    </Layout>
  )
}

export default LandingPage
