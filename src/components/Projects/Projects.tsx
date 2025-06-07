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
      path: "redesign-itau",
    },
    {
      id: "2",
      title: "Pix Na SumUp",
      image: "./images/projects/SumUp.webp",
      category: "UX/UI",
      path: "pix-na-sumUp",
    },
    {
      id: "3",
      title: "Login e Cadastro em PHP",
      image: "./images/projects/thumb-php.png",
      category: "Desenvolvimento",
      path: "system-in-php",
    },
    {
      id: "4",
      title: "Ecommerce My Shop",
      image: "./images/projects/thumb-My-shop.png",
      category: "Desenvolvimento",
      path: "my-Shop",
    },
    {
       id: "5",
      title: "Projeto do Portifólio",
      image: "./images/projects/thumb-portifolio.jpg",
      category: "Desenvolvimento",
      path: "Portifolio-Project",
    }
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
