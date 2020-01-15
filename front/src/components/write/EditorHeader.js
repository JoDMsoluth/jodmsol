import React from "react";
import styled from "styled-components";
import CustomButton from "src/lib/CustomButton";
import palette from "src/lib/styles/palette";

export default function EditHeader({ onGoBack, onSubmit }) {
  return (
    <>
      <Header>
        <CustomButton inline color="darkGray" onClick={onGoBack}>
          Back
        </CustomButton>
        <CustomButton
          color="lightGray"
          onClick={onSubmit}
          style={{ marginLeft: "auto" }}
        >
          Post
        </CustomButton>
      </Header>
    </>
  );
}

const Header = styled.div`
  background: ${palette.gray7};
  height: 4rem;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  align-items: center;
`;
