import React, { useCallback, useState, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import palette from 'lib/styles/palette';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { parseSearching } from 'lib/parseSearching';

export default function SearchBar() {
  const [searchText, setSearchText] = useState('');
  const [toggleBar, setToggleBar] = useState(false);
  const history = useHistory();
  const match = useRouteMatch();
  const { filter, category } = match.params;
  const inputRef = useRef(null);

  useEffect(() => {
    return () => {
      window.removeEventListener('keydown', escapeKey);
      window.removeEventListener('keydown', enterKey);
    };
  });

  const escapeKey = e => {
    if (e.key === 'Escape') {
      setToggleBar(false);
    }
  };
  const enterKey = e => {
    if (e.key === 'Enter') {
      linkUrl();
    }
  };
  const linkUrl = () => {
    let url;
    if (!filter) {
      url = `/blog/${category}?${parseSearching({ searchText, filter })}`;
    } else {
      url = `/blog/${category}/${filter}?${parseSearching({
        searchText,
        filter,
      })}`;
    }
    history.push(url);
  };
  const onSubmitHandle = useCallback(
    e => {
      e.preventDefault();
      if (toggleBar) {
        setToggleBar(false);
        linkUrl();
      } else {
        inputRef.current.focus();
        setToggleBar(true);
      }
    },
    [searchText, category, filter],
  );

  const onChangeHandle = useCallback(
    e => {
      setSearchText(e.target.value);
    },
    [searchText, toggleBar],
  );

  const onBlurHandle = useCallback(
    e => {
      setToggleBar(false);
      window.removeEventListener('keydown', escapeKey);
      window.removeEventListener('keydown', enterKey);
    },
    [toggleBar],
  );

  return (
    <SearchWrap>
      <SearchForm toggleBar={toggleBar} onSubmit={onSubmitHandle}>
        <input
          type="search"
          value={searchText}
          placeholder="Search here..."
          onChange={onChangeHandle}
          ref={inputRef}
          onBlur={onBlurHandle}
        />
        <i className="fas fa-search" onClick={onSubmitHandle}></i>
      </SearchForm>
    </SearchWrap>
  );
}

const SearchWrap = styled.div`
  justify-self: end;
  margin-right: 2rem;
`;

const SearchForm = styled.form`
  width: ${props => (props.toggleBar ? '12rem' : '3rem')}
  height: 3rem;
  overflow: hidden;
  position: relative;
  background-color: white;
  border-radius: 50px;
  border: 1px solid ${palette.gray6};
  transition: all 0.3s;
  color: ${palette.gray7};
  & > input {
    color: ${palette.gray7};
    height: 3rem;
    width: 9rem;
    right: ${props => (props.toggleBar ? '3rem' : '-3rem')};
    position: absolute;
    background: white;
    padding: 0 15px;
    font-size: 1rem;
    border: none;
    transition: all 0.3s;
  }
  & > input:focus {
    outline: none;
  }
  & > i {
    width: 3rem;
    height: 3rem;
    z-index: 1;
    position: absolute;
    right: 0px;
    top: 0px;
    background-color: ${palette.gray7};
    line-height: 3rem;
    font-size: 30px;
    cursor: pointer;
    text-align: center;
    color: ${palette.gray1};
    transition: all 0.3s;
    border-radius: ${props => props.toggleBar && '50px'};
    transform: ${props => props.toggleBar && 'scale(0.7)'};
  }
  
`;
