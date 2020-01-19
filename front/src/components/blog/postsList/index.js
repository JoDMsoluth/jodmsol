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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(3, 32rem);
  width:100%
  padding: 1rem 3rem 1rem 5rem;
`;
