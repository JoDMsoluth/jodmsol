import React from "react";
import AppLayoutContainer from "src/containers/common/AppLayoutContainer";
import BlogHeader from "src/components/common/header";
import BlogNavigation from "src/components/blog/navigation";
import PostsListContainer from "src/containers/blog/PostsListContainer";
import PaginationContainer from "src/containers/common/PaginationContainer";

const BlogPage = () => {
  return (
    <>
      <AppLayoutContainer>
        <BlogHeader desc="study" />
        <BlogNavigation />
        <PostsListContainer />
        <PaginationContainer />
      </AppLayoutContainer>
    </>
  );
};

export default BlogPage;
