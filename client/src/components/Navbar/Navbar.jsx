import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-container">

        {/* LOGO */}
        <Link to="/" className="navbar-logo">
          <span className="logo-bracket">&lt;</span>
          PORTFOLIO
          <span className="logo-bracket">/&gt;</span>
        </Link>

        {/* NAV LINKS */}
        <div className="navbar-links">

          <a href="#home" className="nav-link">
            Home
          </a>

          <a href="#about" className="nav-link">
            About
          </a>

          <a href="#skills" className="nav-link">
            Skills
          </a>

          <a href="#projects" className="nav-link">
            Projects
          </a>

          <a href="#education" className="nav-link nav-link">
            Education
          </a>

          <a href="#contact" className="nav-link contact-link">
            Contact Me
          </a>



        </div>

      </div>

    </nav>
  );
}

export default Navbar;