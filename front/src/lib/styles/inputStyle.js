import styled from "styled-components";

export const InputContainer = styled.div`
  margin-bottom: 1.5rem;
  position: relative;
  width: 100%;
  height: 35px;
  color: rgba(0, 0, 255, 0.25);
`;

export const InputSpan = styled.input`
  outline: none;
  border: 1px solid white;
  background: ghostwhite;
  border-radius: 7px;
  height: 100%;
  padding-left: 35px;
`;

const InputStyle = {
  InputContainer,
  InputSpan
};

export default InputStyle;
