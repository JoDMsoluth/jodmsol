import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { loadPost, addPost, loadPosts, unloadPost } from "modules/stores/posts";
import { useDispatch, useSelector } from "react-redux";
import PostView from "src/components/blog/post/PostView";

const PostViewContainer = ({ match }) => {
  const { id } = match.params;
  const dispatch = useDispatch();
  const { post, postError, loading } = useSelector(({ posts, loading }) => ({
    post: posts.post,
    postError: posts.postError,
    loading: loading["LOAD_POST"]
  }));

  useEffect(() => {
    dispatch(loadPost(id));
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, id]);

  return (
    <>
      <PostView post={post} loading={loading} postError={postError} />
    </>
  );
};

export default withRouter(PostViewContainer);
