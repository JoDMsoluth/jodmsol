import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadViews, unloadViews } from 'modules/stores/views';
import BlogHeader from 'components/common/header';

const BlogHeaderContainer = () => {
  const dispatch = useDispatch();
  const { views } = useSelector(({ views }) => ({
    views: views.views,
  }));

  useEffect(() => {
    dispatch(loadViews());
    return () => {
      dispatch(unloadViews());
    };
  }, [dispatch]);

  return (
    <>
      <BlogHeader views={views} />
    </>
  );
};

export default BlogHeaderContainer;
