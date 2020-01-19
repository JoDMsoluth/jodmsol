import React from "react";
import AppLayoutContainer from "containers/common/AppLayoutContainer";
import BlogHeader from "components/common/header";
import BlogNavigation from "components/blog/navigation/index";
import PostsListContainer from "containers/blog/PostsListContainer";
import LoadSeriesContainer from "containers/blog/LoadSeriesContainer";
import LoadTagsContainer from "containers/blog/LoadTagsContainer";

const BlogPage = ({ match }) => {
  const { filter } = match.params;
  return (
    <>
      <AppLayoutContainer>
        <BlogHeader />
        <BlogNavigation />
        {filter === "series" ? (
          <LoadSeriesContainer />
        ) : filter === "tags" ? (
          <LoadTagsContainer />
        ) : (
          <PostsListContainer />
        )}
      </AppLayoutContainer>
    </>
  );
};

export default BlogPage;
