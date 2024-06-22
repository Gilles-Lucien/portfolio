import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleTitle from "../../components/SingleTitle";
import SingleContent from "../../components/SingleContent";
import { fetchProjects } from "../../utils/api/api";

export default function Single() {
  const [projects, setProjects] = useState([]);

  const { id } = useParams();

  const matchingProject =
    projects.length > 0 ? projects.find((project) => project.id === id) : null;

  useEffect(() => {
    fetchProjects().then((data) => {
      const updatedProjects = data.projects.map((project) => ({
        ...project,
      }));
      setProjects(updatedProjects);
    });
  }, [id]);

  return (
    <main className="main">
      {matchingProject ? <SingleTitle {...matchingProject} /> : null}
      {matchingProject ? <SingleContent {...matchingProject} /> : null}
    </main>
  );
}
