import { Link } from "react-router";
import Navbar from "../navbar";
import "./style.css";

function Header() {
    return (
      <header className="header">
        <div className=" header__inner">
          <Link className="header__logo" to="/">
            Movie Time
          </Link>
          <Navbar />
        </div>
      </header>
    );
}

export default Header;