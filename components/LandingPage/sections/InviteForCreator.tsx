import { useMediaQuery } from "usehooks-ts"
import SectionTitle from "../SectionTitle"
import SectionContent from "../SectionContent"
import FadeInImage from "../FadeInImage"

const InviteForCreator = () => {
  const isMobile = useMediaQuery("(max-width: 490px)")

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 gap-y-4 pt-[10rem] pb-[6rem]">
      <div className="flex justify-center mb-6 md:mb-0">
        <FadeInImage
          url="/assets/Landing/invite.svg"
          width={!isMobile ? 511 : 348.41}
          height={!isMobile ? 586 : 399.68}
          className="!translate-y-[340px] md:!translate-y-[0px]"
        />
      </div>
      <div
        className="
        flex flex-col justify-center items-center
        translate-y-[370px]
        md:translate-y-[0px]
        dark:bg-[black] bg-white md:!bg-transparent
        shadow-none dark:shadow-[0_0_10px_10px_rgba(0,0,0)] md:!shadow-none"
      >
        <SectionTitle
          text="An Invite-Only Community for Web3 Creators"
          className="md:text-right mb-4"
        />
        <SectionContent className={`${isMobile ? "w-[300px] mt-0" : "md:mt-2 md:text-right"}`}>
          {isMobile ? (
            <>
              Providing the resources and tools to <br /> help unlock creative potential and <br />
              financial freedom. We’re building the <br />
              best creator community on <br />
              the internet, together.
            </>
          ) : (
            <>
              Providing the network, resources and tools to help unleash your <br /> creative
              potential and financial freedom. We’re building the <br /> best creator community on
              the internet, together.
            </>
          )}
        </SectionContent>
      </div>
    </div>
  )
}

export default InviteForCreator
