import { useMediaQuery } from "usehooks-ts"
import Layout from "../Layout"

const AllowListStatusPage = () => {
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <Layout type="contained">
      <div
        className="relative w-[100%] min-h-[100vh]
                  pt-[150px] md:pt-[250px]
                  flex flex-col items-center gap-y-[20px] md:gap-y-[20px]"
      >
        <pre
          className="!m-0
                      font-eigerdals font-bold
                      w-[100%]
                      !text-[30px] samsungS8:!text-[35px] xs:!text-[40px] md:!text-[50px] lg:!text-[65px] mb-4
                      text-center text-black dark:text-white
                      leading-[94.3%] md:leading-[102.3%]"
        >
          {isMobile ? "Allowlist\nApplications Status" : "Allowlist Applications Status"}
        </pre>
        <div
          className="!m-0
                      font-quicksand font-medium
                      w-[100%]
                      !text-[19px]
                      text-black dark:text-white
                      text-center
                      leading-[99.3%]"
        >
          {isMobile ? (
            <>
              Make sure the same wallet you
              <br />
              applied with is connected
            </>
          ) : (
            "Make sure the same wallet you applied with is connected."
          )}
        </div>
        <div
          className="!m-0
                      pt-[100px]
                      font-quicksand font-bold
                      w-[100%] xs:w-[500px] md:w-[920px]
                      !text-[19px] mb-4
                      text-center 
                      text-black dark:text-white
                      leading-[99.3%]"
        >
          [APPLICATION UNDER REVIEW]
        </div>
      </div>
    </Layout>
  )
}

export default AllowListStatusPage
