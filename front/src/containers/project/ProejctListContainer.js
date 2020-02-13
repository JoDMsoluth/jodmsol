import React, { useEffect } from 'react';
import { loadProject, unloadProejct } from 'modules/stores/project';
import ProjectList from 'components/project/posts/ProjectList';
import { useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const ProjectListContainer = () => {
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const { projects, projectError, loading } = useSelector(
    ({ project, loading }) => ({
      projects: project.projects,
      projectError: project.projectError,
      loading: loading['LOAD_ALL_PROJECT'],
    }),
  );

  const { category } = match.params;
  useEffect(() => {
    console.log('category', category);
    dispatch(loadProject({ category }));
    return () => {
      dispatch(unloadProejct());
    };
  }, [dispatch, match.params]);

  console.log(projects);
  return (
    <>
      <ProjectList
        projects={projects}
        loading={loading}
        projectError={projectError}
      />
    </>
  );
};

export default ProjectListContainer;
