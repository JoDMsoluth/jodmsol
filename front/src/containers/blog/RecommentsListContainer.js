import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadRecomments,
  unloadRecomments,
  updateRecomment,
  deleteRecomment
} from "modules/stores/comment";
import ReCommentsList from "components/blog/comments/ReCommnetList";

const RecommentsListContainer = ({ id, comment }) => {
  const dispatch = useDispatch();
  const { recomments, recommentError, loading } = useSelector(
    ({ comment, loading }) => ({
      recomments: comment.recomments,
      recommentError: comment.recommentError,
      loading: loading["LOAD_RECOMMENTS"]
    })
  );

  const deleteRecommentHandle = ({ password, id }) => {
    dispatch(deleteRecomment({ password, id }));
  };
  const updateRecommentHandle = ({ id, userId, password, content }) => {
    dispatch(updateRecomment({ id, userId, password, content }));
  };

  useEffect(() => {
    dispatch(loadRecomments(id));
    return () => {
      dispatch(unloadRecomments());
    };
  }, [dispatch]);

  if (loading) {
    return null;
  }

  return (
    <>
      {comment && comment.childId.length > 0 && recomments && (
        <ReCommentsList
          id={id}
          updateRecomment={updateRecommentHandle}
          deleteRecomment={deleteRecommentHandle}
          recomments={recomments}
          recommentError={recommentError}
          loading={loading}
        />
      )}
    </>
  );
};

export default RecommentsListContainer;
