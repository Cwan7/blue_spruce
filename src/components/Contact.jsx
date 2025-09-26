import React, { useState } from 'react';

export default function Contact() {
      const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phoneNumber: "",
    zipCode: "",
    message: "",
  });

  const handleForum = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    // build payload as JSON (Web3Forms accepts JSON or form-data)
    const payload = {
      access_key: "a49795a2-878e-4a1c-b1a5-6ec1ff3d3f5d",
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      phoneNumber: formData.phoneNumber,
      zipCode: formData.zipCode,
      message: formData.message,
      // optional: add a source field so you can easily filter test vs production
      source: window.location.hostname || "local-dev",
    };

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });

    const json = await res.json();
    console.log("Web3Forms response:", json, "HTTP status:", res.status);

    if (res.ok && json.success) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", phoneNumber: "", zipCode: "", message: "" });
    } else {
      // show the error message returned from Web3Forms (helps debugging)
      alert("Failed to send message: " + (json.message || JSON.stringify(json)));
    }
  } catch (err) {
    console.error("Error submitting contact form:", err);
    alert("Network error while sending message. Check console for details.");
  }
};


  return (
    <section id="contact" className="section">
      <h1>Contact Us!</h1>
      <div style={styles.forumContainer}>
        <form onSubmit={handleSubmit}>
          <input
            type="checkbox"
            name="botcheck"
            style={{ display: "none" }}
            tabIndex="-1"
            autoComplete="off"
          />

          <label style={styles.label}>Your Name</label>
          <input
            style={styles.input}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleForum}
            placeholder="Enter your name"
            required
          />

          <label style={styles.label}>Email</label>
          <input
            style={styles.input}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleForum}
            placeholder="Enter your email"
            required
          />

          <label style={styles.label}>Subject</label>
          <input
            style={styles.input}
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleForum}
            placeholder="Subject"
          />

          <label style={styles.label}>Phone Number</label>
          <input
            style={styles.input}
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleForum}
            placeholder="Phone number"
          />

          <label style={styles.label}>Zip Code</label>
          <input
            style={styles.input}
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleForum}
            placeholder="Zip code"
          />

          <label style={styles.label}>Message</label>
          <textarea
            style={styles.textarea}
            name="message"
            value={formData.message}
            onChange={handleForum}
            placeholder="Message"
            required
          />

          <button
            style={styles.button}
            type="submit"
            onMouseOver={(e) =>
              (e.target.style.backgroundColor =
                styles.buttonHover.backgroundColor)
            }
            onMouseOut={(e) =>
              (e.target.style.backgroundColor = styles.button.backgroundColor)
            }
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
const styles = {
    forumContainer: {
      maxWidth: '500px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#7dc1c4',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      fontSize: '1em',
      color: '#333',
      fontWeight: 'bold',
    },
    input: {
      width: '100%',
      padding: '8px',
      marginBottom: '15px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      boxSizing: 'border-box',
      fontSize: '1em',
    },
    textarea: {
      width: '100%',
      padding: '8px',
      marginBottom: '15px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      boxSizing: 'border-box',
      fontSize: '1em',
      minHeight: '100px',
      resize: 'vertical',
    },
    button: {
      backgroundColor: '#60a8b8',
      color: '#fff',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '4px',
      fontSize: '1em',
      cursor: 'pointer',
    },
    buttonHover: {
      backgroundColor: '#4d8a96',
    },
}