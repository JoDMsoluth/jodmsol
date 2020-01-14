import { Document } from "mongoose";
import UnifiedModel from "types/types";

export default interface PostDocument extends Document, UnifiedModel {
  title: string;
  markdown: string;
  tags: string[];
  series: string;
  category: string;
  likes: number;
}
