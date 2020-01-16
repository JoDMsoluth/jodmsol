import React from "react";
import styled from "styled-components";
import palette from "lib/styles/palette";
import MarkdownRender from "../common/markdown/MarkdownRender";

export default function PreviewPane({ markdown, title }) {
  return (
    <>
      <PreviewWrap>
        <PreviewTitle>{title}</PreviewTitle>
        <PreviewContent>
          <MarkdownRender markdown={markdown} />
        </PreviewContent>
      </PreviewWrap>
    </>
  );
}

const PreviewWrap = styled.div`
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
  font-size: 1.125rem;
`;
const PreviewTitle = styled.div`
  font-size: 2.5rem;
  font-weight: 300;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${palette.gray3};
`;
const PreviewContent = styled.div``;
