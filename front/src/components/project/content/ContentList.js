import React from "react";
import styled from "styled-components";
import ProjectContentCard from "./ContentCard";
import kickVillageProjectImg from "statics/images/kickVillageProject.PNG";
import jodsolProjectImg from "statics/images/jodsolProject.PNG";
import coverImg from "statics/images/introBgCenter.png";

const contentData = [
  {
    coverImg: kickVillageProjectImg,
    title: "KickVillage",
    desc: "rental service kickboard App",
    uploadDate: "2019. 10. 16."
  },
  {
    coverImg: jodsolProjectImg,
    title: "JodsolBlog",
    desc: "introduce & management blog for web project",
    uploadDate: "2020. 12. 26."
  },
  {
    coverImg: coverImg,
    title: "A",
    desc: "B",
    uploadDate: "2020. 1. 1."
  },
  {
    coverImg: coverImg,
    title: "A",
    desc: "B",
    uploadDate: "2020. 1. 1."
  },
  {
    coverImg: coverImg,
    title: "A",
    desc: "B",
    uploadDate: "2020. 1. 1."
  },
  {
    coverImg: coverImg,
    title: "A",
    desc: "B",
    uploadDate: "2020. 1. 1."
  },
  {
    coverImg: coverImg,
    title: "A",
    desc: "B",
    uploadDate: "2020. 1. 1."
  },
  {
    coverImg: coverImg,
    title: "A",
    desc: "B",
    uploadDate: "2020. 1. 1."
  }
];

export default function ProjectContentList() {
  return (
    <>
      <ContentListWrap>
        {contentData.map(content => (
          <ProjectContentCard key={content.title} content={content} />
        ))}
      </ContentListWrap>
    </>
  );
}

const ContentListWrap = styled.div`
  display: grid;
  grid-template-columns: 18rem 18rem 15rem;
  grid-template-rows: 22rem;
`;
