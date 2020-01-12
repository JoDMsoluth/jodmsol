import mongoose, { Model, Schema } from "mongoose";
import CommentsDocument from "./CommentsDocument.d";

export const CommentsSchema: Schema = new Schema(
  {
    author: String,
    content: String,
    targetId: String, // posts_id
    parent: String, // post_id or comment_id
    likes: Number
  },
  { timestamps: true }
);

const CommentsCollection: Model<CommentsDocument> = mongoose.model(
  "Comments",
  CommentsSchema
);

export default CommentsCollection;
