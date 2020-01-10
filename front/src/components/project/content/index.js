import React from "react";
import styled from "styled-components";
import ProjectContentList from "./ContentList";

export default function ProjectContent() {
  return (
    <>
      <ContentContainer>
        <ProjectContentList />
      </ContentContainer>
    </>
  );
}

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 0;
`;
