import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
  },
  text: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  likes: [{ user: { type: Schema.Types.ObjectId } }],
  comments: [
    {
      user: { type: Schema.Types.ObjectId },
      text: {
        type: String,
        required: true,
      },
      name: {
        type: String,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model("Post", postSchema);

export default Post;
