import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("");

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Features", path: "/features" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Login", path: "/login" },
    { name: "Register", path: "/register" },
  ];

  return (
    <>
      <div style={styles.wrapper}>
        <div style={styles.outerPill}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <span style={{ fontWeight: 700, fontSize: 22, color: "#22c55e", fontFamily: "Poppins, sans-serif", letterSpacing: 1 }}>
              <span role="img" aria-label="logo"></span> Food Link
            </span>
            <div style={styles.innerPill}>
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  end={item.path === "/"} // Changed ')' to '}'
                  style={({ isActive }) => ({
                    ...styles.navItem,
                    ...(isActive ? styles.activeItem : {}),
                  })}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const styles = {
  wrapper: {
    position: "fixed",
    top: "10px", // Reduced from 40px to 10px to remove blank space
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 1000,
  },

  // Outer dark glass container
  outerPill: {
    padding: "14px",
    borderRadius: "40px",
    background: "rgba(20, 20, 20, 0.8)",
    backdropFilter: "blur(20px)",
    boxShadow:
      "0 20px 50px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.05)",
  },

  // Inner lighter capsule
  innerPill: {
    display: "flex",
    gap: "8px",
    padding: "6px",
    borderRadius: "30px",
    background: "#d1d5db",
  },

  navItem: {
    padding: "10px 20px",
    borderRadius: "25px",
    textDecoration: "none",
    fontWeight: 500,
    fontSize: "15px",
    color: "#111827",
    transition: "all 0.25s ease",
  },

  activeItem: {
    background: "#111827",
    color: "#ffffff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
  },
};

export default Navbar;