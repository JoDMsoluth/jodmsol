import { Schema, Model } from "mongoose";
import mongoose from "configs/mongodb";
import ViewsDocument from "./ViewsDocument";

const ViewsSchema: Schema = new Schema(
  {
    allViews: Number,
    todayViews: Number
    // comment_id
  },
  { timestamps: true }
);

const ViewsCollection: Model<ViewsDocument> = mongoose.model(
  "Views",
  ViewsSchema
);

export default ViewsCollection;
