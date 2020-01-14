import React from "react";
import AppLayoutContainer from "src/containers/common/AppLayoutContainer";
import PostViewContainer from "src/containers/blog/PostViewContainer";

export default function PostPage() {
  return (
    <>
      <AppLayoutContainer>
        <PostViewContainer />
      </AppLayoutContainer>
    </>
  );
}
