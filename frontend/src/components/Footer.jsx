import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: "#0f0f0f",
      color: "white",
      padding: "80px 20px 40px",
    },

    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "50px",
    },

    logo: {
      fontSize: "1.6rem",
      fontWeight: "800",
      marginBottom: "15px",
      background: "linear-gradient(90deg, #43e97b, #38f9d7)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },

    tagline: {
      color: "rgba(255,255,255,0.7)",
      lineHeight: "1.6",
      fontSize: "0.95rem",
    },

    sectionTitle: {
      fontSize: "1.1rem",
      fontWeight: "700",
      marginBottom: "20px",
    },

    link: {
      display: "block",
      color: "rgba(255,255,255,0.7)",
      textDecoration: "none",
      marginBottom: "10px",
      fontSize: "0.95rem",
    },

    contactItem: {
      marginBottom: "10px",
      color: "rgba(255,255,255,0.7)",
      fontSize: "0.95rem",
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },

    socialRow: {
      display: "flex",
      gap: "12px",
      marginTop: "15px",
    },

    socialIcon: {
      width: "38px",
      height: "38px",
      borderRadius: "50%",
      backgroundColor: "#1c1c1c",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      transition: "0.3s",
    },

    bottomBar: {
      borderTop: "1px solid rgba(255,255,255,0.1)",
      marginTop: "50px",
      paddingTop: "20px",
      textAlign: "center",
      fontSize: "0.85rem",
      color: "rgba(255,255,255,0.5)",
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        
        {/* LEFT — Tagline */}
        <div>
          <h2 style={styles.logo}>FoodLink</h2>
          <p style={styles.tagline}>
            Connecting surplus food with communities in need.
            Together, we reduce waste and create meaningful impact.
          </p>
        </div>

        {/* MIDDLE — Quick Links */}
        <div>
          <h3 style={styles.sectionTitle}>Quick Links</h3>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/about" style={styles.link}>About</Link>
          <Link to="/features" style={styles.link}>Features</Link>
          <Link to="/login" style={styles.link}>Login</Link>
          <Link to="/register" style={styles.link}>Register</Link>
        </div>

        {/* RIGHT — Contact */}
        <div>
          <h3 style={styles.sectionTitle}>Contact</h3>
          <div style={styles.contactItem}>
            <FaEnvelope /> hello@foodlink.com
          </div>

          <div style={styles.socialRow}>
            <div style={styles.socialIcon}>
              <FaInstagram />
            </div>
            <div style={styles.socialIcon}>
              <FaLinkedin />
            </div>
            <div style={styles.socialIcon}>
              <FaTwitter />
            </div>
          </div>
        </div>

      </div>

      <div style={styles.bottomBar}>
        © {new Date().getFullYear()} FoodLink. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;