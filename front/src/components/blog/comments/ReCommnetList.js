import React from 'react';
import styled from 'styled-components';
import palette from 'lib/styles/palette';
import RecommentItem from './RecommentItem';

export default function ReCommentsList({
  updateRecomment,
  deleteRecomment,
  comment,
}) {
  return (
    <>
      {comment &&
        comment.childId.map((comment, i) => (
          <RecommentItem
            key={`${comment.userId}${i}`}
            deleteRecomment={deleteRecomment}
            comment={comment}
            updateRecomment={updateRecomment}
          />
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
