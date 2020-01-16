import React from "react";
import styled, { css } from "styled-components";
import palette, { buttonColor } from "lib/styles/palette";

const StyledButton = styled.button`
    display : inline-flex;
    align-items : center;
    justify-content: center;
    font-weight: bold;
    cursor: pointer;
    outline:0;
    border:none;
    border-radius:50px;
    background: ${props => buttonColor[props.color].background};
    color: ${props => buttonColor[props.color].color};
    border : ${props => props.color === "lightGray" && "2px solid"}
    border-color : ${props =>
      props.color === "lightGray" && buttonColor[props.color].color};
    & : hover,
    & : focus {
      outline:0;
      background : ${props => buttonColor[props.color].hoverBackground}
    }
  padding-top: 0;
  padding-bottom: 0;
  ${props =>
    props.inline &&
    css`
      & + & {
        margin-left: 0.5rem;
      }
    `}
  ${props =>
    props.size === "medium" &&
    css`
      height: 2rem;
      padding-left: 1.25rem;
      padding-right: 1.25rem;
      font-size: 1rem;
    `}
    ${props =>
      props.size === "large" &&
      css`
        height: 2.5rem;
        padding-left: 1.125rem;
        padding-right: 1.125rem;
        & + & {
          margin-left: 0.875rem;
        }
        font-size: 1.125rem;
      `}
    &:disabled {
      cursor: not-allowed;
      background: ${palette.gray3};
      color: ${palette.gray5};
      &:hover {
        background: ${palette.gray3};
        color: ${palette.gray5};
      }
    }
`;

const CustomButton = ({
  children,
  inline,
  color = "teal",
  size = "medium",
  ...props
}) => {
  return (
    <>
      <StyledButton color={color} inline={inline} size={size} {...props}>
        {children}
      </StyledButton>
    </>
  );
};

export default CustomButton;
