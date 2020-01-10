import React from "react";
import styled from "styled-components";
import palette from "src/lib/styles/palette";

export default function BlogContentCard({ content }) {
  return (
    <>
      <ContentCardWrap>
        <CoverImg coverImg={content.coverImg}></CoverImg>
        <Content>
          <b>{content.title}</b>
          <div>{content.uploadDate}</div>
          <div>{content.desc.substring(0, 600)}</div>
          <div></div>
        </Content>
      </ContentCardWrap>
    </>
  );
}

const ContentCardWrap = styled.div`
  width: 100%;
  padding: 0.8rem 1rem;
  height: 16.6rem;
  border-bottom: 1px solid ${palette.gray5};
`;
const CoverImg = styled.div`
  display: inline-block;
  background: url(${props => props.coverImg});
  background-position: 50% 50%;
  background-size: cover;
  width: 15rem;
  height: 15rem;
  overflow: hidden;
`;
const Content = styled.div`
  position : relative;
  display:inline-block;
  white-space: pre-wrap;
  padding : 0.5rem 2rem 0 3rem
  width: calc(100% - 15rem);
  float:right;
  height: 15rem;
  color: ${palette.gray7}
  overflow:hidden
  & > b { 
      font-size : 2rem;
      color: ${palette.gray8}
  }
  & div:nth-child(2) {
    font-size:0.7rem;
    line-height : 0.2rem;
    font-weight : 600;
    color: ${palette.gray5}
  }
  & div:nth-child(3) {
    padding :1rem 0;
    font-size:1rem
    line-height : 1.5rem;
    color: ${palette.gray7}
  }

  & > div:last-child {
    position : absolute;
    bottom : 0;
    right: 0;
    width :100%;
    height : 20%;
    background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 80%);
  }
`;
