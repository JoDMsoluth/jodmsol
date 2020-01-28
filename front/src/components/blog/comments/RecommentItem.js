import React, { useState } from "react";
import styled from "styled-components";
import palette from "lib/styles/palette";
import CommentContent from "./CommentContent";
import CommentForm from "./CommentForm";

export default function ReCommentsItem({
    deleteRecomment,
    comment,
    updateRecomment
}) {
  console.log("comment.childId", comment);
  const [edit, setEdit] = useState(false)
  return (
    <>
          <CommentWrap>
            {edit ?
        <CommentForm
          edit={edit}
          setEdit={setEdit}
          comment={comment}
          updateRecomment={updateRecomment}
          reply
        /> :
            <CommentContent
            edit={edit}
            setEdit={setEdit}
              comment={comment}
              deleteRecomment={deleteRecomment}
              reply
            />
          }
          </CommentWrap>
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
