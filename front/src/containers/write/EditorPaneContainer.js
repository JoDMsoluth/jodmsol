import React, { useCallback } from 'react';
import EditorPane from 'components/write/EditorPane';
import { useSelector, useDispatch } from 'react-redux';
import { changeInput } from 'modules/stores/write';

export default function EditorPaneContainer() {
  const { title, markdown } = useSelector(state => state.write);
  const dispatch = useDispatch();

  const handleChangeInput = useCallback(
    (name, value) => dispatch(changeInput({ name, value })),
    [dispatch],
  );
  return (
    <EditorPane
      title={title}
      markdown={markdown}
      onChangeInput={handleChangeInput}
    />
  );
}
