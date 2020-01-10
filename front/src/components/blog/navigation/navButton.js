import React from "react";
import styled from "styled-components";
import CustomIcon from "src/lib/CustomIcon";
import palette from "src/lib/styles/palette";

export default function NavButton() {
  return (
    <ButtonContainer>
      <CustomIcon size="ssmall" inline>
        <i className="fas fa-sign-out-alt"></i>
      </CustomIcon>
      <CustomIcon size="ssmall" inline>
        <i className="fas fa-book"></i>
      </CustomIcon>
      <CustomIcon size="ssmall" inline>
        <i class="fas fa-home"></i>
      </CustomIcon>
      <CustomIcon size="ssmall" inline>
        <i className="fas fa-gamepad"></i>
      </CustomIcon>
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
