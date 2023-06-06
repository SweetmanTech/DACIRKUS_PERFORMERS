import SectionTitle from "../SectionTitle"
import SectionContent from "../SectionContent"

import { Button } from "../../../shared/Button"
import FadeInImage from "../FadeInImage"

const OpenSoon = () => (
  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 gap-y-4 pt-[10rem] pb-[10rem] pb-[6rem]">
    <div className="flex justify-center block md:hidden mb-6">
      <FadeInImage url={'/assets/Landing/opensoon.png'} width={300} height={474}/>
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
          <Button id="welcome_reserve_btn">
            <a target="_blank" rel="noreferrer" href="http://reserve.cre8ors.com/">
              Reserve List
            </a>
          </Button>
        </div>
      </div>
    </div>
    <div className="justify-center hidden md:flex">
      <FadeInImage url={'/assets/Landing/opensoon.png'} width={590} height={931}/>
    </div>
  </div>
)

export default OpenSoon
