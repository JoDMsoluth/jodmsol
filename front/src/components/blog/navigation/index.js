import React from "react";
import styled from "styled-components";
import NavButton from "./navButton";
import NavBar from "./navBar";
import SearchBar from "./searchBar";
import palette from "lib/styles/palette";

export default function BlogNavigation() {
  return (
    <NavWrap>
      <NavButton />
      <NavBar />
      <SearchBar />
    </NavWrap>
  );
}

const NavWrap = styled.div`
  position: sticky;
  top: 0;
  display: grid;
  grid-template-columns: 12.5rem 1fr 12.5rem;
  padding: 0.5rem 0;
  height: 4rem;
  background: white;
  border-bottom: 1px solid ${palette.gray5};
  z-index: 100;
`;
