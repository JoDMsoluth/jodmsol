import React from "react";
import AppLayoutContainer from "src/containers/common/AppLayoutContainer";
import BlogHeader from "src/components/common/header";
import BlogNavigation from "src/components/blog/navigation";
import PostsListContainer from "src/containers/blog/PostsListContainer";

const BlogPage = () => {
  return (
    <>
      <AppLayoutContainer>
        <BlogHeader desc="study" />
        <BlogNavigation />
        <PostsListContainer />
      </AppLayoutContainer>
    </>
  );
};

export default BlogPage;
