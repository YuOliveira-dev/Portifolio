import { useState } from "react";
import { scroller, Link } from "react-scroll";
import "./styles.css";

function CompactMenu() {
  const [isOpen, setIsOpen] = useState(true);
  const scrollToSection = (sectionName: string) => {
    scroller.scrollTo(sectionName, {
      duration: 1350,
      smooth: true,
    });
  };

  return (
    <nav className="navbar">
      <img src="./images/Logo.webp" alt="logo png" />
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      <div className={`menu${isOpen ? "close" : ""}`}>
        <button className="close" onClick={() => setIsOpen(true)}>
          x
        </button>
        <div
          className={`sideClose${isOpen ? "isClose" : ""} `}
          onClick={() => setIsOpen(true)}
        ></div>
        <ul className="mobile-list">
          <Link to="secao1">
            <a className="nav-mobile-item">
              <li
                onClick={() => {
                  scrollToSection("secao1");
                }}
              >
                Projetos
              </li>
            </a>
          </Link>
          <Link to="secao2">
            <a className="nav-mobile-item">
              <li onClick={() => scrollToSection("secao2")}>Sobre mim</li>
            </a>
          </Link>
          <Link to="secao3">
            <a className="nav-mobile-item">
              <li onClick={() => scrollToSection("secao3")}>Stacks</li>
            </a>
          </Link>
          <Link to="secao4">
            <a className="nav-mobile-item">
              <li onClick={() => scrollToSection("secao4")}>Contato</li>
            </a>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
console.log();

export default CompactMenu;
