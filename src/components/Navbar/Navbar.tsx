import { useEffect, useState } from "react";
import "./styles.css";
import CompactMenu from "../CompactMenu/CompactMenu";
import { scroller, Link } from 'react-scroll';


function Navbar() {
  const scrollToSection = (sectionName: string) => {
    scroller.scrollTo(sectionName, {
      duration: 1750,
      delay: 0.2,
      smooth: 'easeInOutQuint',
    });
  };
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="nav-container">
      {!isMobile && (
        <nav className="navbar-desk">
          <img src="./images/projects/Logo.png" alt="navbar logo" />
          <div className="nav-list">
            <ul>
              <Link to="secao1">
              <a href="./">
                <li onClick={()=>{scrollToSection('secao1')}}>Projetos</li>
              </a>
              </Link>
              <Link to="secao2">
              <a href="./">
                <li onClick={() =>{scrollToSection('secao2')}}>Sobre Mim</li>
              </a>
              </Link>
              <Link to="secao3">
              <a href="./">
                <li onClick={()=>{scrollToSection('secao3')}}>Stacks</li>
              </a>
              </Link>
              <Link to="secao4">
              <a href="./">
                <li onClick={()=>{scrollToSection('secao4')}}>Contact me</li>
              </a>
              </Link>
            </ul>
          </div>
        </nav>
      )}
      ;
      {isMobile && (

       <CompactMenu  />
      )}
    </div>
  );
}

export default Navbar;
