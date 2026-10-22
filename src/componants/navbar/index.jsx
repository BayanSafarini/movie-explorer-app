import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="navbar">
      <Link className="navbar__link" to="/">
        Home
      </Link>
      <Link className="navbar__link" to="/movies">
        Movies
      </Link>
      <Link className="navbar__link" to="/about">
        About
      </Link>
    </nav>
  );
}

export default Navbar;
