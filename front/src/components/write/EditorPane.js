import React, { useRef, useEffect, useCallback } from "react";
import styled from "styled-components";
import palette from "lib/styles/palette";
import CodeMirror from "codemirror";

import "codemirror/mode/markdown/markdown"; // 마크다운 문법 색상
// 마크다운 내부에 들어가는 코드 색상
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/jsx/jsx";
import "codemirror/mode/css/css";
import "codemirror/mode/shell/shell";

// CodeMirror를 위한 CSS 스타일
import "codemirror/lib/codemirror.css";
import "codemirror/theme/monokai.css";
import { useRouteMatch } from "react-router-dom";

export default function EditorPane({
  desc,
  title,
  markdown,
  tags,
  onChangeInput
}) {
  const match = useRouteMatch();
  const editor = useRef();
  const codeMirror = useRef();

  const handleChangeMarkdown = useCallback(cm => {
    onChangeInput("markdown", cm.getValue());
  }, []);
  const onChangehandle = useCallback(e => {
    onChangeInput(e.target.name, e.target.value);
  });

  useEffect(() => {
    const cm = CodeMirror.fromTextArea(editor.current, {
      mode: "markdown",
      theme: "monokai",
      placeholder: "write here...",
      lineNumbers: true,
      lineWrapping: true
    });
    codeMirror.current = cm;
    cm.focus();
    cm.on("change", handleChangeMarkdown);

    if (markdown) {
      cm.setValue(markdown);
    }
    return () => {
      cm.toTextArea();
    };
  }, []);

  return (
    <>
      <PaneWrap>
        <TitleInput
          type="text"
          name="title"
          value={title}
          onChange={onChangehandle}
          placeholder="title"
        />
        {!match.params.id && (
          <DescInput
            type="text"
            name="desc"
            value={desc}
            onChange={onChangehandle}
            placeholder="description"
          />
        )}
        <CodeEditor ref={editor}></CodeEditor>
        {match.params.id && (
          <TagsWrap>
            <div>태그</div>
            <input
              name="tags"
              value={tags}
              placeholder="태그를 입력하세요"
              onChange={onChangehandle}
            />
          </TagsWrap>
        )}
      </PaneWrap>
    </>
  );
}

const PaneWrap = styled.div`
  background: black;
  flex: 1;
  display: flex;
  flex-direction: column;

  .CodeMirror {
    flex: 1;
  }
  & input {
    border: none;
    outline: none;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.9);
    &::placeholder {
      color: rgba(255, 255, 255, 0.75);
    }
    background: ${palette.gray8};
  }
`;
const TitleInput = styled.input`
  width: 100%;
  height: 5rem;
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: 500;
`;
const DescInput = styled.input`
  width: 100%;
  height: 5rem;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 300;
`;
const CodeEditor = styled.textarea``;
const TagsWrap = styled.div`
  padding: 0 1rem;
  height: 2rem;
  display: flex;
  align-items: center;
  background: ${palette.gray8};
  & > div {
    font-size: 1rem;
    color: white;
    font-weight: 600;
    margin-right: 1rem;
    padding-bottom: 0.2rem;
  }
  & > input {
    flex: 1;
  }
`;
