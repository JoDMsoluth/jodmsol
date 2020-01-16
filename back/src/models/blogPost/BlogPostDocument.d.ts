import { Document } from "mongoose";
import { PostModel } from "types/types.d";
import SeriesDocument from "models/series/SeriesDocument";
import TagsDocument from "models/tags/TagsDocument";
import CommentsDocument from "models/comments/CommentsDocument";

export default interface BlogPostDocument extends Document, PostModel {
  tags: TagsDocument[];
  series: SeriesDocument[];
  likes: number;
  comments: CommentsDocument[];
}
