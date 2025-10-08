import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import './About.css';

export default function About({ isMenuOpen }) {
  const [startIndex, setStartIndex] = useState(0);
  const cardsPerPage = window.innerWidth <= 650 ? 2 : window.innerWidth <= 920 ? 3 : 4;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px 0px -100px 0px" });

  const reviews = [
    {
      id: 1,
      author: "Henry W",
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
    <section id="about" className={`backgroundImage ${isMenuOpen ? 'backgroundImage-menu-open' : ''}`}>
      <div className="logoContainer">
        <img
          src="/BlueSpruceLogoWords.png"
          alt="Blue Spruce Concepts Logo"
          className="logo"
        />
      </div>
      <div className="container">
        <div className="bioContainer">
          <h2 className="bioTitle">Why Choose Us</h2>
          <p className="bioText">
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
            className="contactButton"
            onClick={() => window.location.href = "tel:+13035551234"}
          >
            Call Us: (303) 278 7211
          </button>
        </div>
        <motion.div
          ref={ref}
          className="clipartContainer1"
          initial={{ x: "100%" }}
          animate={isInView ? { x: 0 } : { x: "25%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <iframe
            width="505px"
            height="405"
            src="https://www.youtube.com/embed/jEw6Tntba44?autoplay=1&mute=1&loop=1&playlist=jEw6Tntba44"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>
      <div className="dontSign">
        <span className="highlight">Don't</span> sign a contract until talking with{" "}
        <span className="companyName">Blue Spruce Concepts, Inc.</span>
        <p>Our expert technicians are ready to deliver tailored solutions for your office.</p>
      </div>
      <div className="reviewsContainer">
        <h3 className="reviewsTitle">What our customers say</h3>
        <div className="carouselWrapper">
          <button onClick={handlePrev} className="arrow">‹</button>
          <div className="grid">
            {visibleReviews.map((rev) => (
              <div
                key={rev.id}
                className="card"
              >
                <div
                  className="profileCircle"
                  style={{ backgroundColor: rev.profilePhoto ? "transparent" : getRandomColor(rev.author) }}
                >
                  {rev.profilePhoto ? (
                    <img
                      src={rev.profilePhoto}
                      alt={rev.author}
                      className="profileImage"
                    />
                  ) : (
                    <span className="initial">{rev.author.charAt(0)}</span>
                  )}
                </div>
                <div className="textContent">
                  <strong className="author">{rev.author}</strong>
                  <div className="rating">{"★".repeat(rev.rating)}</div>
                  <p className="text">
                    {rev.text.substring(0, 100)}
                    {rev.text.length > 100 ? "..." : ""}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button onClick={handleNext} className="arrow">›</button>
        </div>
        <button
          onClick={() => window.open('https://search.google.com/local/writereview?placeid=ChIJKwU-Sv5_bIcRJETEq9fZcQ0', '_blank')}
          className="reviewButton"
        >
          Leave a Review!
        </button>
      </div>
    </section>
  );
}