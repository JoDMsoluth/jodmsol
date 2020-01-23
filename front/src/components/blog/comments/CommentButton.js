import React from "react";
import styled from "styled-components";
import palette from "lib/styles/palette";
import font from "lib/styles/font";

export default function CommentButton({
  comment,
  setToggleForm,
  setToggleReply,
  toggleForm,
  toggleReply
}) {
  return (
    <>
      <CommentButtonWrap>
        <div>
          <span onClick={() => setToggleForm(!toggleForm)}>Reply</span>
          <span>{`${comment.childId.length}`}</span>
          <span onClick={() => setToggleReply(!toggleReply)}>
            {comment.childId.length > 1 ? ` comment` : " comment"}
          </span>
          <span>{comment.likes}</span>
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
