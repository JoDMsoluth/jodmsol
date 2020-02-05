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
import { escapeForUrl } from 'lib/escapeForUrl';

const renderer = function(toc) {
  const renderer = new marked.Renderer();
  renderer.heading = function(text, level, raw) {
    if (!raw) return '';
    const anchor = this.options.headerPrefix + escapeForUrl(raw.toLowerCase());
    toc.push({
      anchor: anchor,
      level: level,
      text: text,
    });
    return `<h${level} id="${anchor}">${text}</h${level}>\n`;
  };
  return renderer;
};

export default function MarkdownRender({ markdown, onSetToc }) {
  const [html, setHtml] = useState('');
  const markup = {
    __html: html,
  };
  const renderMarkdown = () => {
    if (!markdown) {
      setHtml('');
      return;
    }

    setHtml(marked(markdown));
  };
  useEffect(() => {
    const toc = [];
    marked.setOptions({
      renderer: renderer(toc),
      gfm: true,
      tables: true,
      breaks: true,
      pedantic: false,
      smartLists: true,
      smartypants: false,
    });
    Prism.highlightAll();
    renderMarkdown();
    onSetToc && onSetToc(toc);
  }, [markdown, html]);

  return (
    <>
      <RenderWrap dangerouslySetInnerHTML={markup}></RenderWrap>
    </>
  );
}

// 바꿔진 html들의 속성을 여기서 줄 수 있다.
const RenderWrap = styled.div``;
