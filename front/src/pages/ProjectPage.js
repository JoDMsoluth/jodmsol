import React from "react";
import AppLayoutContainer from "src/containers/common/AppLayoutContainer";
import ProjectHeader from "src/components/project/header";
import ProjectContent from "src/components/project/content";

const ProjectPage = () => {
  return (
    <>
      <AppLayoutContainer>
        <ProjectHeader />
        <ProjectContent />
      </AppLayoutContainer>
    </>
  );
};

export default ProjectPage;
