import React from 'react';
import styled from 'styled-components';
import palette from 'lib/styles/palette';
import { Link, withRouter } from 'react-router-dom';
import thumbnail from 'statics/images/kickVillageProject.PNG';
import dateFormat from 'lib/dateFormat';
import { convertToPlainText } from 'lib/markdown';

const BlogContentCard = ({ post }) => {
  const { _id, title, updatedAt, markdown, tags, likes, coverImg } = post;
  const plainText = convertToPlainText(markdown);
  return (
    <>
      <ContentCardWrap>
        <Link to={`/post/${_id}`}>
          <CoverImg coverImg={coverImg || thumbnail}></CoverImg>
        </Link>
        <Content>
          <ContentHead>
            <b>{title}</b>
            <div>
              <span>{dateFormat(updatedAt)}</span>
              <span style={{ float: 'right' }}>
                {typeof tags === typeof {}
                  ? Object.keys(tags).map((tag, i) => (
                      <Link
                        to={`/blog/${post.category}?tag=${tags[tag].substring(
                          1,
                          tags[tag].length,
                        )}`}
                        key={`${_id}+${i}`}
                      >{`${tags[tag]} `}</Link>
                    ))
                  : ``}
              </span>
            </div>
            <ContentSubHead>
              <div>
                <i className="fas fa-heart"></i>
                {` ${likes}`}
              </div>
            </ContentSubHead>
          </ContentHead>
          <ContentBody>
            <div>
              {plainText.length > 500 ? plainText.substring(0, 500) : plainText}
            </div>
          </ContentBody>
        </Content>
      </ContentCardWrap>
    </>
  );
};
export default withRouter(BlogContentCard);

const ContentCardWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 2rem);
  height: 30rem;
  border: 1px solid ${palette.gray5};
  &:hover {
    background: ${palette.gray0};
  }
`;
const CoverImg = styled.div`
  display: inline-block;
  background: url(${props => props.coverImg});
  background-position: 50% 50%;
  background-size: cover;
  width: 100%;
  height: 15rem;
  overflow: hidden;
`;
const Content = styled.div`
  position : relative;
  display:inline-block;
  white-space: pre-wrap;
  padding: 0.8rem 1rem;
  width: 100%;
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
  top: 1.8rem;
  right: 1.1rem;
  & div:first-child {
    color: ${palette.blue6};
    text-align: right;
    &:hover {
      color: ${palette.blue8};
    }
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

`;
