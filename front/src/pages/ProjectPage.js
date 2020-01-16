import React from "react";
import AppLayoutContainer from "containers/common/AppLayoutContainer";
import ProjectHeader from "components/project/header";
import ProjectContent from "components/project/content";

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
