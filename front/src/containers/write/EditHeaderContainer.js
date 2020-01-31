import React from "react";
import { useSelector, useDispatch } from "react-redux";
import EditorHeader from "components/write/EditorHeader";
import { withRouter } from "react-router-dom";
import { addPost } from "modules/stores/post";
import { addSeries } from "modules/stores/series";

const EditorPaneContainer = ({ history, match }) => {
  const { title, tags, markdown, desc } = useSelector(({ write }) => write);
  const { category } = match.params;
  const dispatch = useDispatch();

  const onGoBack = () => history.goBack();
  const onSubmit = () => {
    match.params.id
      ? dispatch(addPost({ title, markdown, tags, category }))
      : dispatch(addSeries({ title, markdown, desc, category }));
  };

  return <EditorHeader onGoBack={onGoBack} onSubmit={onSubmit} />;
};

export default withRouter(EditorPaneContainer);
