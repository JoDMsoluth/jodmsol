import React from "react";
import styled from "styled-components";
import Skills from "./Skills";
import Project from "./Project";
import MoreInfo from "./MoreInfo";

export default function WorkExperience() {
  return (
    <WorkExperienceWrap>
      <WorkExperienceTitle>Work Experience</WorkExperienceTitle>
      <Skills/>
      <Project/>
      <MoreInfo/>
    </WorkExperienceWrap>
  );
}

const WorkExperienceWrap = styled.div`
  width: inherit;
  text-align: left;
  padding-left: 1rem;
  grid-column-start: 3;
`;

const WorkExperienceTitle = styled.div`
font-weight: 900;
  font-size: 1rem;
  margin-bottom : 2rem
`;
