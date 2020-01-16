import React, { useEffect } from "react";
import styled from "styled-components";
import Typed from "typed.js";
import palette from "lib/styles/palette";

const AutoText = ({ strings }) => {
  useEffect(() => {
    const options = {
      strings: strings,
      typeSpeed: 50,
      backSpeed: 50
    };
    const startElement = document.querySelector(".type-content");
    const typed = new Typed(startElement, options);

    return () => {
      typed.destroy();
    };
  });

  return (
    <AutoTextWrap className="wrap">
      <AutoTextTitle>JOB WANTED</AutoTextTitle>
      <div>Hi, I'm Hyehyeong Jo</div>
      <div className="type-wrap">
        <span className="type-content" style={{ whiteSpace: "pre" }}></span>
      </div>
    </AutoTextWrap>
  );
};

export default AutoText;

const AutoTextWrap = styled.div`
  color : ${palette.gray7}
  font-weight : 900;
  position: absolute;
  top: 8rem;
  left: 11rem;
  line-height: 1.7rem;
`;
const AutoTextTitle = styled.h1`
  color: black;
  font-weight: 900;
`;
