import mongoose from "mongoose";

const commentSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    text: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const postSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
  },
  text: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  likes: [{ user: { type: mongoose.Schema.Types.ObjectId } }],
  comments: [commentSchema],
  date: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model("Post", postSchema);

export default Post;
