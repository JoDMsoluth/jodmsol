import React from 'react';
import PreviewPane from 'components/write/PreviewPane';
import { useSelector } from 'react-redux';

export default function PreviewPaneContainer() {
  const { title, markdown } = useSelector(state => state.write);
  return (
    <>
      <PreviewPane title={title} markdown={markdown} />
    </>
  );
}
