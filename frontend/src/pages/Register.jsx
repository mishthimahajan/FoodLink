import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRoleSelect = (role) => {
    setFormData({
      ...formData,
      role,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loadingToast = toast.loading(
      "Creating your account..."
    );

    try {
      const res = await axios.post(
        "https://foodlink-0jeg.onrender.com/register",
        formData
      );

      toast.success(
        res.data.message ||
          "Account created successfully 🎉",
        { id: loadingToast }
      );

      setFormData({
        fullName: "",
        email: "",
        password: "",
        role: "",
      });

      navigate("/login");
    } catch (err) {
      console.log(err);

      toast.error(
        "Registration failed",
        { id: loadingToast }
      );
    }
  };

  const styles = {
    container: {
      position: "relative",

      minHeight: "100vh",

      width: "100%",

      backgroundImage:
        "url('https://img.freepik.com/premium-photo/colorful-flower-petals-scattered-turquoise-background-creating-vibrant-artistic-composition_923559-32212.jpg?semt=ais_hybrid&w=740&q=80')",

      backgroundSize: "cover",

      backgroundPosition: "center",

      backgroundRepeat: "no-repeat",

      display: "flex",

      justifyContent: "center",

      alignItems: "center",

      paddingTop: "120px",

      paddingBottom: "80px",

      overflowY: "auto",

      fontFamily: "Poppins, sans-serif",
    },

    overlay: {
      position: "absolute",

      inset: 0,

      backgroundColor:
        "rgba(0,0,0,0.5)",

      zIndex: 1,
    },

    card: {
      position: "relative",

      width: "90%",

      maxWidth: "420px",

      background:
        "rgba(255,255,255,0.15)",

      backdropFilter: "blur(15px)",

      borderRadius: "20px",

      padding: "40px",

      boxShadow:
        "0 20px 50px rgba(0,0,0,0.3)",

      zIndex: 2,

      textAlign: "center",

      animation:
        "fadeInCard 1s ease",
    },

    title: {
      color: "#fff",

      fontSize: "2rem",

      fontWeight: "700",

      marginBottom: "25px",
    },

    input: {
      width: "100%",

      padding: "15px",

      margin: "12px 0",

      borderRadius: "12px",

      border:
        "1px solid rgba(255,255,255,0.3)",

      outline: "none",

      background:
        "rgba(255,255,255,0.1)",

      color: "#fff",

      boxSizing: "border-box",

      fontSize: "1rem",
    },

    roleContainer: {
      display: "flex",

      gap: "15px",

      marginTop: "15px",

      marginBottom: "20px",
    },

    roleButton: (active) => ({
      flex: 1,

      padding: "12px",

      borderRadius: "10px",

      border:
        "2px solid #22c55e",

      background: active
        ? "linear-gradient(135deg,#22c55e,#16a34a)"
        : "transparent",

      color: active
        ? "#fff"
        : "#22c55e",

      fontWeight: "600",

      cursor: "pointer",
    }),

    button: {
      width: "100%",

      padding: "15px",

      background:
        "linear-gradient(135deg,#22c55e,#16a34a)",

      color: "#fff",

      border: "none",

      borderRadius: "12px",

      marginTop: "10px",

      cursor: "pointer",

      fontWeight: "600",

      fontSize: "1rem",
    },

    linkText: {
      color: "#fff",

      marginTop: "20px",
    },

    loginLink: {
      color: "#22c55e",

      textDecoration: "none",

      fontWeight: "600",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}></div>

      <form
        style={styles.card}
        onSubmit={handleSubmit}
      >
        <h2 style={styles.title}>
          Create FoodLink Account
        </h2>

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          style={styles.input}
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          style={styles.input}
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          style={styles.input}
          value={formData.password}
          onChange={handleChange}
          required
        />

        <div style={styles.roleContainer}>
          <button
            type="button"
            onClick={() =>
              handleRoleSelect(
                "donor"
              )
            }
            style={styles.roleButton(
              formData.role ===
                "donor"
            )}
          >
            Donor
          </button>

          <button
            type="button"
            onClick={() =>
              handleRoleSelect(
                "receiver"
              )
            }
            style={styles.roleButton(
              formData.role ===
                "receiver"
            )}
          >
            Receiver
          </button>
        </div>

        <button
          type="submit"
          style={styles.button}
        >
          Register
        </button>

        <p style={styles.linkText}>
          Already have account?{" "}
          <Link
            to="/login"
            style={styles.loginLink}
          >
            Login
          </Link>
        </p>
      </form>

      <style>{`
        @keyframes fadeInCard{
          from{
            opacity:0;
            transform:translateY(-20px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Register;
