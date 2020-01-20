import React from "react";
import BlogContentCard from "./ContentCard";

export default function BlogContentList({ posts }) {
  return (
    <>
      {posts.map &&
        posts.map(post => (
          <BlogContentCard key={`${post.title}.${post._id}`} post={post} />
        ))}
    </>
  );
}
