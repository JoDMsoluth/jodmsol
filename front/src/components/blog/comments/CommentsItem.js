import React, { useState } from "react";
import styled from "styled-components";
import palette from "lib/styles/palette";
import font from "lib/styles/font";
import CommentsForm from "./CommentForm";
import ReCommentsList from "./ReCommnetList";
import CommentButton from "./CommentButton";
import CommentContent from "./CommentContent";
import CommentForm from "./CommentForm";

export default function CommentsItem({ data }) {
  const [toggleForm, setToggleForm] = useState(false);
  const [toggleReply, setToggleReply] = useState(false);
  const [edit, setEdit] = useState(false);
  return (
    <>
      <CommentsItemWrap>
        {edit ? (
          <CommentForm edit={edit} setEdit={setEdit} data={data} />
        ) : (
          <>
            <CommentContent data={data} edit={edit} setEdit={setEdit} />
            <CommentButton
              data={data}
              toggleForm={toggleForm}
              toggleReply={toggleReply}
              setToggleForm={setToggleForm}
              setToggleReply={setToggleReply}
            />
          </>
        )}
      </CommentsItemWrap>
      {toggleForm && <CommentsForm />}
      {toggleReply && <ReCommentsList data={data.child} />}
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
