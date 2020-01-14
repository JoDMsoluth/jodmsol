import React from "react";
import styled from "styled-components";
import BlogContentList from "./ContentList";

export default function BlogContent({ posts, postError, loading }) {
  if (postError) {
    console.log("post is not exist");
  }
  if (loading || !posts) {
    return null;
  }
  return (
    <>
      <ContentContainer>
        <BlogContentList posts={posts} />
      </ContentContainer>
    </>
  );
}

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width:100%
  padding: 0 8rem;
`;
