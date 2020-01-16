import React from "react";
import styled from "styled-components";
import CustomIcon from "lib/CustomIcon";
import palette from "lib/styles/palette";
import { Link } from "react-router-dom";

export default function NavButton() {
  return (
    <ButtonContainer>
      <CustomIcon size="ssmall" inline>
        <i className="fas fa-sign-out-alt"></i>
      </CustomIcon>
      <Link to={`/blog/study?page=1`}>
        <CustomIcon size="ssmall" inline>
          <i className="fas fa-book"></i>
        </CustomIcon>
      </Link>
      <Link to={`/blog/daily?page=1`}>
        <CustomIcon size="ssmall" inline>
          <i className="fas fa-home"></i>
        </CustomIcon>
      </Link>
      <Link to={`/blog/game?page=1`}>
        <CustomIcon size="ssmall" inline>
          <i className="fas fa-gamepad"></i>
        </CustomIcon>
      </Link>
    </ButtonContainer>
  );
}

const ButtonContainer = styled.div`
    position :relative;
    left : 2rem
    width : 3rem;
    height : 3rem;
    padding 0.5rem;
    background-color : ${palette.gray7};
    color : ${palette.gray7}
    border-radius : 50px;
    white-space : nowrap;
    overflow:hidden;
    transition : width .3s ease-in;
    & > div {
        transition : all .3s ease-in;
        transform : rotate(0deg)
    }
    &:hover {
        width : 12rem;
        & > div:first-child {
            transition : all .3s ease-in;
            transform : rotate(-180deg)
        }
    }
`;
