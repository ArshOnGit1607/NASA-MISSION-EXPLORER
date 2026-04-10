import { Link } from "react-router-dom";
import "./Navbar.css";
import nasaLogo from "../assets/image copy.png";

function Navbar({ theme, toggleTheme }) {
  return (
    <nav className="Navbar">
      <div className="NavContainer">
        <Link to="/" className="NavLogo">
          <img src={nasaLogo} alt="NASA logo" style={{ height: "28px", marginRight: "8px", verticalAlign: "middle" }} />
          NASA Explorer
        </Link>
        <ul className="NavMenu">
          <li className="NavItem">
            <Link to="/" className="NavLink">
              Home
            </Link>
          </li>
          <li className="NavItem">
            <Link to="/favorites" className="NavLink">
              ⭐ Favorites
            </Link>
          </li>
          <li className="NavItem">
            <button className="ThemeToggle" onClick={toggleTheme} title="Toggle theme">
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
// Add navbar component with styling
// Fix favorites import casing issue
