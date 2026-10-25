import { NavLink } from "react-router";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink
        className={({ isActive }) =>
          isActive ? "navbar__link navbar__link--active" : "navbar__link"
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "navbar__link navbar__link--active" : "navbar__link"
        }
        to="/movies"
      >
        Movies
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "navbar__link navbar__link--active" : "navbar__link"
        }
        to="/about"
      >
        About
      </NavLink>
    </nav>
  );
}

export default Navbar;
