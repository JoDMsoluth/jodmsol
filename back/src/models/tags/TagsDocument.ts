import { Document } from "mongoose";
import { UnifiedModel } from "types/types.d";

export default interface SeriesDocument extends Document, UnifiedModel {
  tag: string;
  postNumber: number;
}
