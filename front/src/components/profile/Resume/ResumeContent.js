import React from "react";
import styled from "styled-components";
import font from "lib/styles/font";
import PersonalDetails from "./PersonalDetails";
import WorkExperience from "./WorkExperience";

export default function ResumeContent() {
  return (
    <>
      <CareerTitle>RESUME</CareerTitle>
      <CareerContentWrap>
        <PersonalDetails />
        <WorkExperience />
      </CareerContentWrap>
    </>
  );
}
const CareerTitle = styled.div`
  text-align: center;
  margin: 4rem 0;
  font-size: 4rem;
  ${font.boldFont}
  font-weight : 500;
`;
const CareerContentWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 20rem 20rem 1fr;
  width: 100%;
`;
