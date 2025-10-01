import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

export default function Products() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

  const copiers = [
    {
      id: 1,
      brand: "Canon",
      series: "ImageRunner Advance C5500",
      models: ["C5560i", "C5550i", "C5540i", "C5535i"],
      image: "/copier-C5500.jpeg",
      text: "The Canon ImageRunner Advance C5500 series is a high-performance color multifunction printer designed for busy offices, offering fast print speeds and advanced workflow features.",
    },
    {
      id: 2,
      brand: "Canon",
      series: "ImageRunner Advance 4500",
      models: ["4550i", "4545i", "4535i"],
      image: "/copier-4500.webp",
      text: "The Canon 4500 series is a black & white multifunction copier ideal for medium to large workgroups, balancing speed, reliability, and efficiency.",
    },
    {
      id: 3,
      brand: "Canon",
      series: "ImageRunner Advance DX C5700",
      models: ["DX C5760", "DX C5750", "DX C5740", "DX C5735"],
      image: "/copier-DXC5700.webp",
      text: "The Canon DX C5700 series delivers high-quality color printing with smart workflow solutions and cloud integration for modern workplaces.",
    },
    {
      id: 4,
      brand: "Canon",
      series: "ImageRunner Advance 4700",
      models: ["4750", "4745", "4735"],
      image: "/copier-4700.jpeg",
      text: "The Canon 4700 series is a black & white multifunction device known for dependable performance, high print quality, and lower operational costs.",
    },
    {
      id: 5,
      brand: "Canon",
      series: "ImageRunner Advance 525iF",
      models: [],
      image: "/copier-525if.jpeg",
      text: "The Canon 525iF is a compact black & white MFP that’s perfect for small businesses needing enterprise-level performance in a smaller footprint.",
    },
    {
      id: 6,
      brand: "Canon",
      series: "ImageRunner Advance DX C257iF",
      models: [],
      image: "/copier-C257if.jpeg",
      text: "The Canon DX C257iF is a compact color MFP designed for smaller offices, providing robust security, cloud features, and excellent color quality.",
    },
  ];

  const [selectedCopier, setSelectedCopier] = useState(copiers[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedCopier((prev) => {
        const currentIndex = copiers.findIndex((copier) => copier.id === prev.id);
        const nextIndex = (currentIndex + 1) % copiers.length;
        return copiers[nextIndex];
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [copiers]);

  return (
    <div style={styles.gradientContainer}>
      <motion.section
        ref={sectionRef}
        id="products"
        style={styles.container}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h2 style={styles.heading}>Our Products</h2>

        <div style={styles.seriesRow}>
          {copiers.map((copier) => (
            <div
              key={copier.id}
              style={{
                ...styles.seriesItem,
                ...(selectedCopier?.id === copier.id ? styles.seriesItemActive : {}),
              }}
              onClick={() => setSelectedCopier(copier)}
            >
              {copier.brand} {copier.series}
            </div>
          ))}
        </div>

        <div style={styles.modal}>
          <img
            src={selectedCopier.image}
            alt={selectedCopier.series}
            style={styles.modalImage}
          />
          <h3>
            {selectedCopier.brand} {selectedCopier.series}
          </h3>
          <p>
            <strong>Models:</strong>{" "}
            {selectedCopier.models.join(", ") || "N/A"}
          </p>
          <p>{selectedCopier.text}</p>
        </div>
      </motion.section>
    </div>
  );
}

const styles = {
  gradientContainer: {
    background: "linear-gradient(to bottom, #cdcdcd 0%, #ffffff 100%)",
  },
  container: {
    padding: "40px",
    textAlign: "center",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "20px",
  },
  seriesRow: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    flexWrap: "wrap",
    marginBottom: "30px",
  },
  seriesItem: {
    padding: "12px 18px",
    borderRadius: "8px",
    backgroundColor: "#4263bb",
    color: "#fff",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  seriesItemActive: {
    backgroundColor: "#4d8a96",
    color: "#fff",
    fontWeight: "bold",
  },
  modal: {
    marginTop: "20px",
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    maxWidth: "600px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  modalImage: {
    maxWidth: "100%",
    height: "auto",
    marginBottom: "15px",
  },
};

