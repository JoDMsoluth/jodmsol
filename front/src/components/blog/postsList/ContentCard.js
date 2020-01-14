import React from "react";
import styled from "styled-components";
import palette from "lib/styles/palette";
import { Link } from "react-router-dom";

export default function BlogContentCard({ post }) {
  const { title, updatedAt, markdown, tags, likes } = post;
  return (
    <>
      <ContentCardWrap>
        <CoverImg coverImg={null}></CoverImg>
        <Content>
          <ContentHead>
            <b>{title}</b>
            <div>
              <span>{updatedAt}</span>
              <span style={{ float: "right" }}>
                {typeof tags === typeof {}
                  ? Object.keys(tags).map(tag => (
                      <Link to="/">{`${tags[tag]} `}</Link>
                    ))
                  : `${tags}`}
              </span>
            </div>
            <ContentSubHead>
              <div>
                <i className="far fa-heart"></i>
                {` ${likes}`}
              </div>
            </ContentSubHead>
          </ContentHead>
          <ContentBody>
            <div>{markdown.substring(0, 500)}</div>
            <div></div>
          </ContentBody>
        </Content>
      </ContentCardWrap>
    </>
  );
}

const ContentCardWrap = styled.div`
  width: 100%;
  padding: 0.8rem 1rem;
  height: 16.1rem;
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
  padding : 0 2rem 0 3rem
  width: calc(100% - 15rem);
  float:right;
  height: 15rem;
  color: ${palette.gray7}
  overflow:hidden
  
`;

const ContentHead = styled.div`
  padding-bottom: 1rem;
  & > b {
    font-size: 2rem;
    color: ${palette.gray8};
  }
  & div:nth-child(2) {
    font-size: 0.7rem;
    line-height: 0.7rem;
    font-weight: 600;
    color: ${palette.gray5};
  }
  & a:hover {
    color: ${palette.gray6};
  }
`;
const ContentSubHead = styled.div`
  position: absolute;
  top: 1rem;
  right: 2rem;
  & div:first-child {
    color: ${palette.teal9};
    text-align: right;
  }
`;
const ContentBody = styled.div`
  position : relative;
  height: 9rem;
  & div:nth-child(1) {
    height: 100%;
    overflow:hidden
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
