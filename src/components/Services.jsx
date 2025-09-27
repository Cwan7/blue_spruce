import { findByPlaceholderText } from '@testing-library/dom';
import React from 'react';

export default function Services() {
  return (
    <section id="services" style={styles.container}>
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
        <h2 style={styles.serviceTitle}>Why Choose Us?</h2>
        <p style={styles.serviceText}>Blue Spruce Concepts, Inc. is proud to offer an outstanding 
          selection of new and pre-owned copiers for sale or lease, 
          featuring trusted brands such as Canon, Konica Minolta, and Muratec. 
          Thanks to our strong industry partnerships, we’re able to provide customers 
          with exceptional deals on low-meter printers—giving you reliable, like-new 
          equipment at a fraction of the cost. Our competitive pricing, ability to service 
          nearly all makes and models, and commitment to customer satisfaction are just a few 
          of the reasons we’re the premier choice for businesses across the Metro Denver area.</p>
      </div>
    </section>
  );
}
const styles = {
  container: {
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
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
    textAlign: "center",
    margin: '0 auto',
    maxWidth: '1000px',
  },
  serviceTitle: {
    fontFamily: "'Georgia', serif",
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
}