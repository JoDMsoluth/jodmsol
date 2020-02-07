import { Document } from "mongoose";

export default interface ViewsDocument extends Document {
  allViews: number;
  todayViews: number;
}
