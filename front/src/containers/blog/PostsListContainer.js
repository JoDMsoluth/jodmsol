import React, { useEffect } from "react";
import { loadPosts, unloadPost } from "modules/stores/posts";
import { useDispatch, useSelector } from "react-redux";
import BlogContent from "src/components/blog/postsList";

const PostsListContainer = () => {
  const dispatch = useDispatch();
  const { posts, postError, loading } = useSelector(({ posts, loading }) => ({
    posts: posts.posts,
    postError: posts.postError,
    loading: loading["LOAD_POST"]
  }));

  useEffect(() => {
    dispatch(loadPosts());
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch]);

  return (
    <>
      <BlogContent posts={posts} loading={loading} postError={postError} />
    </>
  );
};

export default PostsListContainer;
