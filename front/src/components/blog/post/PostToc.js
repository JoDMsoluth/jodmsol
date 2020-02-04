import React from 'react';
import styled from 'styled-components';

export default function PostToc({ toc }) {
  if (!toc) return null;
  return (
    <>
      <div>
        <TocListWrap>
          {toc.map(({ anchor, level, text }, i) => (
            <li>
              <span
                key={i}
                style={{
                  paddingLeft: `${(level === 1 ? 0 : level - 2) * 0.5}rem`,
                }}
              >
                <a href={`#${anchor}`}>{text}</a>
              </span>
            </li>
          ))}
        </TocListWrap>
      </div>
    </>
  );
}

// list - none style
const TocListWrap = styled.ul`
    list-style : none;
    padding-left: 0;
    & > li+li {
        margin-top : 0.5rem;
    }
    & > li {
        padding-top : 0.25rem;
        padding-bottom : 0.25rem;a
    }
`;
