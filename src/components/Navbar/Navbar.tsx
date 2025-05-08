import React from "react";
import "./styles.css";
import logo from "../Header/assets/Logo.png"

const Navbar: React.FC = () => {
    return (
        <div className="nav-container">

      <nav className="navbar">
        <img className="logo" src={logo} alt="Logotipo do portfólio" />
        <button className="about">Sobre</button>
        <button className="projects">Projetos</button>
        <button className="stacks">Stacks</button>
        <button className="contact">Contato</button>
      </nav>
        </div>
    );
  };

  export default Navbar