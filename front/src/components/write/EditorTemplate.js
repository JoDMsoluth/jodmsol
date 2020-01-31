import React, { useState, useEffect } from "react";
import styled from "styled-components";
import palette from "lib/styles/palette";
import { INITIALIZE } from "modules/stores/write";
import { useDispatch } from "react-redux";

export default function EditTemplate({ header, editor, preview }) {
  const dispatch = useDispatch();
  useEffect(() => {
    return () => dispatch({ type: INITIALIZE });
  });
  const [leftPercent, setLeftPercent] = useState(0.5);
  const handleMouseMove = e => {
    setLeftPercent(e.clientX / window.innerWidth);
  };
  const handleMouseUp = e => {
    document.body.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  };
  const handleSeparatorMouseDown = e => {
    document.body.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };
  return (
    <>
      <EditorWrap>
        {header}
        <WriteWrap>
          <EditWrap leftPercent={leftPercent}>{editor}</EditWrap>
          <PreviewWrap leftPercent={leftPercent}>{preview}</PreviewWrap>
          <SeparatorBar
            leftPercent={leftPercent}
            onMouseDown={handleSeparatorMouseDown}
          ></SeparatorBar>
        </WriteWrap>
      </EditorWrap>
    </>
  );
}

const EditorWrap = styled.div`
  width: 100%;
  background: ${palette.gray1};
`;
const WriteWrap = styled.div`
  height: calc(100vh - 4rem);
  display: flex;
  position: relative;
`;
const EditWrap = styled.div`
  height: 100%;
  display: flex;
  min-width: 0;
  overflow: auto;
  flex: ${props => props && `${props.leftPercent + 0.03}`};
`;
const PreviewWrap = styled.div`
  height: 100%;
  display: flex;
  min-width: 0;
  overflow: auto;
  flex: ${props => props && `calc(1 - ${props.leftPercent + 0.03})`};
`;
const SeparatorBar = styled.div`
  width: 1rem;
  height: 100%;
  position: absolute;

  top: 0;
  left: ${props => props && `${props.leftPercent * 100}%`};
  transform: translate(50%);
  background: transparent;
  cursor: col-resize;
`;
