import React from "react";
import styled from "styled-components";
import palette from "lib/styles/palette";

export default function IntroObjective() {
  return (
    <ObjectWrap>
      <ContentTitle>Objective</ContentTitle>
      <ContentWrap>{`To take a challenging role as Front End Web Developer in a highly technical company 
          where I could utilize my skills in Web Design, Front-End Web Development,
          and use these skills in providing quality service to the company.`}</ContentWrap>
    </ObjectWrap>
  );
}

const ObjectWrap = styled.div`
  width: 58rem;
  margin: 0 auto 3rem;
`;

const ContentTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 900;
  margin-bottom: 1rem;
`;
const ContentWrap = styled.div`
  font-size: 1rem;
  margin-bottom: 1rem;
  font-weight: 500;
  color: ${palette.gray7};
`;
