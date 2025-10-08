import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerLogoContainer">
        <img
          src="/BlueSpruceLogoWords.png"
          alt="Blue Spruce Concepts Logo"
          className="footerLogo"
        />
      </div>
      <div className="infoContainer">
        <div className="addressContainer">
          <h1>Contact Info</h1>
          <p className="text">Blue Spruce Concepts, Inc.</p>
          <p className="text">3213 W. Hampden Ave.</p>
          <p className="text">Englewood, CO 80110</p>
          <p className="text">(303) 278 7211</p>
        </div>
        <div className="hoursContainer">
          <h2>Business Hours</h2>
          <p className="text">Monday 8:00 AM - 5:00 PM</p>
          <p className="text">Tuesday 8:00 AM - 5:00 PM</p>
          <p className="text">Wednesday 8:00 AM - 5:00 PM</p>
          <p className="text">Thursday 8:00 AM - 5:00 PM</p>
          <p className="text">Friday 8:00 AM - 5:00 PM</p>
        </div>
      </div>
      <div className="legalContainer">
        <p>Copyright © {new Date().getFullYear()} Blue Spruce Concepts, Inc., All rights reserved.</p>
        <Link className="link" to='/privacy' target="_blank" rel="noopener noreferrer">Privacy Policy</Link>
        <Link className="link" to='/terms' target="_blank" rel="noopener noreferrer">Terms Of Service</Link>
      </div>
    </div>
  );
}