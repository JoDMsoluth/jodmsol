import React from "react";
import styled from "styled-components";
import palette from "lib/styles/palette";

export default function IntroBasicInfo() {
  return (
    <div>
      <ContentTitle>Basic Info</ContentTitle>
      <ContentWrap>
        <Content style={{ fontSize: "0.7rem", marginBottom: "0.5rem" }}>
          <div>University Student</div>
          <div>interested in web development</div>
        </Content>
        <Content>Hyehyeong Jo</Content>
        <Content>1994-03-17</Content>
        <Content>Male</Content>
      </ContentWrap>
    </div>
  );
}
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
const Content = styled.div``;
