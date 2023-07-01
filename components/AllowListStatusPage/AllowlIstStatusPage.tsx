import SectionTitle from "../LandingPage/SectionTitle"
import Layout from "../Layout"

const AllowListStatusPage = () => (
  <Layout type="contained">
    <div
      className="relative w-[100%] min-h-[100vh]
                pt-[150px] md:pt-[200px]
                flex flex-col items-center gap-y-[40px] md:gap-y-[50px]
            "
    >
      <SectionTitle
        text="Allowlist Applications Status"
        className="!m-0
                    w-[100%] xs:w-[500px] md:w-[920px]
                    text-[25px] samsungS8:!text-[36px] xs:!text-[40px] md:!text-[65px] mb-4
                    text-center
                    md:leading-[102.3%]"
      />
    </div>
  </Layout>
)

export default AllowListStatusPage
