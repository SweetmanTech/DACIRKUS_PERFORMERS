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
          url="/assets/Landing/invite.png"
          width={!isMobile ? 511 : 280}
          height={!isMobile ? 586 : 300}
        />
      </div>
      <div className="flex flex-col justify-center">
        <div>
          <SectionTitle text="An Invite-Only Community for Web3 Creators" />
          <SectionContent>
            Providing the resources and tools to help unlock creative potential and financial
            freedom. We’re building the best creator community on the internet, together.
          </SectionContent>
        </div>
      </div>
    </div>
  )
}

export default InviteForCreator
