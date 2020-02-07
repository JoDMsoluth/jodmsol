import React from 'react';
import styled from 'styled-components';
import palette from 'lib/styles/palette';
import font from 'lib/styles/font';
import Cookies from 'js-cookie';
import moment from 'moment';
import { useRouteMatch } from 'react-router-dom';

export default function PostHeader({
  title,
  thumbnail,
  onLike,
  onUnlike,
  likes,
  createdAt,
}) {
  const match = useRouteMatch();
  const { id } = match.params;
  const isLike = Cookies.get(id);
  return (
    <>
      <HeaderWrap>
        <HeaderText>
          <PostTitle>{title}</PostTitle>
          <PostCreatedAt>
            {moment(createdAt).format('YYYY-MM-DD')}
          </PostCreatedAt>
          <LikeButton
            onClick={() => {
              if (isLike) onUnlike(id);
              else onLike(id);
            }}
          >
            <div>
              {isLike ? (
                <i className="fas fa-heart"></i>
              ) : (
                <i className="far fa-heart"></i>
              )}
              {` ${likes}`}
            </div>
          </LikeButton>
        </HeaderText>
        <PostThumbnail src={thumbnail} alt="thumbnail"></PostThumbnail>
      </HeaderWrap>
    </>
  );
}

const HeaderWrap = styled.div`
  width: 100%;
`;
const HeaderText = styled.div`
    position : relative;
  width: 100%;
  margin-bottom: 1rem;
  padding : 1rem
  border-bottom: 1px solid ${palette.gray3};
`;
const LikeButton = styled.i`
  position: absolute;
  top: 1.8rem;
  right: 1.1rem;
  font-size: 2rem;
  & div:first-child {
    color: ${palette.blue6};
    text-align: right;
    &:hover {
      color: ${palette.blue8};
    }
  }
`;
const PostTitle = styled.div`
  width: 100%;
  font-size: 2rem;
`;
const PostCreatedAt = styled.div`
  font-size: 1rem;
  color: ${palette.gray5};
`;

const PostThumbnail = styled.img`
  width: 100%;
  height: auto;
`;
