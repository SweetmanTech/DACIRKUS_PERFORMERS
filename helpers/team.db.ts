import dbConnect from "../utils/db"
import Team from "../Models/Team"

export interface TeamMember {
  name: string
  role?: string
  favQuote?: string
  imgSrc?: string
}
export const addTeamMember = async (body: TeamMember[]) => {
  try {
    await dbConnect()
    const result = await Team.insertMany(body)
    return { sucess: true, result }
  } catch (error) {
    throw new Error(error)
  }
}

export const getTeamMembers = async () => {
  try {
    await dbConnect()
    const result = await Team.find({}).lean()
    return result as any
  } catch (e) {
    throw new Error(e)
  }
}

export const getTeamMemberData = async () => {
  const data = await getTeamMembers()
  const mappedData = data.map((item) => ({
    name: item.name,
    role: item.role || null,
    favQuote: item.favQuote || null,
    imgSrc: item.imgSrc || null,
  }))
  return mappedData
}
