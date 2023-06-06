import Image from "next/image"
import SectionTitle from "../SectionTitle"
import SectionContent from "../SectionContent"

import OpenSoonImage from "../../../public/assets/Landing/opensoon.png"
import { Button } from "../../../shared/Button"

const OpenSoon = () => {
  const goToReserveList = () => {
    window.open("http://reserve.cre8ors.com/", "_blank")
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 gap-y-4 pt-[10rem] pb-[10rem] pb-[6rem]">
      <div className="flex justify-center block md:hidden mb-6">
        <Image src={OpenSoonImage.src} width={300} height={474} alt="not found soon img" />
      </div>
      <div className="flex flex-col justify-center">
        <div>
          <SectionTitle text="Applications Open Soon" />
          <SectionContent>
            Allowlist applications open in July. <br />
            Reserve a Cre8ors Collective Passport today and secure your spot. For more info read the
            FAQ
          </SectionContent>
          <div className="m-6 lg:m-12 flex justify-center md:justify-start">
            <Button id="welcome_reserve_btn" onClick={goToReserveList}>
              Reserve list
            </Button>
          </div>
        </div>
      </div>
      <div className="justify-center hidden md:flex">
        <Image src={OpenSoonImage.src} width={590} height={931} alt="not found soon img" />
      </div>
    </div>
  )
}

export default OpenSoon
