import axios from "axios"

const updateSpritesheet = async (tokenData) => {
  try {
    const response = axios.get(`/api/spritesheet`, {
      params: {
        tokenData: JSON.stringify(tokenData),
      },
    })

    return response
  } catch (error) {
    return { error }
  }
}

export default updateSpritesheet
