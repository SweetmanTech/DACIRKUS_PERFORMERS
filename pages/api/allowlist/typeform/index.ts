/* eslint-disable class-methods-use-this */
import { createHandler, Get, Query } from "next-api-decorators"

const getResponse = async (responseId) => {
  const headers = {
    Authorization: `Bearer ${process.env.TF_TOKEN_READ_RESPONSES}`,
  }
  const url = `https://api.typeform.com/forms/${process.env.NEXT_PUBLIC_TYPEFORM_ID}/responses`
  return fetch(`${url}?included_response_ids=${responseId}`, { headers })
}

const idToKey = {
  "7Q1OU08DnwDd": "walletAddress",
  ht0M1DEcNdDa: "reason",
  "4OB9BFA7WtRq": "twitterHandler",
  gRvt5M4h61ag: "outcomeChoice",
}

const fieldsOfInterest = Object.keys(idToKey)

const parseCre8orType = (outcome: { id: string; ref: string; title: string }) =>
  outcome.title.split("\n").pop()
class TypeformResponseHandler {
  @Get()
  async getResponse(@Query("responseId") responseId: string) {
    const response = await getResponse(responseId)
    const data = await response.json()
    const responsesOfInterest = data?.items[0].answers.filter((item) =>
      fieldsOfInterest.includes(item.field.id),
    )
    const responseData: {
      responseId?: string
      walletAddress?: string
      reason?: string
      twitterHandle?: string
      outcomeChoice?: string
      cre8or?: string
    } = {}
    responseData.responseId = responseId
    for (let i = 0; i < responsesOfInterest.length; i += 1) {
      const field = responsesOfInterest[i]
      responseData[idToKey[field.field.id]] = field?.choice?.label || field.text
    }
    const cre8or = parseCre8orType(data?.items[0]?.outcome)
    responseData.cre8or = cre8or

    return responseData
  }
}

export default createHandler(TypeformResponseHandler)
