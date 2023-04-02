/* eslint-disable class-methods-use-this */
import { createHandler, Post, Body } from "next-api-decorators"
import { AllowListAuthGuard } from "../../../../middleware/auth.middleware"
import { updateStatus } from "../../../../helpers/db"
import { UpdateStatusDTO } from "../../../../DTO/updateStatus.dto"

class UpdateStatus {
  @Post()
  @AllowListAuthGuard()
  async updateStatus(@Body() body: UpdateStatusDTO) {
    const { applicants, status } = body
    return updateStatus(applicants, status)
  }
}

export default createHandler(UpdateStatus)
