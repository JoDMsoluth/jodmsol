import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import marked from 'marked';

// prism 관련 코드 불러오기
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
// 지원할 코드 형식들을 불러옵니다.
// http://prismjs.com/#languages-list 참조
import 'prismjs/components/prism-bash.min.js';
import 'prismjs/components/prism-javascript.min.js';
import 'prismjs/components/prism-jsx.min.js';
import 'prismjs/components/prism-css.min.js';
import PropTypes from 'prop-types';

MarkdownPreview.propTypes = {
  markdown: PropTypes.string,
};
export default function MarkdownPreview({ markdown }) {
  const [html, setHtml] = useState(
    markdown ? marked(markdown, { breaks: true }) : '',
  );
  const markup = {
    __html: html,
  };
  const renderMarkdown = () => {
    if (!markdown) {
      setHtml('');
      return;
    }
    setHtml(
      marked(markdown, {
        breaks: true,
      }),
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
