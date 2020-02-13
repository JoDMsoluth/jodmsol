import React from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import jodsolProjectImg from 'statics/images/jodsolProject.PNG';
import coverImg from 'statics/images/introBgCenter.png';

// const contentData = [
//   {
//     coverImg: kickVillageProjectImg,
//     title: 'KickVillage',
//     desc: 'rental service kickboard App',
//     uploadDate: '2019. 10. 16.',
//   },
//   {
//     coverImg: jodsolProjectImg,
//     title: 'JodsolBlog',
//     desc: 'introduce & management blog for web project',
//     uploadDate: '2020. 12. 26.',
//   },
//   {
//     coverImg: coverImg,
//     title: 'A',
//     desc: 'B',
//     uploadDate: '2020. 1. 1.',
//   },
//   {
//     coverImg: coverImg,
//     title: 'A',
//     desc: 'B',
//     uploadDate: '2020. 1. 1.',
//   },
//   {
//     coverImg: coverImg,
//     title: 'A',
//     desc: 'B',
//     uploadDate: '2020. 1. 1.',
//   },
//   {
//     coverImg: coverImg,
//     title: 'A',
//     desc: 'B',
//     uploadDate: '2020. 1. 1.',
//   },
//   {
//     coverImg: coverImg,
//     title: 'A',
//     desc: 'B',
//     uploadDate: '2020. 1. 1.',
//   },
//   {
//     coverImg: coverImg,
//     title: 'A',
//     desc: 'B',
//     uploadDate: '2020. 1. 1.',
//   },
// ];

export default function ProjectList({ projects, loading, projectError }) {
  if (projectError) {
    console.log('post is not exist');
  }
  if (loading || !projects) {
    return null;
  }
  return (
    <>
      <ContentListWrap>
        {projects.map((project, i) => (
          <ProjectCard key={`${project.title}${i}`} project={project} />
        ))}
      </ContentListWrap>
    </>
  );
}

const ContentListWrap = styled.div`
  padding: 3rem 10rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 22rem 22rem 22rem;
`;
