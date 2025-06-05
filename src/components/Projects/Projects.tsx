import React, { useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./styles.css";

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("todos");

  // Lista de projetos
  const projects = [
    {
      id: "1",
      title: "Redesign Itaú",
      image: "./images/projects/Thumb-itau.webp",
      category: "UX/UI",
      path: "redesign-itau"
      
     
    },
    {
      id: "2",
      title: "Pix Na SumUp",
      image: "./images/projects/SumUp.webp",
      category: "UX/UI",
      path: "pix-na-sumUp"
      
      
    },
     {
      id: "3",
      title: "Qualquer coisa",
      image: "./images/projects/SumUp.webp",
      category: "UX/UI",
      path: "/"
     
       
  },
  {
      id: "4",
      title: "Qualquer coisa",
      image: "./images/projects/SumUp.webp",
      category: "UX/UI",
      path: "/"
      
      
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
        {["todos", "UX/UI", "Desenvolvimento"].map((category) => (
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
