import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { loadPost, unloadPost } from "modules/stores/post";
import { useDispatch, useSelector } from "react-redux";
import PostView from "components/blog/posts/PostView";

const PostViewContainer = ({ match }) => {
  const { id, category } = match.params;
  const dispatch = useDispatch();
  const { post, postError, loading } = useSelector(({ post, loading }) => ({
    post: post.post,
    postError: post.postError,
    loading: loading["LOAD_POST"]
  }));

  useEffect(() => {
    dispatch(loadPost(id));
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, id]);

  console.log(post, "post");
  if (postError) {
    console.log("post is not exist");
  }
  if (loading || !post) {
    return null;
  }
  return (
    <>
      <PostView
        post={post}
        loading={loading}
        postError={postError}
        category={category}
      />
    </>
  );
};

export default withRouter(PostViewContainer);
