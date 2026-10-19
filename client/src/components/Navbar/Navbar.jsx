import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Menu,
  X,
  House,
  UserRound,
  Code2,
  FolderGit2,
  GraduationCap,
  Mail,
} from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home", icon: House },
    { name: "About", href: "#about", icon: UserRound },
    { name: "Skills", href: "#skills", icon: Code2 },
    { name: "Projects", href: "#projects", icon: FolderGit2 },
    { name: "Education", href: "#education", icon: GraduationCap },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* DESKTOP LOGO */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-bracket">&lt;</span>
          PORTFOLIO
          <span className="logo-bracket">/&gt;</span>
        </Link>

        {/* MOBILE PORTFOLIO LOGO */}
        <Link to="/" className="mobile-logo" onClick={closeMenu}>
          <span className="logo-bracket">&lt;</span>
          PORTFOLIO
          <span className="logo-bracket">/&gt;</span>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="navbar-links">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="nav-link"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X size={27} /> : <Menu size={27} />}
        </button>

        {/* MOBILE ICON MENU */}
        <div
          id="mobile-navigation"
          className={`mobile-nav-menu ${menuOpen ? "active" : ""}`}
        >
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.name}
                href={item.href}
                className="mobile-nav-link"
                aria-label={item.name}
                title={item.name}
                onClick={closeMenu}
              >
                <Icon size={23} />
                <span>{item.name}</span>
              </a>
            );
          })}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;