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

const toc = [];

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

const createRenderer = arr => {
  const renderer = new marked.Renderer();
  const linkRenderer = renderer.link;
  renderer.link = (href, title, text) => {
    const html = linkRenderer.call(renderer, href, title, text);
    return html.replace(/^<a /, '<a target="_blank" ');
  };
  renderer.heading = function heading(text, level, raw) {
    if (!raw) return '';
    const anchor = this.options.headerPrefix + escapeForUrl(raw.toLowerCase());
    const hasDuplicate = arr.find(item => item.anchor === anchor);
    const filtered = arr.filter(item => item.anchor.indexOf(anchor) > -1);
    const suffix =
      !hasDuplicate && filtered.length === 0 ? '' : `-${filtered.length + 1}`;

    const suffixed = `${anchor}${suffix}`;
    if (level <= 3 && arr) {
      try {
        arr.push({
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

export default function MarkdownRender({ markdown, onSetToc }) {
  const [html, setHtml] = useState(
    markdown ? marked(markdown, { breaks: true }) : '',
  );
  const markup = {
    __html: html,
  };
  const renderMarkdown = () => {
    toc.length = 0;
    if (!markdown) {
      setHtml('');
      return;
    }
    setHtml(
      marked(markdown, {
        breaks: true,
      }),
      ``,
    );
    marked.setOptions({
      renderer: createRenderer(toc),
      gfm: true,
      tables: true,
      breaks: true,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false,
      xhtml: false,
      highlight(code, lang) {
        return Prism.highlight(
          code,
          Prism.languages[lang] || Prism.languages.markup,
          lang,
        );
      },
    });
    onSetToc && onSetToc(toc);
  };
  useEffect(() => {
    toc.splice(0, toc.length);
    renderMarkdown();

    marked.setOptions({
      renderer: createRenderer(toc),
      gfm: true,
      tables: true,
      breaks: true,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false,
      xhtml: false,
      highlight(code, lang) {
        return Prism.highlight(
          code,
          Prism.languages[lang] || Prism.languages.markup,
          lang,
        );
      },
    });
  }, [markdown, html]);

  return (
    <>
      <RenderWrap dangerouslySetInnerHTML={markup}></RenderWrap>
    </>
  );
}

// 바꿔진 html들의 속성을 여기서 줄 수 있다.
const RenderWrap = styled.div``;

//-----------------------------------------
