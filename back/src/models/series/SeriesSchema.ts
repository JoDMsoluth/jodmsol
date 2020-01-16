import { Schema } from "mongoose";

export const SeriesSchema: Schema = new Schema({
  title: String,
  desc: String,
  postNumber: Number
});
export default SeriesSchema;
