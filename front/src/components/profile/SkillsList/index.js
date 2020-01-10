import React from "react";
import styled from "styled-components";
import SkillCard from "./SkillCard";
import frontEndImg from "statics/images/front.PNG";
import backEndImg from "statics/images/back.PNG";
import devOpsImg from "statics/images/devops.PNG";
import ProfileComponentLayout from "../common/ProfileComponentLayout";
import ProjectList from "./ProjectList";

const skillCardContent = [
  {
    frontImg: frontEndImg,
    frontContent: "Front-End",
    backContent: ["HTML+CSS+JS", "React+Redux", "Typescript"]
  },
  {
    frontImg: backEndImg,
    frontContent: "Back-End",
    backContent: ["NodeJS", "MongoDB", "Mysql"]
  },
  {
    frontImg: devOpsImg,
    frontContent: "Dev-Ops",
    backContent: ["GitHub"]
  }
];

export default function SkillList() {
  return (
    <>
      <ProfileComponentLayout title="Skills List" id="skillsList">
        <CardListContainer>
          {skillCardContent.map((cardContent, i) => (
            <SkillCard key={i} cardContent={cardContent}></SkillCard>
          ))}
        </CardListContainer>
        <ProjectList />
      </ProfileComponentLayout>
    </>
  );
}
const CardListContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 5rem;
`;
