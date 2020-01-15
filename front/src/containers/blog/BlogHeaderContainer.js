import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function PostsListContainer() {
  const dispatch = useDispatch();
  const {
    posts,
    postError,
    loading
  } = useSelector(({ posts, loading }) => ({}));

  useEffect(() => {
    return () => {};
  }, [dispatch, location.search]);

  return <></>;
}
