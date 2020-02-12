import React from 'react';
import styled from 'styled-components';
import smoothScrollTo from 'lib/scrollTo';
import palette from 'lib/styles/palette';
import font from 'lib/styles/font';
import PropTypes from 'prop-types';

export default function PostToc({ toc, activeHeading, onActiveHeading }) {
  if (!toc) return null;
  return (
    <>
      <TocWrap>
        <TocListWrap>
          {toc.map(({ anchor, level, text }, i) => (
            <TocList key={`${anchor}${i}`} active={activeHeading === anchor}>
              <span
                style={{
                  paddingLeft: `${(level === 1 ? 0 : level - 2) * 0.5}rem`,
                }}
              >
                <div
                  onClick={() => {
                    smoothScrollTo(`${anchor}`, 150);
                    onActiveHeading(anchor);
                  }}
                >
                  {text}
                </div>
              </span>
            </TocList>
          ))}
        </TocListWrap>
      </TocWrap>
    </>
  );
}

PostToc.propTypes = {
  toc: PropTypes.array,
  activeHeading: PropTypes.string,
  onActiveHeading: PropTypes.func,
};

// list - none style
const TocWrap = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
`;
const TocListWrap = styled.ul`
  position: absolute;
  top: 2rem;
  right: -5rem;
  line-height: 0.5rem;
  font-size: 0.8rem;
  ${font.boldFont}
  list-style: none;
  padding-left: 0;
`;

const TocList = styled.li`
  color: ${props => (props.active ? `${palette.gray6}` : `${palette.gray4}`)};
  & + & {
    margin-top: 0.1rem;
  }
  & {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
  }
  &:hover {
    color: ${palette.gray6};
  }
`;
