import { createHandler, Post, Body, ValidationPipe } from "next-api-decorators"
import { AdminAuthGuard } from "../../../../middleware/auth.middleware"
import { VerifyDTO } from "../../../../DTO/verify"

class Verify {
  @Post()
  @AdminAuthGuard()
  async updateStatus(@Body(ValidationPipe) body: VerifyDTO) {
    const { tweetUrl } = body
    console.log("SWEETS VERIFY", tweetUrl)
    return { data: true }
  }
}

export default createHandler(Verify)
