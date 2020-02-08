import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadViews, unloadViews } from 'modules/stores/views';
import BlogHeader from 'components/common/header';

const BlogHeaderContainer = () => {
  const dispatch = useDispatch();
  const { totalViews, todayViews } = useSelector(({ views }) => ({
    totalViews: views.totalViews,
    todayViews: views.todayViews,
  }));

  useEffect(() => {
    dispatch(loadViews());
    return () => {
      dispatch(unloadViews());
    };
  }, [dispatch]);

  return (
    <>
      <BlogHeader totalViews={totalViews} todayViews={todayViews} />
    </>
  );
};

export default BlogHeaderContainer;
