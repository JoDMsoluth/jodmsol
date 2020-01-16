import { Schema } from "mongoose";

const CommentsSchema: Schema = new Schema(
  {
    userId: String,
    password: String,
    content: String,
    targetId: String, // posts_id
    parent: String, // post_id or comment_id
    likes: Number
  },
  { timestamps: true }
);

export default CommentsSchema;
