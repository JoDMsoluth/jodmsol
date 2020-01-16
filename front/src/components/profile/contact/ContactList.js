import React from "react";
import styled from "styled-components";
import arrange from "lib/styles/arrage";
import palette from "lib/styles/palette";
import font from "lib/styles/font";

export function ContactList() {
  return (
    <>
      <ContactListWrap>
        <ContactListTitle>Other contacts</ContactListTitle>
        <ContactListIcon>
          <div>
            <ContactIcon className="fas fa-map-marker-alt"></ContactIcon>
            <span>Seoul, South Korea</span>
          </div>
          <div>
            <ContactIcon className="fas fa-envelope"></ContactIcon>
            <span>jodmsoluth@gamil.com</span>
          </div>
          <div>
            <ContactIcon className="fas fa-phone"></ContactIcon>
            <span>(+82)010-4365-0214</span>
          </div>
        </ContactListIcon>
      </ContactListWrap>
    </>
  );
}

const ContactListWrap = styled.div`
    padding : 3rem 2rem 10rem 4rem;
    width : 100%
    height: 100%;
    
  ${arrange.center}
  flex-direction: column;
    color : ${palette.gray2}
`;

const ContactListTitle = styled.div`
  ${font.normalFont}
  font-size : 2rem;
  margin-bottom 3rem;
`;
const ContactListIcon = styled.div`
  ${font.normalFont}
  text-align : left;
  font-size: 1rem;
  & div {
    margin-bottom: 2rem;
  }
`;
const ContactIcon = styled.i`
  margin-right: 2rem;
`;
