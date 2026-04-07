import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="Navbar">
      <div className="NavContainer">
        <Link to="/" className="NavLogo">
          🚀 NASA Explorer
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
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
// Add navbar component with styling
