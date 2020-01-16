import React from "react";
import AppLayoutContainer from "containers/common/AppLayoutContainer";
import PostViewContainer from "containers/blog/PostViewContainer";

export default function PostPage() {
  return (
    <>
      <AppLayoutContainer>
        <PostViewContainer />
      </AppLayoutContainer>
    </>
  );
}
