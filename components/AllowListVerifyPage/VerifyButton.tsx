import { useState } from "react"
import Image from "next/image"
import { toast } from "react-toastify"
import { useRouter } from "next/router"
import verify from "../../lib/verify"
import { Button } from "../../shared/Button"
import handleTwitterVerificationError from "../../lib/handleTwitterVerificationError"

const VerifyButton = ({ tweet }: any) => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleVerificationError = (error: any) => {
    handleTwitterVerificationError(error)
  }

  const handleVerification = (response: any) => {
    if (response?.sucess) {
      toast.success("verified")
      router.push("/status")
      return
    }
    if (response?.err) {
      handleVerificationError(response?.err)
      return
    }

    toast.error("verification failed")
  }

  const handleClick = async () => {
    if (loading) return

    console.log("SWEETS CALL VERIFY API")
    // TODO: lookup if twitter 1. exists 2. already verified 3. twitter link
    setLoading(true)
    const response = await verify(tweet)
    console.log("SWEETS RESPONSE VERIFY API", response)
    handleVerification(response)
    setLoading(false)
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
            {loading ? (
              <Image
                src="/assets/Common/loading.svg"
                width={64}
                height={64}
                alt="not found image"
              />
            ) : (
              "Verify"
            )}
          </Button>
        )}
      </div>
    </div>
  )
}

export default VerifyButton
