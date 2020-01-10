import React, { useEffect, useState } from "react";
import styled from "styled-components";

import marked from "marked";

// prism 관련 코드 불러오기
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
// 지원할 코드 형식들을 불러옵니다.
// http://prismjs.com/#languages-list 참조
import "prismjs/components/prism-bash.min.js";
import "prismjs/components/prism-javascript.min.js";
import "prismjs/components/prism-jsx.min.js";
import "prismjs/components/prism-css.min.js";

export default function MarkdownRender({ markdown }) {
  const [html, setHtml] = useState(
    markdown ? marked(markdown, { breaks: true, sanitize: true }) : ""
  );
  const markup = {
    __html: html
  };
  const renderMarkdown = () => {
    if (!markdown) {
      setHtml("");
      return;
    }
    setHtml(
      marked(markdown, {
        breaks: true,
        sanitize: true
      })
    );
  };
  useEffect(() => {
    renderMarkdown();
    Prism.highlightAll();
  }, [markdown, html]);

  return (
    <>
      <RenderWrap dangerouslySetInnerHTML={markup}></RenderWrap>
    </>
  );
}

// 바꿔진 html들의 속성을 여기서 줄 수 있다.
const RenderWrap = styled.div``;
