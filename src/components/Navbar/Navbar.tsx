import React from "react";
import "./styles.css";
import logo from "../Header/assets/Logo.png"

const Navbar: React.FC = () => {
    return (
        <div className="nav-container">

      <nav className="navbar">
        <img className="logo" src={logo} alt="Logotipo do portfólio" />
        <button className="Btn-nav">Inicio</button>
        <button className="Btn-nav">Projetos</button>
        <button className="Btn-nav">Sobre</button>
        <button className="Btn-nav">Contato</button>

       
      </nav>
      
        </div>
    );
  };

  export default Navbar