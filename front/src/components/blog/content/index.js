import React from "react";
import styled from "styled-components";
import BlogContentList from "./ContentList";

export default function BlogContent() {
  return (
    <>
      <ContentContainer>
        <BlogContentList />
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
