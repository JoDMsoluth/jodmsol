import React from 'react';
import AppLayoutContainer from 'containers/common/AppLayoutContainer';
import ProjectContent from 'components/project/content';
import ProjectHeaderContainer from 'containers/common/BlogHeaderContainer';

const ProjectPage = () => {
  return (
    <>
      <AppLayoutContainer>
        <ProjectHeaderContainer />
        <ProjectContent />
      </AppLayoutContainer>
    </>
  );
};

export default ProjectPage;
