import { Schema, model, models, Model } from "mongoose"

interface Tweets {
  tweetID: string
  likes: string[]
  retweets: string[]
  lastProcessed?: Date
}
const TweetsSchema = new Schema<Tweets>({
  tweetID: {
    type: String,
    required: [true, "Please add a space id"],
  },
  likes: {
    type: [String],
    required: [true, "Please add array of likes"],
  },
  retweets: {
    type: [String],
    required: [true, "Please add array of retweets"],
  },
  lastProcessed: {
    type: Date,
    required: [false, "Please add a last processed timestamp"],
  },
})

export default (models.Tweets as Model<Tweets>) || model("Tweets", TweetsSchema)
