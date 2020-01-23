import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  loadComments,
  unloadComments,
  addComment,
  updateComment,
  deleteComment
} from "modules/stores/comment";
import CommentsList from "components/blog/comments/CommentsList";

const CommentsListContainer = ({ match }) => {
  const dispatch = useDispatch();
  const { comments, commentError, loading } = useSelector(
    ({ comment, loading }) => ({
      comments: comment.comments,
      commentError: comment.commentError,
      loading: loading["LOAD_COMMENTS"]
    })
  );

  const loadCommentsHandle = id => {
    dispatch(loadComments(id));
  };
  const addCommentHandle = id => {
    dispatch(addComment(id));
  };
  const deleteCommentHandle = id => {
    dispatch(deleteComment(id));
  };
  const updateCommentHandle = id => {
    dispatch(updateComment(id));
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
        loadComments={loadCommentsHandle}
        addComment={addCommentHandle}
        updateComment={updateCommentHandle}
        deleteComment={deleteCommentHandle}
        comments={comments}
        commentError={commentError}
        loading={loading}
      />
    </>
  );
};

export default withRouter(CommentsListContainer);
