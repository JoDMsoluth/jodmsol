import React from "react";
import AppLayoutContainer from "containers/common/AppLayoutContainer";
import BlogHeader from "components/common/header";
import PostsListContainer from "containers/blog/PostsListContainer";
import PaginationContainer from "containers/common/PaginationContainer";
import BlogNavigation from "components/blog/navigation/index";

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
