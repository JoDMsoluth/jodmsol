import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useRouteMatch } from 'react-router-dom';
import { loadProjectPosts, unloadProejct } from 'modules/stores/project';
import palette from 'lib/styles/palette';
import { useDispatch, useSelector } from 'react-redux';
import SlideRender from 'components/project/view/SlideRender';

const ProjectViewContainer = () => {
  const match = useRouteMatch();
  const { id } = match.params;
  const dispatch = useDispatch();
  const { project, projectError, loading } = useSelector(
    ({ project, loading }) => ({
      loading: loading['LOAD_PROJECT'],
      project: project.project,
      projectError: project.projectError,
    }),
  );

  useEffect(() => {
    dispatch(loadProjectPosts(id));
    return () => {
      dispatch(unloadProejct());
    };
  }, [dispatch, id]);

  if (projectError) {
    console.log('project is not exist');
  }
  if (loading || !project) {
    return null;
  }

  const { markdown } = project;

  return (
    <ProjectViewWrap>
      <SlideRender markdown={markdown} />
    </ProjectViewWrap>
  );
};

export default ProjectViewContainer;

const ProjectViewWrap = styled.div`
  padding: 2rem;
  font-size: 1.125rem;
  width: 100%;
  height: 100%;
`;
