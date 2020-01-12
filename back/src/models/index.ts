import { Model, Document } from "mongoose";

enum PostType {
  POSTS = "posts",
  COMMENT = "comments"
}

export default PostType;
