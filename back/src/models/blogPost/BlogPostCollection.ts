import mongoose, { Model, Schema } from "mongoose";
import BlogPostDocument from "./BlogPostDocument";
import TagsSchema from "models/tags/TagsSchema";
import SeriesSchema from "models/series/SeriesSchema";
import CommentsSchema from "models/comments/CommentsSchema";

export const BlogPostSchema: Schema = new Schema(
  {
    coverImg: String,
    title: String,
    markdown: String,
    tags: [TagsSchema],
    series: [SeriesSchema],
    category: String,
    likes: Number,
    comments: [CommentsSchema]
  },
  { timestamps: true }
);

const BlogPostCollection: Model<BlogPostDocument> = mongoose.model(
  "BlogPost",
  BlogPostSchema
);

export default BlogPostCollection;
