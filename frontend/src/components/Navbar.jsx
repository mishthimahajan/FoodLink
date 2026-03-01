
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const FOOD_CATEGORIES = [
  { label: "Cooked food", value: "cooked" },
  { label: "Raw groceries", value: "raw" },
  { label: "Bakery items", value: "bakery" },
  { label: "Event surplus", value: "event" },
  { label: "Packaged food", value: "packaged" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Food category filter state
  const [selectedCategory, setSelectedCategory] = useState("");

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

    filterContainer: {
      display: isMobile ? "none" : "flex",
      alignItems: "center",
      background: "linear-gradient(90deg, #22c55e 0%, #16a34a 100%)",
      borderRadius: "28px",
      padding: "7px 24px 7px 18px",
      marginLeft: "36px",
      boxShadow: "0 2px 12px 0 rgba(34,197,94,0.10)",
      gap: "14px",
      transition: "box-shadow 0.2s, background 0.2s",
      minWidth: "220px",
      position: "relative",
    },
    filterLabel: {
      color: "#fff",
      fontWeight: 700,
      fontSize: "1.08rem",
      marginRight: "10px",
      fontFamily: "Poppins, sans-serif",
      letterSpacing: "0.5px",
      textShadow: "0 1px 2px rgba(0,0,0,0.08)",
      display: "flex",
      alignItems: "center",
      gap: "6px",
    },
    filterSelect: {
      background: "#fff",
      color: "#16a34a",
      border: "none",
      borderRadius: "16px",
      padding: "7px 36px 7px 14px",
      fontSize: "1rem",
      fontFamily: "Poppins, sans-serif",
      outline: "none",
      cursor: "pointer",
      boxShadow: "0 1px 4px rgba(34,197,94,0.08)",
      appearance: "none",
      WebkitAppearance: "none",
      MozAppearance: "none",
      position: "relative",
      fontWeight: 600,
      transition: "box-shadow 0.2s, color 0.2s",
    },
    filterSelectWrapper: {
      position: "relative",
      display: "flex",
      alignItems: "center",
    },
    filterArrow: {
      position: "absolute",
      right: "14px",
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none",
      color: "#16a34a",
      fontSize: "1.1rem",
      opacity: 0.8,
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
           <Link to="/terms-of-service" style={styles.mobileLink} onClick={handleLinkClick}>
          Terms of Service
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
          {/* Food Category Filter (Desktop) */}
          <div style={styles.filterContainer}>
            <span style={styles.filterLabel}>
              <span role="img" aria-label="Category">🍽️</span> Category
            </span>
            <div style={styles.filterSelectWrapper}>
              <select
                style={styles.filterSelect}
                value={selectedCategory}
                onChange={e => setSelectedCategory(e.target.value)}
                aria-label="Filter food category"
                onFocus={e => e.target.style.boxShadow = '0 0 0 2px #16a34a44'}
                onBlur={e => e.target.style.boxShadow = styles.filterSelect.boxShadow}
                onMouseOver={e => e.target.style.color = '#22c55e'}
                onMouseOut={e => e.target.style.color = styles.filterSelect.color}
              >
                <option value="">All</option>
                {FOOD_CATEGORIES.map(cat => (
                  <option key={cat.value} value={cat.value}>{cat.label}</option>
                ))}
              </select>
              <span style={styles.filterArrow}>▼</span>
            </div>
          </div>
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
        <Link to="/terms-of-service" style={styles.mobileLink} onClick={handleLinkClick}>
          Terms of Service
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
        {/* Food Category Filter (Mobile) */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          background: "linear-gradient(90deg, #22c55e 0%, #16a34a 100%)",
          borderRadius: "18px",
          padding: "12px 16px 14px 16px",
          marginTop: "10px",
          width: "100%",
          boxShadow: "0 2px 10px 0 rgba(34,197,94,0.10)",
        }}>
          <span style={{ color: "#fff", fontWeight: 700, fontSize: "1.05rem", marginBottom: 7, fontFamily: "Poppins, sans-serif", letterSpacing: "0.5px", display: "flex", alignItems: "center", gap: 6 }}>
            <span role="img" aria-label="Category">🍽️</span> Category
          </span>
          <div style={{ position: "relative", width: "100%" }}>
            <select
              style={{
                background: "#fff",
                color: "#16a34a",
                border: "none",
                borderRadius: "12px",
                padding: "7px 36px 7px 12px",
                fontSize: "1rem",
                fontFamily: "Poppins, sans-serif",
                outline: "none",
                width: "100%",
                fontWeight: 600,
                boxShadow: "0 1px 4px rgba(34,197,94,0.08)",
                appearance: "none",
                WebkitAppearance: "none",
                MozAppearance: "none",
                transition: "box-shadow 0.2s, color 0.2s",
              }}
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}
              aria-label="Filter food category"
              onFocus={e => e.target.style.boxShadow = '0 0 0 2px #16a34a44'}
              onBlur={e => e.target.style.boxShadow = '0 1px 4px rgba(34,197,94,0.08)'}
              onMouseOver={e => e.target.style.color = '#22c55e'}
              onMouseOut={e => e.target.style.color = '#16a34a'}
            >
              <option value="">All</option>
              {FOOD_CATEGORIES.map(cat => (
                <option key={cat.value} value={cat.value}>{cat.label}</option>
              ))}
            </select>
            <span style={{
              position: "absolute",
              right: "14px",
              top: "50%",
              transform: "translateY(-50%)",
              pointerEvents: "none",
              color: "#16a34a",
              fontSize: "1.1rem",
              opacity: 0.8,
            }}>▼</span>
          </div>
        </div>
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

