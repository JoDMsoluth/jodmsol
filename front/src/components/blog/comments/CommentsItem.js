import React, { useState } from "react";
import styled from "styled-components";
import palette from "lib/styles/palette";
import CommentButton from "./CommentButton";
import CommentContent from "./CommentContent";
import RecommentsListContainer from "containers/blog/RecommentsListContainer";
import CommentForm from "./CommentForm";

export default function CommentsItem({
  comment,
  updateComment,
  deleteComment,
  addRecomment
}) {
  const [toggleForm, setToggleForm] = useState(false);
  const [toggleReply, setToggleReply] = useState(false);
  const [edit, setEdit] = useState(false);
  return (
    <>
      {comment && (
        <>
          <CommentsItemWrap>
            <CommentContent
              comment={comment}
              edit={edit}
              setEdit={setEdit}
              updateComment={updateComment}
              deleteComment={deleteComment}
            />

            <CommentButton
              comment={comment}
              toggleForm={toggleForm}
              toggleReply={toggleReply}
              setToggleForm={setToggleForm}
              setToggleReply={setToggleReply}
            />
          </CommentsItemWrap>

          {toggleForm && (
            <CommentForm
              addRecomment={addRecomment}
              parentId={comment._id}
              reply
            />
          )}
          {toggleReply && (
            <RecommentsListContainer
              id={comment._id}
              toggleForm={toggleForm}
              toggleReply={toggleReply}
              comment={comment}
            />
          )}
        </>
      )}
    </>
  );
}

const CommentsItemWrap = styled.div`
  display: inline-block;
  padding: 1rem 2rem;
  width: 100%;
  background: ${palette.gray1};
  &:hover {
    background: ${palette.gray3};
  }
`;
