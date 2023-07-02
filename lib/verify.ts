import axios from "axios"

const verify = async (tweetUrl: string) => {
  const response = await axios.post("/api/allowlist/verify", {
    tweetUrl,
  })
  return response?.data
}

export default verify
