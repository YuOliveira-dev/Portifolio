import { useEffect, useState } from "react";
import "./styles.css";
import CompactMenu from "../CompactMenu/CompactMenu";
import { scroller, Link } from "react-scroll";

function Navbar() {
  const scrollToSection = (sectionName: string) => {
    scroller.scrollTo(sectionName, {
      duration: 1750,
      delay: 0.4,
      smooth: "easeInOutQuint",
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
          <img src="./images/Logo.webp" alt="navbar logo" />
          <div className="nav-list">
            <ul>
              <Link href="#" to="secao1" smooth={true} duration={500}>
                <li
                  onClick={() => {
                    scrollToSection("secao1");
                  }}
                >
                  Projetos
                </li>
              </Link>
              <Link href="#" to="secao2" smooth={true} duration={500}>
                <li
                  onClick={() => {
                    scrollToSection("secao2");
                  }}
                >
                  Sobre Mim
                </li>
              </Link>
              <Link href="#" to="secao3" smooth={true} duration={500}>
                <li
                  onClick={() => {
                    scrollToSection("secao3");
                  }}
                >
                  Stacks
                </li>
              </Link>
              <Link href="#" to="secao4" smooth={true} duration={500}>
                <li
                  onClick={() => {
                    scrollToSection("secao4");
                  }}
                >
                  Contact me
                </li>
              </Link>
            </ul>
          </div>
        </nav>
      )}
      ;{isMobile && <CompactMenu />}
    </div>
  );
}

export default Navbar;
