import { Schema } from "mongoose";

export const TagsSchema: Schema = new Schema(
  {
    tag: String,
    postNumber: Number
  },
  { timestamps: true }
);

export default TagsSchema;
