import { findByPlaceholderText } from '@testing-library/dom';
import React, { useRef, useState } from 'react';
import { motion, useInView } from "framer-motion";
import { Link } from 'react-scroll';

export default function Services() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  const [hover , setHover] = useState(false);
  
const items = [
    "Copier And Printer Sales",
    "Copier And Printer Service",
    "Rentals (Long- Or Short-Term)",
    "Convention, Office, Or Event Rentals",
    "IT Service Copiers/Printers",
    "Supplies (In Stock And To Order)",
    "Leasing Options Available",
  ];

  return (
    <div style={styles.gradientContainer}>
    <motion.section
      ref={sectionRef}
      id="services"
      style={styles.container}
      initial={{ opacity: 0 }} 
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }} 
    >
      <div style={styles.bulletContainer}>
        <h2 style={styles.bulletTitle}>What We Do</h2>
        <ul style={styles.bulletList}>
          {items.map((item, index) => (
            <Link
              key={index}
              to="contact"          // 👈 scrolls to the Contact section
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              style={{ textDecoration: "none" }} // remove underline
            >
            <li
              key={index}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(null)}
              style={{
                ...styles.bulletItem,
                ...(hover === index ? styles.bulletItemHover : {}),
              }}
            >
              {item}
            </li>
            </Link>
          ))}
        </ul>
      </div>
      <div style={styles.content}>
        <div style={styles.trophyContainer}>
          <img
          src='/trophy2.png'alt='Trophy'style={styles.trophy}
          />
          <img src='/trophy1.png' alt='Trophy'style={styles.trophy}
          />
          <img src='/trophy3.png'alt='Trophy'style={styles.trophy}
          />
        </div>
        <div style={styles.serviceContainer}>
          <h2 style={styles.serviceTitle}>Family Owned & Operated</h2>
          <p style={styles.serviceText}>Blue Spruce Concepts Inc. has been Denver's metro area copier experts for over 35
            years. We sell new, pre-owned, and lease options to fit your business
            needs. Need service? Our technicians deliver same- or next-day copier
            repairs and supplies to keep you running. As a small business ourselves, we
            know your time matters—call today for fast, reliable copier solutions.</p>
        </div>
      </div>
    </motion.section>
    </div>
  );
}
const styles = {
  gradientContainer: {
      background: "linear-gradient(to bottom, #ffffff 0%, #cdcdcd 100%)",
    },
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: '20px',
  },
  content: {
   display: 'flex',
   flexDirection: 'column',
   padding: '20px',
  },
  trophyContainer: {
    flex: 1,
  },
  trophy: {
    height: '300px'
  },
  serviceContainer: {
    flex: 1,
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: '0 4px 8px rgba(77, 138, 150, 0.5)',
    textAlign: "center",
    margin: '0 auto',
    maxWidth: '1000px',
  },
  serviceTitle: {
    fontFamily: "'Helvetica', sans-serif",
    fontSize: "2em",
    color: "#2c3e50",
    marginBottom: "15px",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  serviceText: {
    fontSize: "1.1em",
    color: "#666",
    lineHeight: "1.6",
    marginBottom: "20px",
  },
  bulletContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column", // Stack title and list vertically
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100%",
    minWidth: "200px",
    maxWidth: '300px',
    padding: "20px",
    backgroundColor: "#fff",
    boxShadow: '0 4px 8px rgba(77, 138, 150, 0.5)',
  },
  bulletTitle: {
    fontFamily: "'Helvetica', sans-serif",
    fontSize: "1.6em",
    color: "#2c3e50",
    marginBottom: "20px",
    textAlign: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  bulletList: {
    listStyleType: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  bulletItem: {
    backgroundColor: "#f9f9f9",
    padding: "12px 16px",
    borderRadius: "6px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    fontSize: "1.1em",
    color: "#333",
    transition: "transform 0.2s, box-shadow 0.2s",
    cursor: "default",
  },
  bulletItemHover: {
    transform: "translateY(-2px)",
    backgroundColor: '#ededed',
    boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
  },
}