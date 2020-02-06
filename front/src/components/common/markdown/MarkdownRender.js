import React, { useEffect, useState, useRef, useCallback } from 'react';
import styled from 'styled-components';
import debounce from 'lodash/debounce';
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
import { getScrollTop } from 'lib/scrollTo';

function stripHtml(text) {
  const regex = /<\/?[^>]+(>|$)/g;
  return text.replace(regex, '');
}

function checkCustomLexer(text) {
  const checkCode = /<code>(.*?)<\/code>/;
  if (checkCode.test(text)) return null;
  const regex = /!(youtube|twitter|codesandbox)\[(.*?)\]/;
  const match = regex.exec(text);
  if (!match) return null;
  return {
    type: match[1],
    code: match[2],
  };
}

const lexers = {
  youtube: code =>
    `<iframe class="youtube" src="https://www.youtube.com/embed/${code}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  twitter: code =>
    `<div class="twitter-wrapper"><blockquote class="twitter-tweet" data-lang="ko"><a href="https://twitter.com/${code}"></a></blockquote></div>`,
  codesandbox: code =>
    `<iframe src="https://codesandbox.io/embed/${code}" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>`,
};

const renderer = function(toc) {
  const renderer = new marked.Renderer();
  const linkRenderer = renderer.link;
  renderer.link = (href, title, text) => {
    const html = linkRenderer.call(renderer, href, title, text);
    return html.replace(/^<a /, '<a target="_blank" ');
  };
  renderer.heading = function heading(text, level, raw) {
    if (!raw) return '';
    const anchor = this.options.headerPrefix + escapeForUrl(raw.toLowerCase());
    const hasDuplicate = toc.find(item => item.anchor === anchor);
    const filtered = toc.filter(item => item.anchor.indexOf(anchor) > -1);
    const suffix =
      !hasDuplicate && filtered.length === 0 ? '' : `-${filtered.length + 1}`;

    const suffixed = `${anchor}${suffix}`;
    if (level <= 3 && toc) {
      try {
        toc.push({
          anchor: suffixed,
          level,
          text: stripHtml(text),
        });
      } catch (e) {
        console.log(e);
      }
    }
    return `<h${level} id="${suffixed}">${text}</h${level}>`;
  };
  renderer.paragraph = function paragraph(text) {
    const processed = (() => {
      const check = checkCustomLexer(text);
      if (!check) return text;
      return text.replace(
        /!(youtube|twitter|codesandbox)\[(.*?)\]/,
        lexers[check.type](check.code),
      );
    })();
    return `<p>${processed}</p>\n`;
  };

  return renderer;
};

export default function MarkdownRender({
  markdown,
  onSetToc,
  onActiveHeading,
}) {
  const [html, setHtml] = useState('');
  const markup = {
    __html: html,
  };
  let positions = useRef([]);
  let currentHeading = useRef('');
  const toc = [];
  let el = useRef(null);
  let timerId = useRef(null);
  let prevHeight = useRef(null);
  const renderMarkdown = () => {
    if (!markdown) {
      setHtml('');
      return;
    }

    setHtml(marked(markdown));
  };

  const onScroll = useCallback(() => {
    const scrollTop = getScrollTop();
    if (!document.body) return;
    if (!positions || positions.length === 0) return;
    for (let i = positions.length - 1; i > -1; i -= 1) {
      const pos = positions[i];
      if (pos.top < scrollTop + 32) {
        if (pos.id === currentHeading) return;
        currentHeading = pos.id;
        if (!onActiveHeading) return;
        onActiveHeading(pos.id);
        return;
      }
    }
    // not found, activate the first heading
    if (!onActiveHeading) return;
    onActiveHeading(positions[0].id);
  });

  const registerEvent = () => {
    if (!onSetToc) return;
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', updatePositions);
  };

  const unregisterEvent = () => {
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', updatePositions);
  };

  const checkHeight = () => {
    if (timerId) {
      clearTimeout(timerId);
    }

    if (!el) return;
    const currentHeight = el.clientHeight;
    if (prevHeight !== currentHeight) {
      updatePositions();
    }
    prevHeight = currentHeight;
    setTimeout(checkHeight, 500);
  };

  const updatePositions = debounce(() => {
    if (!toc) return;
    const scrollTop = getScrollTop();
    positions = toc.map(({ anchor }) => {
      const dom = document.getElementById(anchor);
      if (!dom) return { top: 0, id: '' };
      return { top: dom.getBoundingClientRect().top + scrollTop, id: anchor };
    });
  }, 20);

  useEffect(() => {
    registerEvent();
    if (html !== '') {
      updatePositions();
      checkHeight();
    }
    toc.length = 0;
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
    return () => {
      unregisterEvent();
    };
  }, [markdown, html]);

  return (
    <>
      <RenderWrap dangerouslySetInnerHTML={markup}></RenderWrap>
    </>
  );
}

// 바꿔진 html들의 속성을 여기서 줄 수 있다.
const RenderWrap = styled.div``;
