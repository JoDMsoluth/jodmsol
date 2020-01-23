import React, { useEffect } from "react";
import styled from "styled-components";
import palette from "lib/styles/palette";
import CommentsItem from "./CommentsItem";
import CommentForm from "./CommentForm";

export default function CommentsList({
  loadComments,
  addComment,
  updateComment,
  deleteComment,
  comments = []
}) {
  return (
    <>
      <CommentForm addComment={addComment} loadComments={loadComments} />
      {comments.length > 0 && (
        <CommentsListWrap>
          {comments.map((comment, i) => (
            <CommentsItem
              key={`${comment.userId}.${i}`}
              comment={comment}
              updateComment={updateComment}
              deleteComment={deleteComment}
            />
          ))}
        </CommentsListWrap>
      )}
    </>
  );
}

const CommentsListWrap = styled.div`
background : ${palette.gray1}
display : inline-block;  
width : 100%;
height: 100%;
`;
