import Image from "next/image"
import { useMediaQuery } from "usehooks-ts"
import SectionTitle from "../SectionTitle"
import SectionContent from "../SectionContent"

const InviteForCreator = () => {
  const match490 = useMediaQuery("(max-width: 490px)")

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 gap-y-4 pt-[10rem] pb-[6rem]">
      <div className="flex justify-center mb-6 md:mb-0">
        <Image
          src="/assets/Landing/invite.png"
          width={!match490 ? 511 : 280}
          height={!match490 ? 586 : 300}
          alt="not found invite img."
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
