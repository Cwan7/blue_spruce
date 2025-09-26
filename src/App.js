import React from 'react';
import { Link } from 'react-scroll';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Products from './components/Products';
import './App.css';

function App() {
  return (
    <div className="App">
      <header style={styles.header}>
        <div style={styles.iconContainer}>
          <img
            src="/BlueSpruceIcon.jpg"
            alt="Blue Spruce Icon"
            style={styles.icon}
          />
        </div>
        <div style={styles.navWrapper}>
          <nav style={styles.nav}>
            <Link to="about" smooth={true} duration={500} spy={true} style={styles.navLink} activeStyle={styles.navLinkActive} offset={-80} >About</Link>
            <Link to="contact" smooth={true} duration={500} spy={true} style={styles.navLink} activeStyle={styles.navLinkActive} offset={-80} >Contact</Link>
            <Link to="services" smooth={true} duration={500} spy={true} style={styles.navLink} activeStyle={styles.navLinkActive} offset={-80} >Services</Link>
            <Link to="products" smooth={true} duration={500} spy={true} style={styles.navLink} activeStyle={styles.navLinkActive} offset={-80} >Products</Link>
          </nav>
        </div>
        <button style={styles.quoteButton}>Get a Quote</button>
      </header>

      <main>
        <About />
        <Contact />
        <Services />
        <Products />
      </main>
    </div>
  );
}

export default App;

const styles = {
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,             // ensure header spans full width
    display: 'flex',
    alignItems: 'center',
    padding: '10px 12px', // horizontal padding
    backgroundColor: '#505050ff',
    zIndex: 1000,
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 8,       
  },
  icon: {
    height: '40px',
    objectFit: 'contain',
  },
  navWrapper: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  nav: {
    display: 'flex',
    gap: '24px',
    alignItems: 'center',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    cursor: 'pointer',
    padding: '10px 12px',
    userSelect: 'none',
  },
  navLinkActive: {
    color: '#60a8b8',
    backgroundColor: 'rgba(200, 200, 200, 0.08)',
    borderRadius: '4px',
  },
  quoteButton: {
    marginRight: '24px',   
    backgroundColor: '#60a8b8',
    color: 'white',
    border: 'none',
    padding: '10px 18px',
    cursor: 'pointer',
    borderRadius: '4px',
    fontWeight: '600',
  },
};


