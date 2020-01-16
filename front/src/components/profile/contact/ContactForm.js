import React, { useState, useCallback } from "react";
import styled from "styled-components";
import font from "lib/styles/font";
import palette from "lib/styles/palette";
import { InputSpan, InputContainer } from "lib/styles/inputStyle";
import "statics/css/icon.css";
import CustomButton from "lib/CustomButton";
import arrange from "lib/styles/arrage";

export default function ContactForm() {
  const useInput = (initialValue = null) => {
    const [value, setValue] = useState(initialValue);
    const setter = useCallback(e => {
      setValue(e.target.value);
    }, []);
    return [value, setter];
  };

  const [userName, setUserName] = useInput("");
  const [userMail, setUserMail] = useInput("");
  const [mailTitle, setMailTitle] = useInput("");
  const [mailContent, setMailContent] = useInput("");

  return (
    <FormWrap>
      <FormTitle>Send me a mail</FormTitle>
      <form action="action_page.php">
        <InputContainer>
          <InputSpan
            type="text"
            name="userName"
            placeholder="Your name"
            value={userName}
            onChange={setUserName}
          />
          <i className="fas fa-user input-icon"></i>
        </InputContainer>
        <InputContainer>
          <InputSpan
            type="text"
            name="email"
            placeholder="Email address"
            value={userMail}
            onChange={setUserMail}
          />
          <i className="fas fa-envelope input-icon"></i>
        </InputContainer>
        <InputContainer>
          <InputSpan
            type="text"
            name="mailTitle"
            placeholder="Message title"
            value={mailTitle}
            onChange={setMailTitle}
          />
          <i className="fas fa-heading input-icon"></i>
        </InputContainer>
        <InputContainer>
          <InputSpan
            type="text"
            name="mailContent"
            placeholder="Write your message"
            value={mailContent}
            onChange={setMailContent}
          />
          <i className="fas fa-comment-alt input-icon"></i>
        </InputContainer>
        <StyledCustomButton color="lightGray" size="medium">
          Send
        </StyledCustomButton>
      </form>
    </FormWrap>
  );
}
const FormWrap = styled.div`
  ${arrange.center}
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: ${palette.gray2};
`;

const FormTitle = styled.div`
  ${font.normalFont}
  font-size : 2rem;
  margin-bottom 3rem;
`;

const StyledCustomButton = styled(CustomButton)`
  float: right;
  border-color : ${palette.gray4}
  color : ${palette.gray6}
  &:hover {
    border-color : ${palette.gray7}
    color : ${palette.gray8}
    transform : scale(1.1)
  }
`;
