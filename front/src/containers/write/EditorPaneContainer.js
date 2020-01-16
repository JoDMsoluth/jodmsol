import React, { useCallback } from "react";
import EditorPane from "components/write/EditorPane";
import { useSelector, useDispatch } from "react-redux";
import { changeInput } from "modules/stores/write";

export default function EditorPaneContainer() {
  const { title, tags, markdown } = useSelector(state => state.write);
  console.log("selector", title, tags, markdown);
  const dispatch = useDispatch();

  const handleChangeInput = useCallback((name, value) =>
    dispatch(changeInput({ name, value }))
  );
  return (
    <EditorPane
      title={title}
      markdown={markdown}
      tags={tags}
      onChangeInput={handleChangeInput}
    />
  );
}
