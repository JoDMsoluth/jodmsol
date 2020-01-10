import React from "react";
import styled from "styled-components";
import CustomButton from "src/lib/CustomButton";
import PrintResume from "src/lib/PrintResume";
import palette from "src/lib/styles/palette";
import arrange from "src/lib/styles/arrage";
import ResumeContent from "./ResumeContent";

export default function Resume() {
  return (
    <CareerWrap id="Resume">
      <PrintButtonWrap>
        <a href="../../../statics/images/resume.PNG" download="resume">
          <PrintButton
            color="lightGray"
            size="large"
            inline
            download={ResumeContent}
          >
            PDF
          </PrintButton>
        </a>
        <PrintButton
          color="darkGray"
          size="large"
          inline
          onClick={() => PrintResume()}
        >
          PRINT
        </PrintButton>
      </PrintButtonWrap>
      <ResumeContent />
    </CareerWrap>
  );
}
const CareerWrap = styled.div`
    padding: 5rem 0;
    border-top : 1px solid
    border-bottom : 1px solid
    border-color: ${palette.gray5}
`;
const PrintButtonWrap = styled.div`
  ${arrange.rowCenter}
`;
const PrintButton = styled(CustomButton)`
  width: 9rem;
  &:first-child {
    margin-right: 5rem;
  }
  &:hover {
    transform: scale(1.1);
  }
`;
