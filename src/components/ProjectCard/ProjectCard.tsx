import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  id: string;
  title: string;
  image: string;
  path: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  image,
  path,
}) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} id={id} className="project-image" />

      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <Link
          to={`/projects/${path}`}
          onClick={() => window.scrollTo(0, 0)}
          className="btn-to-page"
        >
          Ver mais
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
