import React from "react";
import AppLayoutContainer from "containers/common/AppLayoutContainer";
import PostViewContainer from "containers/blog/PostViewContainer";
import CommentsList from "components/blog/comments/CommentsList";

export default function PostPage() {
  return (
    <>
      <AppLayoutContainer padding>
        <PostViewContainer />
        <CommentsList />
      </AppLayoutContainer>
    </>
  );
}
