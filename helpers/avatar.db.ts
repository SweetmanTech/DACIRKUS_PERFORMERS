import axios from "axios"
import dbConnect from "../utils/db"
import Avatars from "../Models/Avatars/Avatars"

export const addAvatar = async (body: {
  walletAddress: string
  twitterHandle: string
  profileImage?: string
  ensName?: string
  ensImage?: string
  foundingMember?: boolean
}) => {
  try {
    await dbConnect()
    const result = await Avatars.create(body)
    return { sucess: true, result }
  } catch (error) {
    throw new Error(error)
  }
}

export const getFoundingMembers = async () => {
  try {
    await dbConnect()
    const result = await Avatars.find({ foundingMember: true }).lean()
    return result as any
  } catch (e) {
    throw new Error(e)
  }
}

export const getFoundingMemberData = async () => {
  const data = await axios.get("/api/teams/foundingMembers")
  return data.data
}
