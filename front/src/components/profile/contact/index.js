import React, { useState } from "react";
import styled, { css } from "styled-components";
import font from "lib/styles/font";
import palette from "lib/styles/palette";
import transitions from "lib/styles/transition";
import ContactForm from "./ContactForm";
import { ContactCover } from "./ContactCover";
import { ContactList } from "./ContactList";
import ProfileComponentLayout from "../common/ProfileComponentLayout";

export default function ProfileContact() {
  const [flip, setFlip] = useState(false);

  return (
    <ProfileComponentLayout title="Contact Me" id="contactMe">
      <ContactLayout>
        <ContactContentWrap flip={flip} onClick={() => setFlip(true)}>
          <ContactFormWrap>
            <ContactFormFront>
              <ContactCover />
            </ContactFormFront>
            <ContactFormBack>
              <ContactForm />
            </ContactFormBack>
          </ContactFormWrap>
          <ContactList />
        </ContactContentWrap>
      </ContactLayout>
    </ProfileComponentLayout>
  );
}
const ContactLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 21rem 2rem 23rem 1fr;
  grid-template-rows: 35rem;
`;

const ContactContentWrap = styled.div`
  grid-column : 3/5
  width: 25rem;
  height: 35rem;
  perspective: 1000px;
  background: ${palette.gray9};
  & > div:first-child {
    ${props =>
      props.flip &&
      css`
        animation: ${transitions.flipBook} 0.5s;
        animation-fill-mode: forwards;
      `}
  }
`;

const ContactFormWrap = styled.div`
  width: 23rem;
  height: 100%;
  position: absolute;
  left: 2rem;
  transform: rotateY(0deg);
  transform-style: preserve-3d;
  transform-origin: left;
  transition: all 0.5s;
`;

const ContactFormFront = styled.div`
  margin: 0;
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: ${palette.gray7};
`;
const ContactFormBack = styled.div`
  margin: 0;
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: ${palette.gray6};
  transform: rotateY(180deg);
`;
