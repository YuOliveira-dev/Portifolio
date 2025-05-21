import { useEffect, useState } from "react";
import "./styles.css";
import CompactMenu from "../CompactMenu/CompactMenu";

function Navbar() {
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
              <a href="./">
                <li>Projetos</li>
              </a>
              <a href="./">
                <li>Sobre Mim</li>
              </a>
              <a href="./">
                <li>Stacks</li>
              </a>
              <a href="./">
                <li>Contact me</li>
              </a>
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
