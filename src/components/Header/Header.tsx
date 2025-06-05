import "./styles.css";
import Background from "./assets/Back-header.webp";
import Navbar from "../Navbar/Navbar";
import { scroller, Link, Element } from "react-scroll";


function Header() {
  const scrollToSection = (sectionName: string) => {
    scroller.scrollTo(sectionName, {
      duration: 1750,
      delay: 0.2,
      smooth: 'easeInOutQuint',
        })
  }
  return (
    <div id="container">
      <header className="header">
        <img
          id="background-image"
          className="background"
          src={Background}
          alt="Imagem de fundo do cabeçalho"
        />
        <Element name="secao0">

        <Navbar />
        </Element>
        <div className="texts">
          <div className="txt-animation">Olá, eu sou o Yuri ✌</div>
          <h1 className="second-text">Designer e desenvolvedor</h1>
          <h2 className="third-text">FullStack em constante aprendizado!</h2>
          <Link href="#" to="secao4" smooth={true} duration={500}>
          <button onClick={()=>{scrollToSection('secao4')}} className="contact-button">Entre em contato!</button>
          </Link>
          
        </div>
        
      </header>
    </div>
  );
};

export default Header;
