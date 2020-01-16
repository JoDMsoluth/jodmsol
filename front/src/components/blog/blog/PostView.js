import React from "react";
import styled from "styled-components";
import MarkdownRender from "components/common/markdown/MarkdownRender";
import palette from "lib/styles/palette";

export default function PostView({ post, postError, loading }) {
  if (postError) {
    console.log("post is not exist");
  }
  if (loading || !post) {
    return null;
  }

  const { title, markdown, tags } = post;
  return (
    <PostViewWrap>
      <PostViewTitle>{title}</PostViewTitle>
      <MarkdownRender markdown={markdown} />
      <PostViewTags>
        <span>{tags}</span>
      </PostViewTags>
    </PostViewWrap>
  );
}

const PostViewWrap = styled.div`
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
  font-size: 1.125rem;
`;
const PostViewTitle = styled.div`
  font-size: 2.5rem;
  font-weight: 300;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${palette.gray3};
`;
const PostViewTags = styled.div`
  font-size: 1rem;
  font-weight: 200;
  padding-top: 2rem;
  border-top: 1px solid ${palette.gray3};
  color: ${palette.teal8}
  & > span:hover {
      color: ${palette.teal6}
  }
`;
