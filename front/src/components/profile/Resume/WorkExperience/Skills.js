import React from "react";
import styled from "styled-components";
import reactLogo from "statics/images/react.PNG";
import htmlLogo from "statics/images/html.png";
import reduxLogo from "statics/images/redux.PNG";
import typescriptLogo from "statics/images/typescript.PNG";
import nodeLogo from "statics/images/node.PNG";
import mysqlLogo from "statics/images/mysql.png";
import mongodbLogo from "statics/images/mongodb.png";
import gitLogo from "statics/images/git.PNG";
import palette from "lib/styles/palette";

export default function Skills() {
  return (
    <Wrap>
      <Title>Skills</Title>
      <ContentWrap>
        <Content>
          <div style={{ marginBottom: "0.6rem" }}>Frontend</div>
          <LogoWrap>
            <SkillsLogo
              src={htmlLogo}
              alt="htmlLogo"
              width="50px"
              height="50px"
            ></SkillsLogo>
            <SkillsDesc>{`HTML\nCSS\nJS`}</SkillsDesc>
          </LogoWrap>
          <LogoWrap>
            <SkillsLogo
              src={reactLogo}
              alt="reactLogo"
              width="50px"
              height="50px"
            ></SkillsLogo>
            <SkillsDesc>React</SkillsDesc>
          </LogoWrap>
          <LogoWrap>
            <SkillsLogo
              src={reduxLogo}
              alt="reduxLogo"
              width="50px"
              height="50px"
            ></SkillsLogo>
            <SkillsDesc>Redux</SkillsDesc>
          </LogoWrap>
          <LogoWrap>
            <SkillsLogo
              src={typescriptLogo}
              alt="typescriptLogo"
              width="50px"
              height="50px"
            ></SkillsLogo>
            <SkillsDesc>{`Type\nscript`}</SkillsDesc>
          </LogoWrap>
        </Content>
        <Content>
          <div style={{ marginBottom: "0.6rem" }}>Backend</div>
          <LogoWrap>
            <SkillsLogo
              src={nodeLogo}
              alt="nodeLogo"
              width="50px"
              height="50px"
            ></SkillsLogo>
            <SkillsDesc>Node</SkillsDesc>
          </LogoWrap>
          <LogoWrap>
            <SkillsLogo
              src={mongodbLogo}
              alt="mongodbLogo"
              width="50px"
              height="50px"
            ></SkillsLogo>
            <SkillsDesc>{`Mongo\nDB`}</SkillsDesc>
          </LogoWrap>
          <LogoWrap>
            <SkillsLogo
              src={mysqlLogo}
              alt="mysqlLogo"
              width="50px"
              height="50px"
            ></SkillsLogo>
            <SkillsDesc>MySQL</SkillsDesc>
          </LogoWrap>
        </Content>
        <Content>
          <div style={{ marginBottom: "0.6rem" }}>Devops</div>
          <LogoWrap>
            <SkillsLogo
              src={gitLogo}
              alt="gitLogo"
              width="50px"
              height="50px"
            ></SkillsLogo>
            <SkillsDesc>Git</SkillsDesc>
          </LogoWrap>
        </Content>
      </ContentWrap>
    </Wrap>
  );
}

const Wrap = styled.div`
  margin-bottom: 1.5rem;
`;
const Title = styled.div`
  font-weight: 900;
  font-size: 1rem;
  margin-bottom: 0.6rem;
`;
const ContentWrap = styled.div``;
const Content = styled.div``;
const LogoWrap = styled.span`
  display: inline-block;
  position: relative;
  border: 1px solid ${palette.gray1};
  border-radius: 5rem;
  overflow: hidden;
  width: 50px;
  height: 50px;
  margin-right: 1rem;
  &:last-child {
    margin-right: 0;
  }
  &:hover > img {
    transform: scale(1.4);
    transition: all 0.5s;
    filter: blur(2px) brightness(80%);
  }
  &:hover > div {
    opacity: 1;
    transition: all 0.5s;
    transform: translate(-50%, -50%);
  }
`;

const SkillsLogo = styled.img`
    border-radius:5rem
    backface-visibility : hidden;
`;
const SkillsDesc = styled.div`
  line-height: 13px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 20%);
  color: ${palette.gray2};
  font-size: 0.8rem;
  text-align: center;
  opacity: 0;
  transition: all 0.5s;
`;
