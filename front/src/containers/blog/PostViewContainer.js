import React, { useEffect, useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import { loadPost, unloadPost, setToc } from 'modules/stores/post';
import { useDispatch, useSelector } from 'react-redux';
import PostView from 'components/blog/post/PostView';

const PostViewContainer = ({ match }) => {
  const { id, category } = match.params;
  const dispatch = useDispatch();
  const { post, postError, loading, toc } = useSelector(
    ({ post, loading }) => ({
      post: post.post,
      postError: post.postError,
      toc: post.toc,
      loading: loading['LOAD_POST'],
    }),
  );

  const onSetToc = useCallback(toc => {
    dispatch(setToc(toc));
  });

  useEffect(() => {
    dispatch(loadPost(id));
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, id]);

  console.log(post, 'post');
  if (postError) {
    console.log('post is not exist');
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
        toc={toc}
        onSetToc={onSetToc}
      />
    </>
  );
};

export default withRouter(PostViewContainer);
