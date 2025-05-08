import React from "react";
import "./styles.css";
import Background from "./assets/Back-header.png";
import Navbar from "../Navbar/Navbar";


const Header: React.FC = () => {
  return (
    <div id="container">
      <header className="header">
        <img
          id="background-image"
          className="background"
          src={Background}
          alt="Imagem de fundo do cabeçalho"
        />
        <Navbar />
        <div className="texts">
          <h3 className="first-text">Olá, eu sou o Yuri ✌</h3>
          <h1 className="second-text">Designer e desenvolvedor</h1>
          <h2 className="third-text">FullStack em constante aprendizado!</h2>
          <button className="contact-button">Contact me</button>
        </div>
        <div className="socials"></div>
      </header>
    </div>
  );
};

export default Header;
