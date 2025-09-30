import React, { useState, useRef } from "react";
import {motion, useInView} from "framer-motion";

export default function About() {
  const [startIndex, setStartIndex] = useState(0);
  const cardsPerPage = 4;
  const [hover, setHover] = useState(false);
  const [reviewHover, setReviewHover] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px 0px -100px 0px" });

  const reviews = [
    {
      id: 1,
      author: "Conor W",
      rating: 5,
      date: "2025-04-28",
      profilePhoto: '/cowboy_conor.jpeg',
      text: "The service Blue Spruce Concepts provides is above and beyond. Never going back! Thanks for always being on call and helping in a pinch.",
    },
    {
      id: 2,
      author: "Rocky Mountain Law",
      rating: 5,
      date: "2025-07-02",
      profilePhoto: '/skyline-review.jpg',
      text: "Very knowledgeable and friendly staff. They was able to provide us with a great new printer and at a low cost. The delivery and set up was fast, allowing us to get back to business in a flash. Further, instead of just handing us a manual and leaving, Dennis provided us with a personal and impressively detailed explanation of the printer's functions. We couldn't be happier with our new machine and look forward to working with Blue Spruce Concepts in the future.",
    },
    {
      id: 3,
      author: "Ken DeLucas",
      rating: 5,
      date: "2025-06-15",
      profilePhoto: null,
      text: "Blue Spruce Concepts has provided for all of our copier needs for the last 15 years. Dennis has set us up for guaranteed 100% uptime with their excellent service and support, and a back up production copier. These two copiers are also serve as printers on our network, and they also fax and scan all types of documents with ease. I highly recommend Blue Spruce Concepts to any company, and especially those that cannot tolerate any downtime on their copiers.",
    },
    {
      id: 4,
      author: "Genny K",
      rating: 5,
      date: "2025-04-28",
      profilePhoto: '/flower_genny.jpg',
      text: "Totally recommend, always answers the phone and ready to help!",
    },
    {
      id: 5,
      author: "Darla Espinoza",
      rating: 5,
      date: "2025-05-20",
      profilePhoto: '/red-car-reviews.jpeg',
      text: "I have worked with Blue Spruce and am a loyal customer. They always provide great value, great machines, excellent service and I have every intention of remaining with them indefinitely. I DEFINITELY recommend Blue Spruce 100%.",
    },
    {
      id: 6,
      author: "Michelle B",
      rating: 5,
      date: "2025-05-10",
      profilePhoto: '/avs-reviews.svg',
      text: "Dennis is very, very helpful! I have a copy machine older than dirt and NO ONE was willing to even come take a look at it, but Dennis did. He's kind, patient, fair and honest. I will use him again in the future!",
    },
    {
      id: 7,
      author: "Kimberly Lunacek",
      rating: 5,
      date: "2025-04-28",
      profilePhoto: '/beach-reviews.jpeg',
      text: "Dennis, Shelley, and DJ are such nice people! They all make you feel so welcome and at home in their shop ... very cozy and comfortable.",
    },
    {
      id: 8,
      author: "Briant Cummings",
      rating: 5,
      date: "2025-04-28",
      profilePhoto: null,
      text: "Awesome service. Thank you",
    },
    {
      id: 9,
      author: "Gabriel F",
      rating: 5,
      date: "2025-04-28",
      profilePhoto: null,
      text: "Great friendly family business. Over 30 years of experience! This is the place to go if you need a copier machine!",
    },
    {
      id: 10,
      author: "Tascosa Raton",
      rating: 5,
      date: "2025-04-28",
      profilePhoto: null,
      text: "Down right great home service, great people and doing it in the Denver Jungle.",
    },
    {
      id: 11,
      author: "Christian Guillermo",
      rating: 5,
      date: "2025-04-28",
      profilePhoto: null,
      text: "Thank you!",
    },
  ];
  const handlePrev = () => {
    setStartIndex((prev) => (prev - cardsPerPage + reviews.length) % reviews.length);
  };
  const handleNext = () => {
    setStartIndex((prev) => (prev + cardsPerPage) % reviews.length);
  };
  const visibleReviews = reviews.slice(startIndex, startIndex + cardsPerPage);
  if (visibleReviews.length < cardsPerPage) {
    visibleReviews.push(...reviews.slice(0, cardsPerPage - visibleReviews.length));
  }

  const getRandomColor = (name) => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const c = (hash & 0x00FFFFFF).toString(16).toUpperCase();
  return `#${"00000".substring(0, 6 - c.length)}${c}`;
};

  return (
    <section id="about" className="section">
      <div style={styles.logoContainer}>
        <img
          src="/BlueSpruceLogoWords.png"
          alt="Blue Spruce Concepts Logo"
          style={styles.logo}
        />
      </div>
      <div style={styles.dontSign}>
        <span style={styles.highlight}>Don't</span> sign a contract until talking with{" "}
        <span style={styles.companyName}>Blue Spruce Concepts, Inc.</span>
      </div>
      <div style={styles.container}>
        <div style={styles.bioContainer}>
            <h2 style={styles.bioTitle}>Why Choose Us</h2>
            <p style={styles.bioText}>
            Blue Spruce Concepts, Inc. is proud to offer an outstanding 
            selection of new and pre-owned copiers for sale or lease, 
            featuring trusted brands such as Canon, Konica Minolta, and HP's. 
            Thanks to our strong industry partnerships, we’re able to provide customers 
            with exceptional deals on low-meter printers—giving you reliable, like-new 
            equipment at a fraction of the cost. Our competitive pricing, ability to service 
            nearly all makes and models, and commitment to customer satisfaction are just a few 
            of the reasons we’re the premier choice for businesses across the Metro Denver area.
            </p>
            <button
            style={{...styles.contactButton,
                backgroundColor: hover
                ? styles.contactButtonHover.backgroundColor
                : styles.contactButton.backgroundColor,
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => window.location.href = "tel:+13035551234"}
            
            >
            Call Us: (720) 641-1178
            </button>
        </div>
        <motion.div
            ref={ref} // Attach ref to track visibility
            style={styles.clipartContainer1}
            initial={{ x: "100%" }} // Start off-screen
            animate={isInView ? { x: 0 } : { x: "100%" }} // Animate based on visibility
            transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
            >
              <iframe
                width='505px'
                height="405"
                src="https://www.youtube.com/embed/jEw6Tntba44?autoplay=1&mute=1&loop=1&playlist=jEw6Tntba44"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
        </motion.div>
       
      </div>
      <div style={styles.reviewsContainer}>
        <h3 style={styles.reviewsTitle}>What our customers say</h3>
        <div style={styles.carouselWrapper}>
            <button onClick={handlePrev} style={styles.arrow}>‹</button>
            <div style={styles.grid}>
            {visibleReviews.map((rev) => (
                <div key={rev.id} 
                style={styles.card}
                onMouseEnter={(e) => (e.currentTarget.style.outline = '3px solid white', 
                    e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.9)")}
                onMouseLeave={(e) => (e.currentTarget.style.outline = '',
                    e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)")}
                >
                <div
                    style={{
                    ...styles.profileCircle,
                    backgroundColor: rev.profilePhoto
                        ? "transparent"
                        : getRandomColor(rev.author),
                    }}
                >
                    {rev.profilePhoto ? (
                    <img
                        src={rev.profilePhoto}
                        alt={rev.author}
                        style={styles.profileImage}
                    />
                    ) : (
                    <span style={styles.initial}>{rev.author.charAt(0)}</span>
                    )}
                </div>
                <div style={styles.textContent}>
                    <strong style={styles.author}>{rev.author}</strong>
                    <div style={styles.rating}>{"★".repeat(rev.rating)}</div>
                    <p style={styles.text}>
                    {rev.text.substring(0, 100)}
                    {rev.text.length > 100 ? "..." : ""}
                    </p>
                </div>
                </div>
            ))}
            </div>
            <button onClick={handleNext} style={styles.arrow}>›</button>
        </div>
        <button
            onClick={() => window.open('https://search.google.com/local/writereview?placeid=ChIJKwU-Sv5_bIcRJETEq9fZcQ0', '_blank')}
            style={{
                ...styles.reviewButton,
                backgroundColor: reviewHover
                ? '#4d8a96' 
                : styles.reviewButton.backgroundColor, 
            }}
            onMouseEnter={() => setReviewHover(true)}
            onMouseLeave={() => setReviewHover(false)}
            >
            Leave a Review!
        </button>
      </div>
    </section>
  );
}

const styles = {
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: "80px",
    marginBottom: "20px",
  },
  logo: {
    height: "250px",
  },
  container: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "stretch", 
    maxWidth: "1600px",
    margin: "0 auto",
    padding: "60px",
    gap: "30px",
    minHeight: "300px", 
    // border: '1px solid black'
  },
  dontSign: {
    padding: "15px",
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    textAlign: "center",
    fontFamily: "Helvetica, sans-serif",
    fontSize: "18px",
    color: "#333",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    maxWidth: "600px",
    margin: "20px auto",
    lineHeight: "1.5",
  },
  highlight: {
    fontWeight: "bold",
    color: "#dc3545", // Red for urgency
  },
  companyName: {
    fontWeight: "600",
    color: "#4263bb", // Blue for branding
    
  },
  bioContainer: {
    flex: 1,
    flexBasis: "50%", 
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
    textAlign: "center",
    maxWidth: '600px',
    // border: '1px solid black'
  },
  bioTitle: {
    fontFamily: "Helvetica, sans-serif",
    fontSize: "2em",
    color: "#2c3e50",
    marginBottom: "15px",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  bioText: {
    fontSize: "1.1em",
    color: "#666",
    lineHeight: "1.6",
    marginBottom: "20px",
  },
  contactButton: {
    backgroundColor: "#4263bb",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    fontSize: "1em",
    cursor: "pointer",
    textDecoration: "none",
    transition: "background-color 0.3s",
  },
  contactButtonHover: {
    backgroundColor: "#4d8a96",
  },
  clipartContainer1: {
    flex: 1,
    flexBasis: "50%",
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "300px",
    position: "relative",
    // border: '1px solid black'
  },
  
  clipart: {
    width: "350px",
    height: "350px",
  },
  reviewsContainer: {
    background: "linear-gradient(to bottom, #ffffff 0%, #cdcdcd 100%)",
    paddingBottom: 30,
    paddingTop: 1,
    // border: '1px solid black'
  },
  reviewsTitle: {
    fontFamily: "'Helvetica', sans-serif",
    fontSize: "2em",
    color: "#2c3e50",
  },
  carouselWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20px",
    width: "100%",
    // border: '1px solid black'
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "20px",
    width: "80%",
    // border: '1px solid black'
  },
  card: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    textAlign: "center",
    
  },
  profileCircle: {
    width: 60,
    height: 60,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto 10px",
    overflow: "hidden",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  initial: {
    color: "white",
    fontSize: "1.8em",
    fontWeight: "bold",
  },
  textContent: {
    textAlign: "center",
  },
  author: {
    fontSize: "1.1em",
    fontWeight: "bold",
    color: "#333",
  },
  rating: {
    color: "#f5b50a",
    fontSize: "1.2em",
    margin: "5px 0",
  },
  text: {
    fontSize: "0.9em",
    color: "#444",
  },
  arrow: {
    background: "none",
    border: "none",
    fontSize: "4rem",
    cursor: "pointer",
    padding: "20px",
    color: "#333",
  },
  reviewButton: {
    backgroundColor: "#4263bb",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    fontSize: "1em",
    cursor: "pointer",
    marginTop: "15px",
  },
};