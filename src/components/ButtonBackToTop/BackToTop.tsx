import { useState } from "react";
import "./styles.css";
import { IoCaretBackCircle } from "react-icons/io5";
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
        <IoCaretBackCircle
          size={48}
          style={{ transform: "rotate(90deg)", color: "#ff000476" }}
        />
      </Link>

      <h3 className={`isClosed${isHovering ? "No" : ""}`}>Volte ao início</h3>
    </div>
  );
}

export default BackToTop;
