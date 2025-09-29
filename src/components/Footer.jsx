import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div style={styles.container}>
            <div style={styles.logoContainer}>
                <img
                    src="/BlueSpruceLogoWords.png"
                    alt="Blue Spruce Concepts Logo"
                    style={styles.logo}
                    />
            </div>
            <div style={styles.infoContainer}>
                <div style={styles.addressContainer}>
                    <h1>Contact Info</h1>
                    <p style={styles.text}>Blue Spruce Concepts, Inc.</p>
                    <p style={styles.text}>3213 W. Hampden Ave.</p>
                    <p style={styles.text}>Englewood, CO 80110</p>
                    <p style={styles.text}>(303) 278 7211</p>
                </div>
                <div style={styles.hoursContainer}>
                    <h2>Buisness Hours</h2>
                    <p style={styles.text}>Monday 8:00 AM - 5:00 PM</p>
                    <p style={styles.text}>Tuesday 8:00 AM - 5:00 PM</p>
                    <p style={styles.text}>Wednesday 8:00 AM - 5:00 PM</p>
                    <p style={styles.text}>Thursday 8:00 AM - 5:00 PM</p>
                    <p style={styles.text}>Friday 8:00 AM - 5:00 PM</p>
                </div>
            </div>
            
            <div style={styles.legalContainer}>
                <p>Copyright © {new Date().getFullYear()} Blue Spruce Concepts, Inc., All rights reserved.</p>
                <Link style={styles.link} to='/privacy' target="_blank" rel="noopener noreferrer">Privacy Policy</Link> 
                <Link style={styles.link} to='/terms' target="_blank" rel="noopener noreferrer">Terms Of Service</Link>
            </div>
            
        </div>
    )
}
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#8a8a8a'
    },
    infoContainer: {
        display: 'flex',
        justifyContent: 'space-evenly',
    },
    legalContainer: {
        marginBottom: '40px',
        marginTop: '10px',
        borderTop: "1px solid #000",
    },
    link: {
    color: "#4263bb", 
    textDecoration: "none",
    margin: "0 20px", 
  },
}