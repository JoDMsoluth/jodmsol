import React from 'react';
import AppLayoutContainer from 'containers/common/AppLayoutContainer';

import BlogNavigation from 'components/blog/navigation/index';
import PostsListContainer from 'containers/blog/PostsListContainer';
import LoadSeriesContainer from 'containers/blog/LoadSeriesContainer';
import LoadTagsContainer from 'containers/blog/LoadTagsContainer';
import BlogHeaderContainer from 'containers/common/BlogHeaderContainer';
import { useRouteMatch } from 'react-router-dom';

const BlogPage = () => {
  const match = useRouteMatch();
  const { filter } = match.params;
  return (
    <>
      <AppLayoutContainer>
        <BlogHeaderContainer />
        <BlogNavigation />
        {filter === 'series' ? (
          <LoadSeriesContainer />
        ) : filter === 'tags' ? (
          <LoadTagsContainer />
        ) : (
          <PostsListContainer />
        )}
      </AppLayoutContainer>
    </>
  );
};

export default BlogPage;
