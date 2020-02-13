import React from 'react';
import AppLayoutContainer from 'containers/common/AppLayoutContainer';
import ProjectHeaderContainer from 'containers/common/BlogHeaderContainer';
import ProjectNavBar from 'components/project/header/ProjectNavBar';
import ProjectListContainer from 'containers/project/ProejctListContainer';

const ProjectPage = () => {
  return (
    <>
      <AppLayoutContainer>
        <ProjectHeaderContainer />
        <ProjectNavBar />
        <ProjectListContainer />
      </AppLayoutContainer>
    </>
  );
};

export default ProjectPage;
