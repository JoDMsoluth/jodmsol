import React from "react";
import styled from "styled-components";
import palette from "lib/styles/palette";
import CommentContent from "./CommentContent";

export default function ReCommentsList({ comments }) {
  return (
    <>
      {comments.map((comment, i) => (
        <CommentWrap>
          <CommentContent
            key={`${comment.userId}${i}`}
            comment={comment}
            reply
          />
        </CommentWrap>
      ))}
    </>
  );
}

const CommentWrap = styled.div`
padding : 0.5rem 5rem;
background : ${palette.gray1}
width : 100%;
height: 100%;
&:hover {
    background : ${palette.gray3}
}
`;
