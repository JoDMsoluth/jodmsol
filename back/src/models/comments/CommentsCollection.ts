import { Schema, Model } from "mongoose";
import mongoose from "configs/mongodb";
import CommentsDocument from "./CommentsDocument";
import { number } from "joi";

const CommentsSchema: Schema = new Schema(
  {
    userId: String,
    password: String,
    content: String,
    childId: [{ type: mongoose.Schema.Types.ObjectId, ref: "ReComments" }],
    likes: Number
    // comment_id
  },
  { timestamps: true }
);

const CommentsCollection: Model<CommentsDocument> = mongoose.model(
  "Comments",
  CommentsSchema
);

export default CommentsCollection;
