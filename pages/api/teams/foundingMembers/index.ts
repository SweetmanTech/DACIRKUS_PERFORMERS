/* eslint-disable class-methods-use-this */
import { createHandler, Get } from "next-api-decorators"
import { getFoundingMembers } from "../../../../helpers/avatar.db"

class GetFoundingMembersData {
  @Get()
  async getFoundingMembersData() {
    const data = await getFoundingMembers()
    const mappedData = data.map((item) => ({
      twitterHandle: item.twitterHandle,
      profileImage: item.profileImage,
    }))
    return mappedData
  }
}

export default createHandler(GetFoundingMembersData)
