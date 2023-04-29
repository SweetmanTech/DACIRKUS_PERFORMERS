import { Schema, model, models, Model } from "mongoose"

interface Spaces {
  spaceId: string
  speakers: string[]
  participants: string[]
}
const SpacesSchema = new Schema<Spaces>({
  spaceId: {
    type: String,
    required: [true, "Please add a space id"],
  },
  speakers: {
    type: [String],
    required: [false, "Please add array of speakers"],
  },
  participants: {
    type: [String],
    required: [false, "Please add array of listeners"],
  },
})

export default (models.Spaces as Model<Spaces>) || model("Spaces", SpacesSchema)
