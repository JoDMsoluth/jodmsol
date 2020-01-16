import { Document } from "mongoose";
import { UnifiedModel } from "types/types.d";

export default interface SeriesDocument extends Document, UnifiedModel {
  title: string;
  desc: string;
  postNumber: number;
}
