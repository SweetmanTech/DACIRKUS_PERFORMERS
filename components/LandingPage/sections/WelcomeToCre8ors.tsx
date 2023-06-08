import { useMediaQuery, useReadLocalStorage } from "usehooks-ts"
import { FC, useRef } from "react"
import SectionTitle from "../SectionTitle"
import SectionContent from "../SectionContent"

import { Button } from "../../../shared/Button"
import FadeInImage from "../FadeInImage"
import useFadeIntersection from "../../../hooks/useFadeIntersection"
import Input from "../../../shared/Input"
import Icon from "../../../shared/Icon"
import Avatar from "../../../shared/Avatar"
import AvatarGroup from "../../../shared/AvatarGroup"
import useGradualFadeEffect from "../../../hooks/useGradualFade"

interface Props {
  value: string
  onChange: (val: string) => void
}

const WelcomeToCre8ors: FC<Props> = ({ value, onChange }) => {
  const isScrollUp = useReadLocalStorage<boolean>("isScrollUp")

  const isMobile = useMediaQuery("(max-width: 490px)")
  const inputRef = useRef()
  const avatarsRef = useRef()
  const titleRef = useRef()
  const contentRef = useRef()
  const imageRef = useRef()

  useFadeIntersection({
    ref: inputRef,
  })

  useFadeIntersection({
    ref: avatarsRef,
  })

  useGradualFadeEffect({
    elements: [
      {
        domObject: avatarsRef.current,
        type: "self",
      },
      {
        domObject: inputRef.current,
        type: "self",
      },
      {
        domObject: contentRef.current,
        type: "child",
      },
      {
        domObject: titleRef.current,
        type: "child",
      },
      {
        domObject: imageRef.current,
        type: "child",
      },
    ],
    isScrollUp,
  })

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 gap-y-4 md:pt-[20rem] md:pb-[6rem]">
      <div className="md:hidden flex justify-center mb-6">
        <FadeInImage
          url="/assets/Landing/creativity.svg"
          width={226.65}
          height={476.86}
          className="!translate-y-[220px]"
        />
      </div>
      <div
        className="
        translate-y-[220px] 
        md:translate-y-[0px]
        flex flex-col items-center md:items-start 
        dark:bg-[black] bg-white md:!bg-transparent
        shadow-none dark:shadow-[0_0_10px_10px_rgba(0,0,0)] md:!shadow-none"
      >
        <div ref={titleRef}>
          <SectionTitle
            text="Welcome to the Next Generation of Creativity"
            className="w-[300px] md:w-[550px] md:text-left"
          />
        </div>
        <div ref={contentRef}>
          <SectionContent>
            {isMobile ? (
              <>
                Cre8ors is a next-gen media brand made <br />
                for the metaverse; powered by our curated collective of web3 creators, IP
                co-creation protocols and AI-enabled NFTs.
              </>
            ) : (
              <>
                Cre8ors is a next-gen media brand made for the metaverse; <br />
                powered by our curated collective of web3 creators, <br />
                IP co-creation protocols and AI-enabled NFTs.
              </>
            )}
          </SectionContent>
        </div>
        <div ref={inputRef} className="appear m-6 lg:mx-12 flex justify-center md:justify-start">
          <div className="w-[95%]">
            <Input
              endAdornment={
                <Button
                  id="subscribe_btn"
                  className="rounded-tl-[0px] rounded-bl-[0px] pl-[10px] pr-[10px]"
                >
                  Subscribe
                </Button>
              }
              startAdornment={<Icon name="email" raw color="gray" />}
              value={value}
              onChange={onChange}
            />
          </div>
        </div>
        <div
          ref={avatarsRef}
          className="md:ml-12 md:mt-3
            font-quicksand font-medium 
            flex items-center gap-x-[10px] 
            dark:text-white
            appear
          "
        >
          <AvatarGroup count={3}>
            <Avatar url="/assets/Landing/avatars/avatar_1.svg" />
            <Avatar url="/assets/Landing/avatars/avatar_2.svg" />
            <Avatar url="/assets/Landing/avatars/avatar_3.svg" />
          </AvatarGroup>
          <span className="text-[14px] text-[#916FE2] font-bold">Join 2K+</span> web3 creators.
        </div>
      </div>
      <div className="md:flex hidden justify-center" ref={imageRef}>
        <FadeInImage
          url="/assets/Landing/creativity.svg"
          width={319}
          height={671}
          className="!translate-y-[-170px]"
        />
      </div>
    </div>
  )
}

export default WelcomeToCre8ors
