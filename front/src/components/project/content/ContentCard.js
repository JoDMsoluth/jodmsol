import React from "react";
import styled from "styled-components";
import palette from "lib/styles/palette";

export default function ProjectContentCard({ content }) {
  return (
    <>
      <ContentCardWrap>
        <CoverImg>
          <img src={content.coverImg} alt="coverImg" />
        </CoverImg>
        <Content>
          <span>{content.title}</span>
          <span>{content.uploadDate}</span>
          <div>{content.desc}</div>
        </Content>
      </ContentCardWrap>
    </>
  );
}

const ContentCardWrap = styled.div`
  display: inline-block;
  width: 15rem;
  height: 20rem;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 5px 6px 10px 2px rgba(0, 0, 0, 0.5);
  }
`;
const CoverImg = styled.div`
  border: 1px solid ${palette.gray5};
  width: inherit;
  height: 13rem;
  overflow: hidden;
  & > img {
    width: 15rem;
    height: 13rem;
    z-index: -1;
  }
`;
const Content = styled.div`
  border: 1px solid ${palette.gray5};
  border-top:none;
  padding : 0.5rem 1rem
  width: inherit;
  height: 7rem;
  color: ${palette.gray7}
  & span:first-child { 
      font-size : 1rem
  }
  & span:nth-child(2) {
    float: right;
    font-size:0.5rem
    color: ${palette.gray5}
  }
  & div {
    font-size:0.8rem
  }
`;
