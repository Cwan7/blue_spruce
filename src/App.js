import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Products from './components/Products';
import Footer from './components/Footer';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import './App.css';

function AppContent() {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === "/privacy" || location.pathname === "/terms";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      {!hideHeaderFooter && (
        <header className="header">
          <div className="iconContainer">
            <img
              src="/BlueSpruceIcon.jpg"
              alt="Blue Spruce Icon"
              className="icon"
            />
          </div>
          <div className="navWrapper">
            <nav className="nav">
              <Link
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                className="navLink"
                activeClass="navLinkActive"
                offset={-80}
              >
                About
              </Link>
              <Link
                to="products"
                smooth={true}
                duration={500}
                spy={true}
                className="navLink"
                activeClass="navLinkActive"
                offset={-80}
              >
                Products
              </Link>
              <Link
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                className="navLink"
                activeClass="navLinkActive"
                offset={-80}
              >
                Services
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                className="navLink"
                activeClass="navLinkActive"
                offset={-80}

              >
                Contact
              </Link>
            </nav>
          </div>
          <button className="quoteButton">Get a Quote</button>
          <div className="hamburger">
            <span className="menuIcon" onClick={toggleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff">
                <path d="M0 0h24v24H0V0z" fill="none"/>
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
              </svg>
            </span>
          </div>
          {isMenuOpen && (
            <div className="mobileMenu">
              <Link
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                className="mobileNavLink"
                activeClass="navLinkActive"
                offset={-80}
              >
                About
              </Link>
              <Link
                to="products"
                smooth={true}
                duration={500}
                spy={true}
                className="mobileNavLink"
                activeClass="navLinkActive"
                offset={-80}
              >
                Products
              </Link>
              <Link
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                className="mobileNavLink"
                activeClass="navLinkActive"
                offset={-80}
              >
                Services
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                className="mobileNavLink"
                activeClass="navLinkActive"
                offset={-80}
              >
                Contact
              </Link>
            </div>
          )}
        </header>
      )}

      <main>
        <Routes>
          <Route path="/" element={<><About isMenuOpen={isMenuOpen}/><Products /><Services /><Contact /></>} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
        {!hideHeaderFooter && <Footer />}
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;