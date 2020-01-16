import React from "react";
import styled from "styled-components";
import palette from "lib/styles/palette";
import CustomIcon from "lib/CustomIcon";

export default function IntroCoreValue() {
  return (
    <div>
      <ContentTitle>Core Value</ContentTitle>
      <ContentWrap>
        <div>
          <CustomIcon inline border size="medium">
            <i className="fab fa-gripfire"></i>
          </CustomIcon>
          <CoreValueText>{`Strong\n Passion`}</CoreValueText>
        </div>
        <div>
          <CustomIcon inline border size="medium">
            <i className="far fa-comments"></i>
          </CustomIcon>
          <CoreValueText>{`Active\n Comunication`}</CoreValueText>
        </div>
        <div>
          <CustomIcon inline border size="medium">
            <i className="far fa-handshake"></i>
          </CustomIcon>
          <CoreValueText>{`Absolute\n Trust`}</CoreValueText>
        </div>
      </ContentWrap>
    </div>
  );
}
const ContentTitle = styled.div`
  text-align: right;
  margin: 0 1.5rem 1rem 0;
  font-size: 1.5rem;
  font-weight: 900;
`;
const ContentWrap = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 3rem;
  font-weight: 500;
  color: ${palette.gray7};
`;
const CoreValueText = styled.div`
  margin-top : 0.2rem
  font-size: 0.7rem;
  text-align: center;
  white-space: pre-line;
  margin-right: 1rem;
`;
