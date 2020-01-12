import mongoose, { Model, Schema } from "mongoose";
import PostDocument from "./PostDocument";

export const PostSchema: Schema = new Schema(
  {
    title: String,
    markdown: String,
    tags: String,
    likes: Number
  },
  { timestamps: true }
);

const PostCollection: Model<PostDocument> = mongoose.model("Post", PostSchema);

export default PostCollection;
