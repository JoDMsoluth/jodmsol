import React, { useState } from 'react';
import styled from 'styled-components';
import palette from 'lib/styles/palette';
import DeleteQuestion from './DeleteQuestion';
import dateFormat from 'lib/dateFormat';

export default function CommentContent({
  comment,
  edit,
  setEdit,
  deleteComment,
  deleteRecomment,
  reply,
}) {
  const [toggleQuestion, setToggleQustion] = useState(false);
  const { userId, _id, updatedAt, content } = comment;
  return (
    <>
      <CommentsItemWrap>
        <CommentHead>
          <span>{userId}</span>
          <span>{updatedAt && dateFormat(updatedAt)}</span>
        </CommentHead>
        <div>{content}</div>
        <CommentToolbar>
          <div onClick={() => setEdit(!edit)}>
            <i className="fas fa-edit" />
            <span>Edit</span>
          </div>
          <div onClick={() => setToggleQustion(!toggleQuestion)}>
            <i className="fas fa-times-circle" />
            <span>Delete</span>
          </div>
        </CommentToolbar>

        {toggleQuestion && (
          <DeleteQuestion
            id={_id}
            toggleQuestion={toggleQuestion}
            setToggleQustion={setToggleQustion}
            deleteComment={deleteComment}
            deleteRecomment={deleteRecomment}
            reply={reply}
          />
        )}
      </CommentsItemWrap>
    </>
  );
}

const CommentsItemWrap = styled.div`
  position: relative;
  &:hover > div:last-child {
    display: inline-block;
  }
  & > div:nth-child(2) {
    color: ${palette.gray7};
    margin-bottom: 0.4rem;
    font-size: 0.85rem;
  }
`;
const CommentHead = styled.div`
  margin-bottom : 0.7rem;
  & > span:first-child {
    margin-right: 0.7rem;
  }
  & > span:nth-child(2) {
    position: relative;
    color : ${palette.gray6}
    font-size : 0.5rem;
    bottom: 0.1rem;
  }
`;

const CommentToolbar = styled.div`
  position: absolute;
  top: -0.2rem;
  right: 0;
  display: none;
  color: ${palette.gray6};
  & > div {
    display: inline-block;
    padding: 0.2rem 0.3rem;
    margin-right: 1rem;
    border-radius : 5px;
  }
  & > div:last-child {
    position : relative;
  }
  & > div:hover {
    background : ${palette.gray6}
    color : ${palette.gray2}
  }
  & i {
    margin-right:0.2rem;
  }
  & span {
    font-size: 0.8rem;
    position: relative;
    bottom: 0.05rem;
  }
`;
