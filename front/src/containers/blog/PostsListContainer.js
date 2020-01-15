import React, { useEffect } from "react";
import { loadPosts, unloadPost } from "modules/stores/posts";
import { useDispatch, useSelector } from "react-redux";
import BlogContent from "components/blog/postsList";
import qs from "qs";
import { withRouter } from "react-router-dom";

const PostsListContainer = ({ location }) => {
  const dispatch = useDispatch();
  const { posts, postError, loading } = useSelector(({ posts, loading }) => ({
    posts: posts.posts,
    postError: posts.postError,
    loading: loading["LOAD_POST"]
  }));

  useEffect(() => {
    const { tag, page } = qs.parse(location.search, {
      ignoreQueryPrefix: true
    });
    console.log("tag, page", tag, page);
    dispatch(loadPosts({ tag, page }));
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, location.search]);

  return (
    <>
      <BlogContent posts={posts} loading={loading} postError={postError} />
    </>
  );
};

export default withRouter(PostsListContainer);
