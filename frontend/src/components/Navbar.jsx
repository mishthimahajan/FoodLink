
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        setMenuOpen(false); // Close mobile menu on desktop
      }
    };

    handleResize(); // Check initial size
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLinkClick = () => {
    if (isMobile) {
      setMenuOpen(false); // Close menu when clicking a link on mobile
    }
  };

  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#1e293b",
      padding: isMobile ? "12px 20px" : "12px 80px",
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    },

    logo: {
      color: "#22c55e",
      fontSize: isMobile ? "1.5rem" : "1.8rem",
      fontWeight: "700",
      textDecoration: "none",
      fontFamily: "Poppins, sans-serif",
    },

    navLinks: {
      display: isMobile ? "none" : "flex",
      alignItems: "center",
      gap: "35px",
    },

    link: {
      color: "white",
      textDecoration: "none",
      fontSize: "1rem",
      fontWeight: "500",
      fontFamily: "Poppins, sans-serif",
      transition: "color 0.3s ease",
    },

    linkHover: {
      color: "#22c55e",
    },

    // Hamburger Button
    menuBtn: {
      display: isMobile ? "flex" : "none",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "30px",
      height: "30px",
      cursor: "pointer",
      border: "none",
      background: "none",
      padding: 0,
    },

    hamburgerLine: {
      width: "25px",
      height: "3px",
      backgroundColor: "white",
      margin: "2px 0",
      borderRadius: "2px",
      transition: "all 0.3s ease",
    },

    // Mobile Menu
    mobileMenu: {
      display: menuOpen && isMobile ? "flex" : "none",
      flexDirection: "column",
      backgroundColor: "#1e293b",
      padding: "20px",
      position: "fixed",
      top: "64px",
      left: 0,
      right: 0,
      gap: "20px",
      borderTop: "1px solid #334155",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      zIndex: 999,
    },

    mobileLink: {
      color: "white",
      textDecoration: "none",
      fontSize: "1.1rem",
      fontWeight: "500",
      fontFamily: "Poppins, sans-serif",
      padding: "10px 0",
      borderBottom: "1px solid #334155",
      transition: "color 0.3s ease",
    },
  };

  return (
    <>
      <nav style={styles.navbar}>
        <Link to="/" style={styles.logo} onClick={handleLinkClick}>
          FoodLink
        </Link>

        {/* DESKTOP MENU */}
        <div style={styles.navLinks}>
          <Link to="/" style={styles.link} onMouseEnter={(e) => e.target.style.color = styles.linkHover.color} onMouseLeave={(e) => e.target.style.color = styles.link.color}>
            Home
          </Link>
          <Link to="/about" style={styles.link} onMouseEnter={(e) => e.target.style.color = styles.linkHover.color} onMouseLeave={(e) => e.target.style.color = styles.link.color}>
            About
          </Link>
          <Link to="/features" style={styles.link} onMouseEnter={(e) => e.target.style.color = styles.linkHover.color} onMouseLeave={(e) => e.target.style.color = styles.link.color}>
            Features
          </Link>
          <Link to="/contact" style={styles.link} onMouseEnter={(e) => e.target.style.color = styles.linkHover.color} onMouseLeave={(e) => e.target.style.color = styles.link.color}>
            Contact
          </Link>
          <Link to="/login" style={styles.link} onMouseEnter={(e) => e.target.style.color = styles.linkHover.color} onMouseLeave={(e) => e.target.style.color = styles.link.color}>
            Login
          </Link>
          <Link to="/register" style={styles.link} onMouseEnter={(e) => e.target.style.color = styles.linkHover.color} onMouseLeave={(e) => e.target.style.color = styles.link.color}>
            Register
          </Link>
          <Link to="/dashboard" style={styles.link} onMouseEnter={(e) => e.target.style.color = styles.linkHover.color} onMouseLeave={(e) => e.target.style.color = styles.link.color}>
            Dashboard
          </Link>
        </div>

        {/* HAMBURGER BUTTON */}
        <button
          style={styles.menuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle mobile menu"
        >
          <div style={{
            ...styles.hamburgerLine,
            transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
          }}></div>
          <div style={{
            ...styles.hamburgerLine,
            opacity: menuOpen ? 0 : 1
          }}></div>
          <div style={{
            ...styles.hamburgerLine,
            transform: menuOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'none'
          }}></div>
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div style={styles.mobileMenu}>
        <Link to="/" style={styles.mobileLink} onClick={handleLinkClick}>
          Home
        </Link>
        <Link to="/about" style={styles.mobileLink} onClick={handleLinkClick}>
          About
        </Link>
        <Link to="/features" style={styles.mobileLink} onClick={handleLinkClick}>
          Features
        </Link>
        <Link to="/contact" style={styles.mobileLink} onClick={handleLinkClick}>
          Contact
        </Link>
        <Link to="/login" style={styles.mobileLink} onClick={handleLinkClick}>
          Login
        </Link>
        <Link to="/register" style={styles.mobileLink} onClick={handleLinkClick}>
          Register
        </Link>
        <Link to="/dashboard" style={styles.mobileLink} onClick={handleLinkClick}>
          Dashboard
        </Link>
      </div>

      {/* Overlay to close mobile menu when clicking outside */}
      {menuOpen && isMobile && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.3)",
            zIndex: 998,
          }}
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;

