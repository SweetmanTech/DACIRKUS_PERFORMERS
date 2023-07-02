import verify from "../../lib/verify"
import { Button } from "../../shared/Button"

const VerifyButton = ({ tweet }: any) => {
  const handleClick = async () => {
    console.log("SWEETS CALL VERIFY API")
    const response = await verify(tweet)
    console.log("SWEETS RESPONSE VERIFY API", response)
  }

  return (
    <div className="grid gird-cols-1 md:grid-cols-2 gap-y-[20px] md:gap-x-[120px]">
      <div
        className="flex items-center
                    text-[15px] samsungS8:text-[19px]
                    justify-center md:justify-start
                    text-black dark:text-white
                    font-medium font-quicksand"
      >
        Step 3: Click Verify To Check Status
      </div>
      <div className="flex justify-center md:justify-start">
        {tweet && (
          <Button
            onClick={handleClick}
            id="verify_btn"
            className="!uppercase 
                            md:w-[291px] md:h-[46px]
                            w-[280px] h-[40px]"
          >
            Verify
          </Button>
        )}
      </div>
    </div>
  )
}

export default VerifyButton
