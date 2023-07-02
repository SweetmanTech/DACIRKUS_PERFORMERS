import { useRouter } from "next/router"
import { toast } from "react-toastify"
import handleTwitterVerificationError from "../lib/handleTwitterVerificationError"
import verifyTweetUrl from "../lib/verifyTweetUrl"

const useTwitterVerification = () => {
  const router = useRouter()

  const handleVerification = (response: any) => {
    if (response?.sucess) {
      toast.success("verified")
      router.push("/status")
      return
    }
    if (response?.err) {
      handleTwitterVerificationError(response?.err)
      return
    }

    toast.error("verification failed")
  }

  const verify = async (tweet: string) => {
    // TODO: lookup if twitter 1. exists 2. already verified 3. twitter link
    const response = await verifyTweetUrl(tweet)
    console.log("SWEETS RESPONSE VERIFY API", response)
    handleVerification(response)
  }

  return {
    verify,
  }
}

export default useTwitterVerification
