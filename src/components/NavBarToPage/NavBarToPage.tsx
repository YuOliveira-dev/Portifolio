import "./styles.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function NavBarToPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`nav-container-to-page ${scrolled ? "nav-scrolled" : ""}`}>
      <nav className="navbar-desk-to-page">
        <Link to={"/"}>
          <img src="../images/Logo.webp" alt="navbar logo" />
        </Link>
        <div className="nav-list">
          <ul>
            <Link className="button-nav-to-page" to={"/"}>
              Página inicial
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBarToPage;
