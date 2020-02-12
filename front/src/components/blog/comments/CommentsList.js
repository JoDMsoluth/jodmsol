import React from 'react';
import styled from 'styled-components';
import palette from 'lib/styles/palette';
import CommentsItem from './CommentsItem';
import CommentForm from './CommentForm';
import PropTypes from 'prop-types';

CommentsList.propTypes = {
  addComment: PropTypes.func,
  addRecomment: PropTypes.func,
  updateComment: PropTypes.func,
  deleteComment: PropTypes.func,
  updateRecomment: PropTypes.func,
  deleteRecomment: PropTypes.func,
  comments: PropTypes.array,
};

export default function CommentsList({
  addComment,
  addRecomment,
  updateComment,
  deleteComment,
  updateRecomment,
  deleteRecomment,
  comments = [],
}) {
  return (
    <>
      <CommentForm addComment={addComment} />
      {comments.length > 0 && (
        <CommentsListWrap>
          {comments.map((comment, i) => (
            <CommentsItem
              key={`${comment.userId}.${i}`}
              comment={comment}
              updateComment={updateComment}
              deleteComment={deleteComment}
              addRecomment={addRecomment}
              updateRecomment={updateRecomment}
              deleteRecomment={deleteRecomment}
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
