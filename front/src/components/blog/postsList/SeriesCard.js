import React from "react";
import styled from "styled-components";
import palette from "lib/styles/palette";
import { Link } from "react-router-dom";
import thumbnail from "statics/images/kickVillageProject.PNG";
import qs from "qs";
import CustomButton from "lib/CustomButton";

export default function SeriesCard({ series }) {
  if (!series) {
    return null;
  }
  const { _id: id, __v, title, desc, category, updatedAt } = series;
  const queryString = qs.stringify({
    id
  });
  return (
    <>
      <ContentCardWrap>
        <Link to={`/blog/${category}?${queryString}&page=1`}>
          <CoverImg coverImg={thumbnail}></CoverImg>
        </Link>
        <Content>
          <ContentHead>
            <div>{updatedAt}</div>
            <Link to={`/blog/${category}?${queryString}&page=1`}>
              <b>{title}</b>
            </Link>
            <div>
              <span>
                {__v > 1 ? `${__v} units is posted` : `${__v} unit is posted`}
              </span>
            </div>
          </ContentHead>
          <ContentBody>
            <div>{desc.length > 500 ? desc.substring(0, 500) : desc}</div>
            <div></div>
          </ContentBody>
          <CustomButton color="darkGray" size="medium">
            Show Posts
          </CustomButton>
        </Content>
      </ContentCardWrap>
    </>
  );
}

const ContentCardWrap = styled.div`
  position: relative;
  width: 100%;
  padding: 1rem 1rem;
  height: 20.1rem;
  border-bottom: 1px solid ${palette.gray5};
  &:hover {
    background: ${palette.gray0};
  }
`;
const CoverImg = styled.div`
  display: inline-block;
  position: absolute;
  top: 50%;
  transform: translate(-20%, -50%);
  box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.5);
  background: url(${props => props.coverImg});
  background-position: 50% 50%;
  background-size: cover;
  width: 17rem;
  height: 17rem;
  overflow: hidden;
`;
const Content = styled.div`
  position : relative;
  display:inline-block;
  white-space: pre-wrap;
  padding : 0 2rem 0 3rem
  width: calc(100% - 15rem);
  float:right;
  height: 18rem;
  color: ${palette.gray7}
  overflow:hidden  
`;

const ContentHead = styled.div`
  padding-bottom: 1rem;
  & b {
    font-size: 2rem;
    color: ${palette.gray8};
  }
  & div:nth-child(3) {
    font-size: 0.7rem;
    line-height: 0.7rem;
    font-weight: 600;
    color: ${palette.gray5};
  }
  & a:hover {
    color: ${palette.gray6};
  }
`;
const ContentBody = styled.div`
  position : relative;
  height: 10rem;
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
