import React from "react";
import styled from "styled-components";
import palette from "lib/styles/palette";
import font from "lib/styles/font";

export default function CommentButton({
  data,
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
          <span>{`${data.child.length}`}</span>
          <span onClick={() => setToggleReply(!toggleReply)}>
            {data.child.length > 1 ? ` comments` : " comment"}
          </span>
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
