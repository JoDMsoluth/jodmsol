import React, { useState } from "react";
import styled from "styled-components";
import palette from "lib/styles/palette";
import { InputSpan, InputContainer } from "lib/styles/inputStyle";
import "statics/css/icon.css";

export default function DeleteQuestion({ comments }) {
  const [password, setPassowrd] = useState("");
  const onChangePassword = e => {
    setPassowrd(e.target.value);
  };
  return (
    <>
      <QuestionWrap>
        <CustomInputWrap>
          <InputSpan
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={onChangePassword}
          />
          <i className="fas fa-key input-icon vertical-center"></i>
        </CustomInputWrap>
      </QuestionWrap>
    </>
  );
}

const QuestionWrap = styled.div`
position : absolute;
top : 0;
right: 0;
padding : 0.5rem 5rem;
background : ${palette.gray0}
width : 20rem;
height: 15rem;
border : 1px solid ${palette.gray1}
`;

const CustomInputWrap = styled(InputContainer)`
  margin-bottom: 0.5rem;
  & > input,
  i {
    color: ${palette.gray6};
  }
`;
