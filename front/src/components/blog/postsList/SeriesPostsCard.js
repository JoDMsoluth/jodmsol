import React from 'react';
import styled from 'styled-components';
import palette from 'lib/styles/palette';
import { Link, withRouter } from 'react-router-dom';
import thumbnail from 'statics/images/kickVillageProject.PNG';
import formatDate from 'lib/dateFormat';

const SeriesPostsCard = ({ post }) => {
  const { _id, title, updatedAt, markdown, tags, likes, coverImg } = post;
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
              <span>{formatDate(updatedAt)}</span>
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
              {markdown.length > 500 ? markdown.substring(0, 500) : markdown}
            </div>
          </ContentBody>
        </Content>
      </ContentCardWrap>
    </>
  );
};
export default withRouter(SeriesPostsCard);

const ContentCardWrap = styled.div`
    padding : 0.01px;
  display: flex;
  flex-direction: row;
  width: 100%
  height: 10rem;
  border: 1px solid ${palette.gray5};
  border-bottom : none;
  &:last-child {
    border-bottom: 1px solid ${palette.gray5};
  }
  &:hover {
    background: ${palette.gray0};
  }
`;
const CoverImg = styled.div`
  display: inline-block;
  background: url(${props => props.coverImg});
  background-position: 50% 50%;
  background-size: cover;
  width: 10rem;
  height: 10rem;
  overflow: hidden;
`;
const Content = styled.div`
  position : relative;
  display:inline-block;
  white-space: pre-wrap;
  padding: 0.8rem 1rem;
  width: calc(100% - 10rem);
  float:right;
  height: 13rem;
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
