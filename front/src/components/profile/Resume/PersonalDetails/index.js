import React from "react";
import styled from "styled-components";
import palette from "lib/styles/palette";
import BasicInfo from "./BasicInfo";
import Objective from "./Objective";
import ContactInfo from "./ContactInfo";
import Education from "./Education";

export default function PersonalDetails() {
  return (
    <PersonalDetailsWrap>
      <PersonalDetailsTitle>Personal Details</PersonalDetailsTitle>
      <Objective />
      <BasicInfo />
      <ContactInfo />
      <Education />
    </PersonalDetailsWrap>
  );
}

const PersonalDetailsWrap = styled.div`
  width: inherit;
  text-align: right;
  padding-right: 1rem;
  border-right: 2px solid ${palette.gray7};
  grid-column-start: 2;
`;

const PersonalDetailsTitle = styled.div`
  font-weight: 900;
  font-size: 1rem;
  margin-bottom: 2rem;
`;
