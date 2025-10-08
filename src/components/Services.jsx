import React, { useRef } from 'react';
import { motion, useInView } from "framer-motion";
import { Link } from 'react-scroll';
import './Services.css';

export default function Services() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

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
    <div className="servicesGradientContainer">
      <motion.section
        ref={sectionRef}
        id="services"
        className="servicesContainer"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className="bulletContainer">
          <h2 className="bulletTitle">What We Do</h2>
          <ul className="bulletList">
            {items.map((item, index) => (
              <Link
                key={index}
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                className="bulletLink"
              >
                <li className="bulletItem">
                  {item}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="content">
          <div className="trophyContainer">
            <img src="/trophy2.png" alt="Trophy" className="trophy" />
            <img src="/trophy1.png" alt="Trophy" className="trophy" />
            <img src="/trophy3.png" alt="Trophy" className="trophy" />
          </div>
          <div className="familyOwnedContainer">
            <h2 className="serviceTitle">Family Owned & Operated</h2>
            <p className="serviceText">
              Blue Spruce Concepts Inc. has been Denver's metro area copier experts for over 35
              years. We sell new, pre-owned, and lease options to fit your business
              needs. Need service? Our technicians deliver same- or next-day copier
              repairs and supplies to keep you running. As a small business ourselves, we
              know your time matters—call today for fast, reliable copier solutions.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}