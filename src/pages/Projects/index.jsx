import React from 'react';
import { useParams } from 'react-router-dom';
import ProjectsIntro from '../../components/ProjectsIntro';
import ProjectsArchive from '../../components/ProjectsArchive';

export default function Home() {
  const {id} = useParams();

  return (
    <main className='main'>
      <ProjectsIntro/>
      <ProjectsArchive filterId={id}/>
    </main>
  );
}