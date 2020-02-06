import React from 'react';
import styled from 'styled-components';
import palette from 'lib/styles/palette';
import font from 'lib/styles/font';

export default function CommentButton({
  comment,
  setToggleForm,
  setToggleReply,
  toggleForm,
  toggleReply,
}) {
  if (!comment) {
    return null;
  }

  return (
    <>
      <CommentButtonWrap>
        <div>
          <span onClick={() => setToggleForm(!toggleForm)}>Reply</span>
          <span>{`${comment && comment.childId.length}`}</span>
          <span
            onClick={() =>
              comment &&
              comment.childId.length > 0 &&
              setToggleReply(!toggleReply)
            }
          >
            {comment && comment.childId.length > 1 ? ` comment` : ' comment'}
          </span>
          <span>{comment && comment.likes}</span>
        </div>
      </CommentButtonWrap>
    </>
  );
}

const CommentButtonWrap = styled.div`
  & > div:nth-child(1) {
    color: ${palette.blue3};
    ${font.normalFont}
    font-weight: 500;
    font-size: 0.7rem;
    & > span:first-child {
      margin-right: 0.5rem;
    }
    & > span:hover {
      color: ${palette.blue5};
    }
  }
`;
