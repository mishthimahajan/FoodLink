import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const styles = {
    container: {
      position: "relative",
      minHeight: "100vh",
      width: "100%",
      backgroundImage:
        'url("https://img.freepik.com/free-photo/top-view-trash-cooking-concept_23-2149056487.jpg")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",

      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      fontFamily: "Poppins, sans-serif",

      paddingTop: "120px",
      paddingBottom: "80px",

      overflowY: "auto",
    },

    overlay: {
      position: "absolute",
      inset: 0,
      backgroundColor: "rgba(0,0,0,0.5)",
      zIndex: 1,
    },

    card: {
      position: "relative",
      background: "rgba(255,255,255,0.15)",
      backdropFilter: "blur(15px)",

      padding: "50px 40px",

      borderRadius: "20px",

      boxShadow: "0 20px 50px rgba(0,0,0,0.3)",

      width: "90%",
      maxWidth: "380px",

      textAlign: "center",

      zIndex: 2,
    },

    title: {
      fontSize: "2rem",
      fontWeight: "700",

      marginBottom: "30px",

      color: "#ffffff",
    },

    input: {
      width: "100%",

      padding: "15px",

      margin: "12px 0",

      borderRadius: "12px",

      border: "1px solid rgba(255,255,255,0.3)",

      outline: "none",

      fontSize: "1rem",

      backgroundColor: "rgba(255,255,255,0.1)",

      color: "#ffffff",

      boxSizing: "border-box",
    },

    button: {
      width: "100%",

      padding: "15px",

      background: "linear-gradient(135deg,#22c55e,#16a34a)",

      color: "#fff",

      border: "none",

      borderRadius: "12px",

      cursor: "pointer",

      marginTop: "20px",

      fontSize: "1rem",

      fontWeight: "600",
    },

    linkText: {
      marginTop: "20px",

      color: "#ffffff",
    },

    registerLink: {
      color: "#22c55e",

      textDecoration: "none",

      fontWeight: "600",
    },
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);

    const loadingToast = toast.loading("Logging in...");

    try {
      const response = await axios.post(
        "https://foodlink-0jeg.onrender.com/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem("token", response.data.token);

      localStorage.setItem(
        "role",
        response.data.user.role
      );

      toast.success(
        "Login successful! Welcome back 🎉",
        { id: loadingToast }
      );

      if (
        response.data.user.role === "donor"
      ) {
        navigate("/donor-dashboard");
      } else if (
        response.data.user.role === "receiver"
      ) {
        navigate("/receiver-dashboard");
      }
    } catch (err) {
      const message =
        err.response?.data?.message ||
        "Server not responding";

      toast.error(message, {
        id: loadingToast,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}></div>

      <div style={styles.card}>
        <h2 style={styles.title}>
          Welcome Back!
        </h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            style={styles.input}
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            required
          />

          <input
            type="password"
            placeholder="Password"
            style={styles.input}
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            required
          />

          <button
            style={styles.button}
            type="submit"
            disabled={loading}
          >
            {loading
              ? "Logging in..."
              : "Login"}
          </button>
        </form>

        <p style={styles.linkText}>
          Don't have an account?{" "}
          <Link
            to="/register"
            style={styles.registerLink}
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;



