import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <button className="mobile-menu-button" onClick={toggleMobileMenu}>
          ☰
        </button>
      </div>
      <ul className={`navbar-menu ${isMobileMenuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={handleLinkClick}>
            Início
          </Link>
        </li>
        <li>
          <Link to="/quiz" onClick={handleLinkClick}>
            Quiz
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={handleLinkClick}>
            Sobre
          </Link>
        </li>
        <li>
          <Link to="/resources" onClick={handleLinkClick}>
            Recursos
          </Link>
        </li>
        <li>
          <Link to="/stories" onClick={handleLinkClick}>
            Histórias
          </Link>
        </li>
        <li>
          <Link to="/tips" onClick={handleLinkClick}>
            Dicas
          </Link>
        </li>
        <li>
          <Link to="/feedback" onClick={handleLinkClick}>
            Feedback
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
