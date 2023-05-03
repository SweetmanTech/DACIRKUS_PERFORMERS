import { Schema, model, models, Model } from "mongoose"

interface TeamMember {
  name: string
  role?: string
  favQuote?: string
  imgSrc?: string
  twitterHandle?: string
}

const TeamSchema = new Schema<TeamMember>({
  name: {
    type: String,
    required: [true, "Please add a name"],
  },
  role: {
    type: String,
    required: [true, "Please add a role"],
  },
  favQuote: {
    type: String,
    required: [false, "Please add a favorite quote"],
  },
  imgSrc: {
    type: String,
    required: [false, "Please add an image source"],
  },
  twitterHandle: {
    type: String,
    required: [false, "Please add a twitter handle"],
  },
})

export default (models.TeamMember as Model<TeamMember>) || model("TeamMember", TeamSchema)
