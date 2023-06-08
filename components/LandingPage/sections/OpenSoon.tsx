import { useMediaQuery } from "usehooks-ts"
import { useRef } from "react"
import SectionTitle from "../SectionTitle"
import SectionContent from "../SectionContent"

import { Button } from "../../../shared/Button"
import FadeInImage from "../FadeInImage"
import useFadeIntersection from "../../../hooks/useFadeIntersection"

const OpenSoon = () => {
  const isMobile = useMediaQuery("(max-width: 490px)")

  const ref = useRef()

  useFadeIntersection({
    ref,
  })

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-5 gap-y-4 pt-[60px] pb-[25px]">
      <div className="flex justify-center block md:hidden mb-6">
        <FadeInImage
          url="/assets/Landing/mobile_opensoon.png"
          width={279}
          height={542.31}
          className="!translate-y-[350px]"
        />
      </div>
      <div
        className="
        col-span-2 flex flex-col items-center md:items-start 
        pt-0 pb-[6rem] md:pt-[13rem]
        translate-y-[350px] 
        md:translate-y-[0px]
        flex flex-col items-center md:items-start 
        dark:bg-[black] bg-white md:!bg-transparent
        shadow-none dark:shadow-[0_0_10px_10px_rgba(0,0,0)] md:!shadow-none
      "
      >
        <SectionTitle
          text="Applications Open Soon"
          className="w-[220px] md:w-[350px] leading-[105%] mb-0 md:text-left md:leading-[100%]"
        />
        <SectionContent>
          {isMobile ? (
            <>
              Allowlist applications open in July. Reserve <br /> a Cre8ors Collective Passport
              today and secure your spot.{" "}
              <a href="/faq" target="_blank" style={{ textDecoration: "underline" }}>
                For more info read the FAQ
              </a>
            </>
          ) : (
            <>
              Allowlist applications open in July. Reserve <br /> a Cre8ors Collective Passport
              today and <br />
              secure your spot.{" "}
              <a href="/faq" target="_blank" style={{ textDecoration: "underline" }}>
                For more info read the FAQ
              </a>
            </>
          )}
        </SectionContent>
        <div ref={ref} className="appear lg:mx-12 flex justify-center md:justify-start">
          <Button id="welcome_reserve_btn" className={`w-[242px] ${isMobile && "py-[8px]"}`}>
            <a target="_blank" rel="noreferrer" href="http://reserve.cre8ors.com/">
              Reserve List
            </a>
          </Button>
        </div>
      </div>
      <div className="col-span-3 justify-center hidden md:flex pl-[30px]">
        <FadeInImage
          url="/assets/Landing/opensoon.png"
          width={590}
          height={931}
          className="!translate-x-[-30px] !translate-y-[50px]"
        />
      </div>
    </div>
  )
}

export default OpenSoon
