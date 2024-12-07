import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/Styles/Header.css"; // Assuming you will create this file for CSS

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="nav">
      <div className="container">
        <div className="nav__wrapper">
          <Link to="/" className="logo">
            <img src="/src/assets/Images/logo.svg" alt="shaif's cuisine" />
          </Link>
          <nav>
            {/* Mobile Menu Button */}
            <div className="nav__icon" onClick={toggleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </div>
            <div className={`nav__bgOverlay ${menuOpen ? "open" : ""}`} onClick={toggleMenu}></div>
            <ul className={`nav__list ${menuOpen ? "open" : ""}`}>
              <li><Link className="nav__link" to="/Home">Home</Link></li>
              <li><Link className="nav__link" to="/menu">Menu</Link></li>
              <li><Link className="nav__link" to="/about">About</Link></li>
              <li><Link className="nav__link" to="/contact">Contact</Link></li>
              <li><Link to="/Booktable" className="btn primary-btn">Book Table</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
