import React from "react";
import styled from "styled-components";
import palette from "lib/styles/palette";

export default function SearchBar() {
  return (
    <SearchWrap>
      <SearchForm>
        <input type="search" placeholder="Search here..." />
        <i className="fas fa-search"></i>
      </SearchForm>
    </SearchWrap>
  );
}

const SearchWrap = styled.div`
  justify-self: end;
  margin-right: 2rem;
`;

const SearchForm = styled.form`
  width: 3rem;
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
    right: -9rem;
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
  }

  &:hover {
    width: 12rem;
    & > input {
      right: 3rem;
    }
    & > i {
      border-radius: 50px;
      transform: scale(0.7);
    }
  }
`;
