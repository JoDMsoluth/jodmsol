import React from "react";
import styled, { css } from "styled-components";
import arrange from "./styles/arrage";
import palette from "./styles/palette";

const StyledIcon = styled.div`
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  background: white;
  background-color:${palette.gray0};
  ${arrange.center}
  
  ${props =>
    props.inline &&
    css`
      margin-right: 1rem;
    `}
  
  ${props =>
    props.border &&
    css`
      border: 1px solid ${palette.gray7};
    `}
  
  ${props =>
    props.size === "large" &&
    css`
      width: 7rem;
      height: 7rem;
      font-size: ${props => (props.font ? "0.9rem" : "4rem")};
    `}
  ${props =>
    props.size === "medium" &&
    css`
      width: 5rem;
      height: 5rem;
      font-size: ${props => (props.font ? "0.9rem" : "3rem")};
    `}
  ${props =>
    props.size === "small" &&
    css`
      width: 3rem;
      height: 3rem;
    `}
    
  ${props =>
    props.size === "ssmall" &&
    css`
      width: 2rem;
      height: 2rem;
    `}
`;

const CustomIcon = ({
  children,
  border,
  inline,
  font,
  size = "medium",
  ...props
}) => {
  return (
    <>
      <StyledIcon
        size={size}
        font={font}
        border={border}
        inline={inline}
        {...props}
      >
        {children}
      </StyledIcon>
    </>
  );
};

export default CustomIcon;
