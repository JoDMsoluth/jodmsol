import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import EditorHeader from "src/components/write/EditorHeader";
import { withRouter } from "react-router-dom";
import { addPost } from "src/modules/stores/posts";
import { INITIALIZE } from "src/modules/stores/write";

const EditorPaneContainer = ({ history }) => {
  const { title, tags, markdown } = useSelector(({ write }) => write);
  const dispatch = useDispatch();
  console.log("selector", title, tags, markdown);
  const onGoBack = () => history.goBack();
  const onSubmit = () => {
    dispatch(addPost({ title, markdown, tags }));
    history.push(`/blog/?page=1`);
  };

  useEffect(() => {
    return () => dispatch({ type: INITIALIZE });
  });

  return <EditorHeader onGoBack={onGoBack} onSubmit={onSubmit} />;
};

export default withRouter(EditorPaneContainer);
