import React from 'react';
import AppLayoutContainer from 'containers/common/AppLayoutContainer';
import PostViewContainer from 'containers/blog/PostViewContainer';
import CommentsListContainer from 'containers/blog/CommentsListContainer';
import { useRouteMatch } from 'react-router-dom';
import SeriesViewContainer from 'containers/blog/SeriesViewContainer';
import ProjectViewContainer from 'containers/project/ProjectViewContainer';

export default function ViewPage() {
  const match = useRouteMatch();
  const { filter } = match.params;

  return (
    <>
      {filter === 'project' ? (
        <ProjectViewContainer />
      ) : filter === 'series' ? (
        <AppLayoutContainer padding>
          <SeriesViewContainer />
        </AppLayoutContainer>
      ) : (
        filter === 'post' && (
          <>
            <AppLayoutContainer padding>
              <PostViewContainer />
              <CommentsListContainer />
            </AppLayoutContainer>
          </>
        )
      )}
    </>
  );
}
