import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SingleTitle from "../../components/SingleTitle";
import SingleContent from "../../components/SingleContent";
import { fetchProjects } from "../../utils/api/api";
import Loader from "../../components/Loader";

export default function Single() {
  const [projects, setProjects] = useState([]);
  const [isProjectLoaded, setIsProjectLoaded] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  const matchingProject =
    projects.length > 0 ? projects.find((project) => project.id === id) : null;

  const totalProjects = projects.length;

  useEffect(() => {
    fetchProjects().then((data) => {
      const updatedProjects = data.projects.map((project) => ({
        ...project,
      }));
      setProjects(updatedProjects);
      setIsProjectLoaded(true);

      // vérifie si l'id de params match avec le projet chargé. Si non on redirige vers la page d'erreur
      const projectExists = updatedProjects.some(
        (project) => project.id === id
      );
      if (!projectExists) {
        navigate("/error");
      }
    });
  }, [id, navigate]);

  if (!isProjectLoaded) {
    // Afficher le loader si le projet n'est pas encore chargé
    return <Loader />;
  }

  return (
    <main className="main">
      {matchingProject ? <SingleTitle {...matchingProject} /> : null}
      {matchingProject && totalProjects > 0 ? (
        <SingleContent
          project={matchingProject}
          totalProjects={totalProjects}
        />
      ) : null}
    </main>
  );
}
