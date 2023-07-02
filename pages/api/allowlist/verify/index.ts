import { createHandler, Post, Body, ValidationPipe } from "next-api-decorators"
import { TwitterApi } from "twitter-api-v2";
import { VerifyDTO } from "../../../../DTO/verify"

const client = new TwitterApi("AAAAAAAAAAAAAAAAAAAAADsdoQEAAAAArwFdQoPJWJM3R%2FExixXNvE3Dhuc%3D7gPdZobbOJnUnm1UeptYbNTHLlK77Vodvp2U2hrjn55wTrVp8P")

class Verify {
  @Post()
  async verify(@Body(ValidationPipe) body: VerifyDTO) {
    const { tweetUrl } = body
    const urlParts = tweetUrl.split("/")
    const urlIndex = urlParts.indexOf("twitter.com")
    const idIndex = urlParts.indexOf("status")
    const handle = urlParts[urlIndex + 1]
    let tweetId = urlParts[idIndex + 1]
    tweetId = tweetId.substring(0, tweetId.indexOf("?"))

    try {
      const readOnlyClient = client.readOnly
      console.log("READ ONLY", readOnlyClient)
      const data = await readOnlyClient.v2.singleTweet(tweetId)
      console.log("TWEET BODY", data)
      const tweetBody = data?.data?.text?.toLowerCase?.()
      console.log("SWEETS tweetBody", tweetBody)
      const isVerifiable = tweetBody.includes("Everything Corp Personality Quiz") || tweetBody.includes("cre8ors")
      console.log("SWEETS VERIFY", isVerifiable)
      console.log("SENDER", handle)
      // TODO: UPDATE TWEET SENDER IN DB WITH TWEET VERIFICATION: TRUE
      console.log("UPDATED IN DB", false)
      return { tweetUrl }
    } catch (err) {
      console.log("SWEETS ERROR")
      console.log(err)
      console.log("SWEETS ERROR")
      return { tweetUrl: false }
    }
  }
}

export default createHandler(Verify)
