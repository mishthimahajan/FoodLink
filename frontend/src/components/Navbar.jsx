import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const isLoggedIn = localStorage.getItem("token");
  const activeColor = "#22c55e";
  const hoverColor = "#4ade80";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = isDark ? "#0f172a" : "#f8fafc";
    document.body.style.color = isDark ? "#ffffff" : "#0f172a";
  }, [isDark]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Features", path: "/features" },
    { name: "Contact", path: "/contact" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <motion.nav
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          padding: scrolled ? "10px 8%" : "16px 8%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backdropFilter: "blur(14px)",
          background: scrolled
            ? isDark
              ? "rgba(15,23,42,0.95)"
              : "rgba(255,255,255,0.9)"
            : "transparent",
          boxShadow: scrolled
            ? "0 10px 30px rgba(0,0,0,0.25)"
            : "none",
          transition: "all 0.3s ease",
          zIndex: 1000,
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            fontSize: "1.9rem",
            fontWeight: "800",
            textDecoration: "none",
            background: "linear-gradient(90deg,#22c55e,#16a34a)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "1px",
          }}
        >
          FoodLink
        </Link>

        {/* Desktop Menu */}
        <div className="desktop-menu" style={{ display: "flex", alignItems: "center", gap: "25px" }}>
          {navItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -2 }}
              style={{ position: "relative" }}
            >
              <Link
                to={item.path}
                style={{
                  textDecoration: "none",
                  fontWeight: "500",
                  color:
                    location.pathname === item.path
                      ? activeColor
                      : isDark
                      ? "#e2e8f0"
                      : "#1e293b",
                  transition: "0.3s",
                }}
              >
                {item.name}
              </Link>

              {/* Animated Underline */}
              {location.pathname === item.path && (
                <motion.div
                  layoutId="underline"
                  style={{
                    position: "absolute",
                    bottom: "-6px",
                    left: 0,
                    width: "100%",
                    height: "3px",
                    background: activeColor,
                    borderRadius: "10px",
                  }}
                />
              )}
            </motion.div>
          ))}

          {/* AUTH SECTION */}
          {!isLoggedIn ? (
            <>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  to="/login"
                  style={{
                    padding: "8px 18px",
                    borderRadius: "8px",
                    border: `1px solid ${activeColor}`,
                    color: activeColor,
                    textDecoration: "none",
                    fontWeight: "600",
                    transition: "0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.boxShadow =
                      "0 0 15px rgba(34,197,94,0.6)")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.boxShadow = "none")
                  }
                >
                  Login
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  to="/register"
                  style={{
                    padding: "8px 18px",
                    borderRadius: "8px",
                    background:
                      "linear-gradient(90deg,#22c55e,#16a34a)",
                    color: "white",
                    textDecoration: "none",
                    fontWeight: "600",
                    boxShadow:
                      "0 0 12px rgba(34,197,94,0.4)",
                    transition: "0.3s",
                  }}
                >
                  Register
                </Link>
              </motion.div>
            </>
          ) : (
            <>
              <Link
                to="/dashboard"
                style={{
                  color: activeColor,
                  fontWeight: "600",
                  textDecoration: "none",
                  transition: "0.3s",
                }}
              >
                Dashboard
              </Link>

              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={handleLogout}
                style={{
                  padding: "8px 16px",
                  borderRadius: "8px",
                  background: "#ef4444",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: "600",
                }}
              >
                Logout
              </motion.button>
            </>
          )}

          {/* Theme Toggle */}
          <motion.button
            whileHover={{ rotate: 20 }}
            onClick={() => setIsDark(!isDark)}
            style={{
              padding: "7px 14px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              background: activeColor,
              color: "white",
              fontWeight: "600",
              transition: "0.3s",
            }}
          >
            {isDark ? "🌙" : "☀️"}
          </motion.button>
        </div>

        {/* Hamburger */}
        <div
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: "none",
            cursor: "pointer",
            fontSize: "1.8rem",
            color: activeColor,
          }}
        >
          ☰
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              height: "100vh",
              width: "70%",
              background: isDark ? "#0f172a" : "#ffffff",
              padding: "80px 30px",
              zIndex: 999,
              display: "flex",
              flexDirection: "column",
              gap: "25px",
              boxShadow: "-10px 0 30px rgba(0,0,0,0.3)",
            }}
          >
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                onClick={() => setIsOpen(false)}
                style={{
                  textDecoration: "none",
                  fontSize: "1.2rem",
                  fontWeight: "600",
                  color: activeColor,
                }}
              >
                {item.name}
              </Link>
            ))}

            {!isLoggedIn ? (
              <>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </>
            ) : (
              <>
                <Link to="/dashboard">Dashboard</Link>
                <button onClick={handleLogout}>Logout</button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <style>
        {`
          @media (max-width: 900px) {
            .desktop-menu {
              display: none !important;
            }
            .hamburger {
              display: block !important;
            }
          }
        `}
      </style>
    </>
  );
};

export default Navbar;
