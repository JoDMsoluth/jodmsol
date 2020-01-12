import { Document } from "mongoose";
import UnifiedModel from "types/types";

export default interface CommentsDocument extends Document, UnifiedModel {
  author: string;
  content: string;
  targetId: string; // posts_id
  parent: string; // post_id or comment_id
  likes: number;
}
