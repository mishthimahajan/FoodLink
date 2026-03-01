
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

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
  const [selectedCategory, setSelectedCategory] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        setMenuOpen(false);
      }
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    if (isMobile) {
      setMenuOpen(false);
    }
  };

  return (
    <>
      <nav className={`modern-navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Logo */}
          <Link to="/" className="navbar-logo" onClick={handleLinkClick}>
            <span className="logo-icon">🍱</span>
            FoodLink
          </Link>

          {/* Desktop Navigation */}
          <div className="nav-links-desktop">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/features" className="nav-link">Features</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/register" className="nav-link">Register</Link>
            <Link to="/dashboard" className="nav-link">Dashboard</Link>

            {/* Category Filter Desktop */}
            <div className="category-filter">
              <span className="filter-label">
                <span>🍽️</span> Category
              </span>
              <div className="filter-select-wrapper">
                <select
                  className="filter-select"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  aria-label="Filter food category"
                >
                  <option value="">All</option>
                  {FOOD_CATEGORIES.map(cat => (
                    <option key={cat.value} value={cat.value}>{cat.label}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Hamburger Button */}
          <button
            className={`hamburger-btn ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`nav-links-mobile ${menuOpen ? 'active' : ''}`}>
          <Link to="/" className="mobile-nav-link" onClick={handleLinkClick}>Home</Link>
          <Link to="/about" className="mobile-nav-link" onClick={handleLinkClick}>About</Link>
          <Link to="/features" className="mobile-nav-link" onClick={handleLinkClick}>Features</Link>
          <Link to="/contact" className="mobile-nav-link" onClick={handleLinkClick}>Contact</Link>
          <Link to="/login" className="mobile-nav-link" onClick={handleLinkClick}>Login</Link>
          <Link to="/register" className="mobile-nav-link" onClick={handleLinkClick}>Register</Link>
          <Link to="/dashboard" className="mobile-nav-link" onClick={handleLinkClick}>Dashboard</Link>

          {/* Category Filter Mobile */}
          <div className="category-filter-mobile">
            <span className="filter-label-mobile">
              <span>🍽️</span> Category
            </span>
            <div className="filter-select-wrapper-mobile">
              <select
                className="filter-select-mobile"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                aria-label="Filter food category"
              >
                <option value="">All</option>
                {FOOD_CATEGORIES.map(cat => (
                  <option key={cat.value} value={cat.value}>{cat.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && isMobile && (
        <div
          className="mobile-menu-overlay"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;

