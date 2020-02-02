import React from 'react';
import AppLayoutContainer from 'containers/common/AppLayoutContainer';
import PostViewContainer from 'containers/blog/PostViewContainer';
import CommentsListContainer from 'containers/blog/CommentsListContainer';
import { useRouteMatch } from 'react-router-dom';
import SeriesViewContainer from 'containers/blog/SeriesViewContainer';

export default function ViewPage() {
  const match = useRouteMatch();
  const { filter } = match.params;
  const viewPage =
    filter === 'series' ? (
      <SeriesViewContainer />
    ) : filter === 'project' ? (
      ''
    ) : (
      filter === 'post' && (
        <>  <PostViewContainer />
          <CommentsListContainer />
        </>
      )
    );
  return (
    <>
      <AppLayoutContainer padding>{viewPage}</AppLayoutContainer>
    </>
  );
}
