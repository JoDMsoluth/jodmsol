import React from "react";
import AppLayoutContainer from "containers/common/AppLayoutContainer";
import PostViewContainer from "containers/blog/PostViewContainer";
import CommentsListContainer from "containers/blog/CommentsListContainer";

export default function PostPage() {
  return (
    <>
      <AppLayoutContainer padding>
        <PostViewContainer />
        <CommentsListContainer />
      </AppLayoutContainer>
    </>
  );
}
