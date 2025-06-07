import { useState } from "react";
import "./styles.css";
import { Link } from "react-scroll";

function BackToTop() {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div className="backToTopContainer">
      <Link
        to="secao0"
        href="#"
        smooth={true}
        duration={1350}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="buttonBackToTop"
        aria-label="Botão para retornar ao topo da página"
      >
       <img src="./images/Arrow.svg" alt="icone do botão para retornar para o topo da página" />
      </Link>

      <h3 className={`isClosed${isHovering ? "No" : ""}`}>Volte ao início</h3>
    </div>
  );
}

export default BackToTop;
