import { useEffect, useState } from "react";
import "./styles.css";
import logo from "../Header/assets/Logo.png"
import CompactMenu from "../CompactMenu/CompactMenu";

function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
  }, []);

    return (


      <div className="nav-container">
      
          <nav className="navbar">
        <img className="logo" src={logo} alt="Logotipo do portfólio" />
        
        <button className="Btn-nav">Inicio</button>
        <button className="Btn-nav">Projetos</button>
        <button className="Btn-nav">Sobre</button>
        <button className="Btn-nav">Contato</button>

      {isMobile && (

        <CompactMenu />
        
      )};
       
      </nav>
      
        </div>
    );
  };

  export default Navbar