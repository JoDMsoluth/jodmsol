import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, useRouteMatch } from 'react-router-dom';
import {
  loadComments,
  unloadComments,
  addComment,
  updateComment,
  deleteComment,
  addRecomment,
  deleteRecomment,
  updateRecomment,
} from 'modules/stores/comment';
import CommentsList from 'components/blog/comments/CommentsList';

const CommentsListContainer = () => {
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const { comments, loading } = useSelector(({ comment, loading }) => ({
    comments: comment.comments,
    commentError: comment.commentError,
    loading: loading['LOAD_COMMENTS'],
  }));

  const addCommentHandle = ({ id, userId, password, content }) => {
    dispatch(addComment({ id, userId, password, content }));
  };
  const addRecommentHandle = ({ id, userId, password, content }) => {
    dispatch(addRecomment({ id, userId, password, content }));
  };
  const deleteCommentHandle = ({ password, id }) => {
    dispatch(deleteComment({ password, id }));
  };
  const updateCommentHandle = ({ id, userId, password, content }) => {
    dispatch(updateComment({ id, userId, password, content }));
  };
  const deleteRecommentHandle = ({ password, id }) => {
    dispatch(deleteRecomment({ password, id }));
  };
  const updateRecommentHandle = ({ id, userId, password, content }) => {
    dispatch(updateRecomment({ id, userId, password, content }));
  };

  const { id } = match.params;
  useEffect(() => {
    dispatch(loadComments(id));
    return () => {
      dispatch(unloadComments());
    };
  }, [dispatch, id]);

  if (loading) {
    return null;
  }
  if (!comments) {
    return null;
  }

  return (
    <>
      <CommentsList
        addComment={addCommentHandle}
        updateComment={updateCommentHandle}
        deleteComment={deleteCommentHandle}
        addRecomment={addRecommentHandle}
        updateRecomment={updateRecommentHandle}
        deleteRecomment={deleteRecommentHandle}
        comments={comments}
      />
    </>
  );
};

export default CommentsListContainer;
