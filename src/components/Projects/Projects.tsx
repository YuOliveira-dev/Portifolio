import React, { useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import { CgFigma} from "react-icons/cg";
import { SiAdobephotoshop } from "react-icons/si";
import "./styles.css";

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("todos");

  // Lista de projetos
  const projects = [
    {
      title: "Redesign Itaú",
      image: "./images/projects/Thumb-itau.png",
      category: "UX/UI",
      technologies: [{ name: "Figma", icon: <CgFigma /> }],
    },
    {
      title: "Pix Na SumUp",
      image: "./images/projects/SumUp.png",
      category: "UX/UI",
      technologies: [{ name: "React", icon: <CgFigma /> }],
    },
     {
      title: "Qualquer coisa",
      image: "./images/projects/SumUp.png",
      category: "UX/UI",
      technologies: [{ name: "React", icon: <SiAdobephotoshop />}], 
  },
  {
      title: "Qualquer coisa",
      image: "./images/projects/SumUp.png",
      category: "UX/UI",
      technologies: [{ name: "React", icon: <SiAdobephotoshop />}], 
  },
  ];

 
  const filteredProjects =
    selectedCategory === "todos"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className="projects-section">
      <h2 className="projects-title">Projetos</h2>

      <div className="projects-filters">
        {["todos", "UX/UI", "desenvolvimento"].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`filter-button ${
              selectedCategory === category ? "active" : ""
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="projects-list">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
