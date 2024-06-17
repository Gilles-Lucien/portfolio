import React from 'react';
import ProjectsIntro from '../../components/ProjectsIntro';
import ProjectsArchive from '../../components/ProjectsArchive';

export default function Home() {
  return (
    <main className='main'>
      <ProjectsIntro/>
      <ProjectsArchive/>
    </main>
  );
}