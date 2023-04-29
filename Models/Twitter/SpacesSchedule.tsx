import { Schema, model, models, Model } from "mongoose"

interface SpacesSchedule {
  spaceId: string
  status: string
  processed: boolean
}
const SpacesScheduleSchema = new Schema<SpacesSchedule>({
  spaceId: {
    type: String,
    required: [true, "Please add a space id"],
  },
  status: {
    type: String,
    required: [false, "Please add space status"],
  },
  processed: {
    type: Boolean,
    required: [false, "Please add space processed status"],
  },
})

export default (models.SpacesSchedule as Model<SpacesSchedule>) ||
  model("SpacesSchedule", SpacesScheduleSchema)
