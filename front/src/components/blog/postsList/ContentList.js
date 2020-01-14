import React from "react";
import styled from "styled-components";
import BlogContentCard from "./ContentCard";
import coverImg from "statics/images/introBgCenter.png";

export default function BlogContentList({ posts }) {
  return (
    <>
      {posts.map(post => (
        <BlogContentCard key={posts._id} post={post} />
      ))}
    </>
  );
}
