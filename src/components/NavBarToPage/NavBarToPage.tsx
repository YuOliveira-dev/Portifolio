import "./styles.css";
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";

function NavBarToPage() {
  return (
    <div className="nav-container-to-page">
      <nav className="navbar-desk-to-page">
        <Link to={"/"}>
          <img src="../images/Logo.webp" alt="navbar logo" />
        </Link>
        <div className="nav-list">
          <ul>
            <Link className="button-nav-to-page" to={"/"}>
              Home
              <IoMdHome size={28} />
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBarToPage;
