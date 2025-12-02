// import React, { useState } from "react";

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Login data:", formData);
//     // TODO: connect with backend API
//   };

//   const styles = {
//     container: {
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       height: "100vh",
//       background: "#758da5ff",
//       fontFamily: "Poppins, sans-serif",
//     },
//     card: {
//       background: "#ffffff",
//       padding: "40px",
//       borderRadius: "20px",
//       boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
//       width: "350px",
//       textAlign: "center",
//     },
//     input: {
//       width: "100%",
//       padding: "10px",
//       margin: "10px 0",
//       borderRadius: "8px",
//       border: "1px solid #ccc",
//       fontSize: "1rem",
//     },
//     button: {
//       background: "#3a5b80",
//       color: "white",
//       border: "none",
//       padding: "12px 20px",
//       width: "100%",
//       borderRadius: "8px",
//       cursor: "pointer",
//       fontSize: "1rem",
//       marginTop: "10px",
//     },
//     link: {
//       marginTop: "15px",
//       display: "block",
//       color: "#3a5b80",
//       textDecoration: "none",
//       fontSize: "0.9rem",
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.card}>
//         <h2>Login to FoodLink</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             style={styles.input}
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             style={styles.input}
//             required
//           />
//           <button type="submit" style={styles.button}>
//             Login
//           </button>
//         </form>
//         <a href="/register" style={styles.link}>
//           Don’t have an account? Register
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React from "react";
// import { Link } from "react-router-dom";

// const Login = () => {
//   const styles = {
//     container: {
//       position: "fixed",
//       top: 0,
//       left: 0,
//       width: "100vw",
//       height: "100vh",
//       backgroundImage: 'url("https://img.freepik.com/free-photo/top-view-trash-cooking-concept_23-2149056487.jpg")',
//       backgroundSize: "cover",       // cover entire container
//       backgroundPosition: "center",  // center the image
//       backgroundRepeat: "no-repeat", // no repeating
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       fontFamily: "Poppins, sans-serif",
//       zIndex: 1,
//     },
//     card: {
//       backgroundColor: "white",
//       padding: "40px 50px",
//       borderRadius: "16px",
//       boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
//       width: "380px",
//       textAlign: "center",
//       zIndex: 2, // ensures form is above everything
//     },
//     title: {
//       fontSize: "1.6rem",
//       fontWeight: "700",
//       marginBottom: "25px",
//       color: "#1e293b",
//     },
//     input: {
//       width: "100%",
//       padding: "12px",
//       margin: "10px 0",
//       borderRadius: "8px",
//       border: "1px solid #ccc",
//       outline: "none",
//       fontSize: "1rem",
//       zIndex: 3,
//       position: "relative",
//     },
//     button: {
//       width: "100%",
//       padding: "12px",
//       backgroundColor: "#1e293b",
//       color: "white",
//       border: "none",
//       borderRadius: "8px",
//       cursor: "pointer",
//       marginTop: "15px",
//       fontSize: "1rem",
//       fontWeight: "600",
//       transition: "background 0.3s ease",
//     },
//     linkText: {
//       marginTop: "15px",
//       fontSize: "0.9rem",
//       color: "#1e293b",
//     },
//     registerLink: {
//       color: "#22c55e",
//       textDecoration: "none",
//       fontWeight: "500",
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.card}>
//         <h2 style={styles.title}>Login to FoodLink</h2>
//         <input type="email" placeholder="Email" style={styles.input} />
//         <input type="password" placeholder="Password" style={styles.input} />
//         <button style={styles.button}>Login</button>
//         <p style={styles.linkText}>
//           Don’t have an account?{" "}
//           <Link to="/register" style={styles.registerLink}>
//             Register
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React from "react";
// import { Link } from "react-router-dom";

// const Login = () => {
//   const styles = {
//     container: {
//       position: "fixed",
//       top: 0,
//       left: 0,
//       width: "100vw",
//       height: "100vh",
//       backgroundImage:
//         'url("https://img.freepik.com/free-photo/top-view-trash-cooking-concept_23-2149056487.jpg")',
//       backgroundSize: "cover",
//       backgroundPosition: "center",
//       backgroundRepeat: "no-repeat",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       fontFamily: "Poppins, sans-serif",
//       overflow: "hidden",
//     },
//     overlay: {
//       position: "absolute",
//       top: 0,
//       left: 0,
//       width: "100%",
//       height: "100%",
//       backgroundColor: "rgba(0,0,0,0.5)",
//       zIndex: 1,
//     },
//     card: {
//       position: "relative",
//       background: "rgba(145, 142, 142, 0.2)",
//       backdropFilter: "blur(15px)",
//       padding: "50px 40px",
//       borderRadius: "20px",
//       boxShadow: "0 20px 50px rgba(0, 0, 0, 0.3)",
//       width: "380px",
//       textAlign: "center",
//       zIndex: 2,
//       color: "#000000ff",
//     },
//     title: {
//       fontSize: "2rem",
//       fontWeight: "700",
//       marginBottom: "30px",
//       color: "#1a1919ff",
//     },
//     input: {
//       width: "100%",
//       padding: "15px",
//       margin: "12px 0",
//       borderRadius: "12px",
//       border: "1px solid rgba(11, 7, 7, 0.5)",
//       outline: "none",
//       fontSize: "1rem",
//       backgroundColor: "rgba(10, 10, 10, 0.1)",
//       color: "#080808ff",
//       boxShadow: "inset 0 2px 5px rgba(0,0,0,0.2)", // subtle depth
//       transition: "none", // remove shrink or transition effect
//     },
//     button: {
//       width: "100%",
//       padding: "15px",
//       background: "linear-gradient(135deg, #22c55e, #16a34a)",
//       color: "white",
//       border: "none",
//       borderRadius: "12px",
//       cursor: "pointer",
//       marginTop: "20px",
//       fontSize: "1rem",
//       fontWeight: "600",
//     },
//     linkText: {
//       marginTop: "20px",
//       fontSize: "0.95rem",
//       color: "#f6eeeeff",
//     },
//     registerLink: {
//       color: "#0c0c0cff",
//       textDecoration: "none",
//       fontWeight: "500",
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.overlay}></div>
//       <div style={styles.card}>
//         <h2 style={styles.title}>Welcome Back!</h2>
//         <input type="email" placeholder="Email" style={styles.input} />
//         <input type="password" placeholder="Password" style={styles.input} />
//         <button style={styles.button}>Login</button>
//         <p style={styles.linkText}>
//           Don’t have an account?{" "}
//           <Link to="/register" style={styles.registerLink}>
//             Register
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import user from "../../../backend/models/user";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const styles = {
    container: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundImage:
        'url("https://img.freepik.com/free-photo/top-view-trash-cooking-concept_23-2149056487.jpg")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Poppins, sans-serif",
      overflow: "hidden",
    },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.5)",
      zIndex: 1,
    },
    card: {
      position: "relative",
      background: "rgba(145, 142, 142, 0.2)",
      backdropFilter: "blur(15px)",
      padding: "50px 40px",
      borderRadius: "20px",
      boxShadow: "0 20px 50px rgba(0, 0, 0, 0.3)",
      width: "380px",
      textAlign: "center",
      zIndex: 2,
      color: "#000000ff",
    },
    title: {
      fontSize: "2rem",
      fontWeight: "700",
      marginBottom: "30px",
      color: "#1a1919ff",
    },
    input: {
      width: "100%",
      padding: "15px",
      margin: "12px 0",
      borderRadius: "12px",
      border: "1px solid rgba(11, 7, 7, 0.5)",
      outline: "none",
      fontSize: "1rem",
      backgroundColor: "rgba(10, 10, 10, 0.1)",
      color: "#080808ff",
      boxShadow: "inset 0 2px 5px rgba(0,0,0,0.2)",
    },
    button: {
      width: "100%",
      padding: "15px",
      background: "linear-gradient(135deg, #22c55e, #16a34a)",
      color: "white",
      border: "none",
      borderRadius: "12px",
      cursor: "pointer",
      marginTop: "20px",
      fontSize: "1rem",
      fontWeight: "600",
    },
    linkText: {
      marginTop: "20px",
      fontSize: "0.95rem",
      color: "#f6eeeeff",
    },
    registerLink: {
      color: "#0c0c0cff",
      textDecoration: "none",
      fontWeight: "500",
    },
    error: {
      color: "red",
      marginTop: "10px",
      fontSize: "0.9rem",
    },
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const response = await axios.post("https://foodlink-0jeg.onrender.com/request-food", {
        email,
        password,
      });
      console.log("Login Response:", response.data);


      
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role);
      // localStorage.setItem("userId", response.data.user.id);
      // navigate("/dashboard"); 
      localStorage.setItem("role", response.data.user.role);
      if (response.data.user.role === "donor") {
  navigate("/donor-dashboard");
} else if (response.data.user.role === "receiver") {
  navigate("/receiver-dashboard");
}
// if (user.role === "donor") {
//       navigate("/donor-dashboard");
//     } else {
//       navigate("/receiver-dashboard");
//     }

    } catch (err) {
      console.log(err);
      if (err.response && err.response.data) {
        setError(err.response.data.message || "Login failed");
      } else {
        setError("Server not responding");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}></div>
      <div style={styles.card}>
        <h2 style={styles.title}>Welcome Back!</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            style={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            style={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button style={styles.button} type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        {error && <p style={styles.error}>{error}</p>}
        <p style={styles.linkText}>
          Don’t have an account?{" "}
          <Link to="/register" style={styles.registerLink}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;



