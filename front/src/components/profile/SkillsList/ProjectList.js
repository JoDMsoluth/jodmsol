import React from "react";
import styled from "styled-components";
import palette from "lib/styles/palette";
import font from "lib/styles/font";
import CustomIcon from "lib/CustomIcon";
import CustomButton from "lib/CustomButton";
import arrange from "lib/styles/arrage";
import transitions from "lib/styles/transition";

export default function ProjectList() {
  return (
    <>
      <ProjectListWrap>
        <ProjectListItem>
          <CustomIcon border inline size="large">
            <i className="fas fa-building"></i>
          </CustomIcon>
          <TextContainer>
            <div>Compony Project</div>
            <div>It is projects that are performed in Compony</div>
            <StyledCustomButton size="small" color="lightGray">
              Go to show
            </StyledCustomButton>
          </TextContainer>
        </ProjectListItem>
        <ProjectListItem>
          <CustomIcon border inline size="large">
            <i className="fas fa-users"></i>
          </CustomIcon>
          <TextContainer>
            <div>Team Project</div>
            <div>It is projects that are performed in team </div>
            <StyledCustomButton size="small" color="lightGray">
              Go to show
            </StyledCustomButton>
          </TextContainer>
        </ProjectListItem>
        <ProjectListItem>
          <CustomIcon border inline size="large">
            <i className="fas fa-user"></i>
          </CustomIcon>
          <TextContainer>
            <div>Personal Project</div>
            <div>It is projects that are performed in person</div>
            <StyledCustomButton size="small" color="lightGray">
              Go to show
            </StyledCustomButton>
          </TextContainer>
        </ProjectListItem>
      </ProjectListWrap>
    </>
  );
}
const ProjectListWrap = styled.div`
    ${arrange.center}
    flex-direction : row;
    width :100%
    height: 12rem;
    background : gray;
`;
const ProjectListItem = styled.div`
  ${arrange.center}
  flex-direction : row;
  height: 10rem;
  width: 23rem;
  border: 1px solid ${palette.gray4};
  background-color: ${palette.gray1};

  animation: ${transitions.slideUp} 1s ease;
  &:hover {
    box-shadow: 2px 3px 15px 0px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
    transition: all 0.2s;
  }
`;

const TextContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 60%;
  margin-bottom: 2rem;
  & div:first-child {
    font-size: 1rem;
    font-weight: 800;
    margin-bottom: 0.3rem;
  }
  & div:nth-child(2) {
    font-size: 0.9rem;
  }
`;

const StyledCustomButton = styled(CustomButton)`
  position: absolute;
  right: 0.5rem;
  bottom: -2rem;
`;
