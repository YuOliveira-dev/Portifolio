import React from "react";
import "./styles.css"

interface ProjectCardProps {
  title: string;
  image: string;
  technologies: { name: string; icon: React.ReactNode }[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  technologies,
}) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />

      <div className="project-info">
        <h3 className="project-title">{title}</h3>

        <div className="project-techs">
          {technologies.map((tech, index) => (
            <div key={index} className="project-tech">
              {tech.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
