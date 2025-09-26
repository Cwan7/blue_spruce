import React from "react";
import Slider from "react-slick";

export default function About() {
  // Fake reviews (replace with your real ones)
  const reviews = [
    {
      id: 1,
      author: "Rocky Mountain Law",
      rating: 5,
      date: "2025-07-02",
      profilePhoto: '/skyline-review.jpg',
      text: "Very knowledgeable and friendly staff. They was able to provide us with a great new printer and at a low cost. The delivery and set up was fast, allowing us to get back to business in a flash. Further, instead of just handing us a manual and leaving, Dennis provided us with a personal and impressively detailed explanation of the printer's functions. We couldn't be happier with our new machine and look forward to working with Blue Spruce Concepts in the future.",
    },
    {
      id: 2,
      author: "Ken DeLucas",
      rating: 5,
      date: "2025-06-15",
      profilePhoto: null,
      text: "Blue Spruce Concepts has provided for all of our copier needs for the last 15 years. Dennis has set us up for guaranteed 100% uptime with their excellent service and support, and a back up production copier. These two copiers are also serve as printers on our network, and they also fax and scan all types of documents with ease. I highly recommend Blue Spruce Concepts to any company, and especially those that cannot tolerate any downtime on their copiers.",
    },
    {
      id: 3,
      author: "Darla Espinoza",
      rating: 5,
      date: "2025-05-20",
      profilePhoto: '/red-car-reviews.jpeg',
      text: "I have worked with Blue Spruce and am a loyal customer. They always provide great value, great machines, excellent service and I have every intention of remaining with them indefinitely. I DEFINITELY recommend Blue Spruce 100%.",
    },
    {
      id: 4,
      author: "Michelle B",
      rating: 5,
      date: "2025-05-10",
      profilePhoto: '/avs-reviews.svg',
      text: "Dennis is very, very helpful! I have a copy machine older than dirt and NO ONE was willing to even come take a look at it, but Dennis did. He's kind, patient, fair and honest. I will use him again in the future!",
    },
    {
      id: 5,
      author: "Kimberly Lunacek",
      rating: 5,
      date: "2025-04-28",
      profilePhoto: '/beach-reviews.jpeg',
      text: "Dennis, Shelley, and DJ are such nice people! They all make you feel so welcome and at home in their shop ... very cozy and comfortable.",
    },
    {
      id: 6,
      author: "Briant Cummings",
      rating: 5,
      date: "2025-04-28",
      profilePhoto: null,
      text: "Awesome service. Thank you",
    },
    {
      id: 7,
      author: "Briant Cummings",
      rating: 5,
      date: "2025-04-28",
      profilePhoto: null,
      text: "Awesome service. Thank you",
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
      author: "Briant Cummings",
      rating: 5,
      date: "2025-04-28",
      profilePhoto: null,
      text: "Awesome service. Thank you",
    },
    {
      id: 10,
      author: "Conor Wantuch",
      rating: 5,
      date: "2025-04-28",
      profilePhoto: null,
      text: "The service Blue Spruce Concepts provides is above and beyond. Never going back! Thanks for always being on call and helping in a pinch.",
    },
    
  ];

  const sliderSettings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [],
  };

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
      {/* Logo at top */}
      <div style={styles.logoContainer}>
        <img
          src="/BlueSpruceLogoWords.png"
          alt="Blue Spruce Concepts Logo"
          style={styles.logo}
        />
      </div>

      <h2>About Us</h2>
      <p>This is the about section of our website.</p>

      {/* Reviews carousel */}
      <h3 style={{ marginTop: "40px" }}>What our customers say</h3>
      <div style={styles.carouselWrapper}>
        <Slider {...sliderSettings}>
            {reviews.map((rev) => (
            <div key={rev.id}>
                <div style={styles.cardContent}>
                <div style={{ ...styles.profileCircle, backgroundColor: rev.profilePhoto ? 'transparent' : getRandomColor(rev.author) }}>
                    {rev.profilePhoto ? (
                    <img src={rev.profilePhoto} alt={`${rev.author}'s photo`} style={styles.profileImage} />
                    ) : (
                    <span style={styles.initial}>{rev.author.charAt(0)}</span>
                    )}
                </div>
                <div style={styles.textContent}>
                    <strong style={styles.author}>{rev.author}</strong>
                    <div style={styles.rating}>{"★".repeat(rev.rating)}</div>
                    <p style={styles.text}>{rev.text.substring(0, 100)} {rev.text.length > 100 ? "..." : ""}</p>
                </div>
                </div>
            </div>
            ))}
        </Slider>
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
    height: "150px",
  },
  carouselWrapper: {
    margin: "20px auto",
    width: "90%",
    maxWidth: "1200px",
  },
  cardContent: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    margin: "5px",
    height: "280px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center horizontally
    boxSizing: "border-box",
    border: "2px solid #ddd",
  },
  profileCircle: {
    width: 60,
    height: 60,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "10px",
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
    width: "100%",
  },
  author: {
    fontSize: "1.1em",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "5px",
  },
  rating: {
    color: "#f5b50a",
    fontSize: "1.2em",
    marginBottom: "10px",
  },
  text: {
    fontSize: "12px",
    lineHeight: "1.4",
    color: "#444",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxHeight: "120px",
  },
};