import React, { useState } from 'react';
import styled from 'styled-components';
import palette from 'lib/styles/palette';
import CommentButton from './CommentButton';
import CommentContent from './CommentContent';
import CommentForm from './CommentForm';
import ReCommentsList from './ReCommnetList';
import PropTypes from 'prop-types';

CommentsItem.propTypes = {
  updateComment: PropTypes.func,
  deleteComment: PropTypes.func,
  addRecomment: PropTypes.func,
  updateRecomment: PropTypes.func,
  deleteRecomment: PropTypes.func,
  comment: PropTypes.object,
};

export default function CommentsItem({
  comment,
  updateComment,
  deleteComment,
  addRecomment,
  updateRecomment,
  deleteRecomment,
}) {
  const [toggleForm, setToggleForm] = useState(false);
  const [toggleReply, setToggleReply] = useState(false);
  const [edit, setEdit] = useState(false);
  return (
    <>
      <CommentsItemWrap>
        {edit ? (
          <CommentForm
            edit={edit}
            setEdit={setEdit}
            comment={comment}
            updateComment={updateComment}
            updateRecomment={updateRecomment}
          />
        ) : (
          <>
            <CommentContent
              comment={comment}
              edit={edit}
              setEdit={setEdit}
              deleteComment={deleteComment}
            />
            <CommentButton
              comment={comment}
              toggleForm={toggleForm}
              toggleReply={toggleReply}
              setToggleForm={setToggleForm}
              setToggleReply={setToggleReply}
            />
          </>
        )}
      </CommentsItemWrap>

      {toggleForm && (
        <CommentForm addRecomment={addRecomment} parentId={comment._id} reply />
      )}
      {toggleReply && (
        <ReCommentsList
          updateRecomment={updateRecomment}
          deleteRecomment={deleteRecomment}
          comment={comment}
        />
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
