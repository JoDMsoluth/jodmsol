import React from "react";
import styled from "styled-components";
import CustomButton from "lib/CustomButton";
import { withRouter } from "react-router-dom";
import palette from "lib/styles/palette";
import transitions from "lib/styles/transition";
import smoothScrollTo, { position } from "lib/scrollTo";

const ContactMeButton = ({ history }) => {
  return (
    <>
      <ContactButtonWrap>
        <ButtonPointer className="far fa-hand-point-right" style={{}} />
        <span>
          <StyledCustomButton
            color="lightGray"
            size="medium"
            inline
            onClick={() => {
              history.push("/print/resume");
            }}
          >
            See Resume
          </StyledCustomButton>
          <StyledCustomButton
            color="darkGray"
            size="medium"
            inline
            onClick={() => {
              history.push("/profile");
            }}
          >
            Contact Me
          </StyledCustomButton>
        </span>
      </ContactButtonWrap>
    </>
  );
};

export default withRouter(ContactMeButton);

const ContactButtonWrap = styled.span`
  display: flex;
  align-items: center;
  position: absolute;
  top: 31rem;
  left: 7rem;
`;

const ButtonPointer = styled.i`
font-size: 3rem;
 margin-right: 1rem
 color : ${palette.gray6}
 animation : ${transitions.pushRight} 2s infinite ease-out;
`;

const StyledCustomButton = styled(CustomButton)`
  position:relative;
  box-sizing: border-box;
  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    border-radius:50px;
    background:${props =>
      props.color === "lightGray" ? palette.gray9 : "inherit"};

    top: 0rem;;
    right: ${props => (props.color === "lightGray" ? "0.5rem" : "0rem")};
    height: 1.7rem;
    width: 7.8rem;
    z-index:-1;
  }
  &:hover::after {
    display: inline-block;
    animation ${transitions.scaleUpOut} .6s ease-out
  }
`;
