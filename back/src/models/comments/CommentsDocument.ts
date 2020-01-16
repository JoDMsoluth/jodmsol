import { Document } from "mongoose";
import { UnifiedModel } from "types/types.d";

export default interface SeriesDocument extends Document, UnifiedModel {
  userId: string;
  password: string;
  content: string;
  targetId: string; // posts_id
  parent: string; // post_id or comment_id
  likes: number;
}
