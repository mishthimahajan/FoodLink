// import React, { useState } from "react";

// const Register = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Register data:", formData);
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
//         <h2>Create an Account</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Full Name"
//             value={formData.name}
//             onChange={handleChange}
//             style={styles.input}
//             required
//           />
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
//             Register
//           </button>
//         </form>
//         <a href="/login" style={styles.link}>
//           Already have an account? Login
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Register;

// import React from "react";
// import { Link } from "react-router-dom";

// const Register = () => {
//   const styles = {
//     // container: {
//     //   position: "fixed",
//     //   top: 0,
//     //   left: 0,
//     //   width: "100vw",
//     //   height: "100vh",
//     //   backgroundColor: "#758da5",
//     //   display: "flex",
//     //   justifyContent: "center",
//     //   alignItems: "center",
//     //   fontFamily: "Poppins, sans-serif",
//     //   zIndex: 1, // clickable and above navbar background
//     // },
//     container: {
//       position: "fixed",
//       top: 0,
//       left: 0,
//       width: "100vw",
//       height: "100vh",
//       backgroundImage:
//         "url('https://img.freepik.com/premium-photo/colorful-flower-petals-scattered-turquoise-background-creating-vibrant-artistic-composition_923559-32212.jpg?semt=ais_hybrid&w=740&q=80')",
//       backgroundSize: "cover",
//       backgroundPosition: "center",
//       backgroundRepeat: "no-repeat",
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
//       zIndex: 2,
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
//     loginLink: {
//       color: "#22c55e",
//       textDecoration: "none",
//       fontWeight: "500",
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.card}>
//         <h2 style={styles.title}>Create Your FoodLink Account</h2>
//         <input type="text" placeholder="Full Name" style={styles.input} />
//         <input type="email" placeholder="Email" style={styles.input} />
//         <input type="password" placeholder="Password" style={styles.input} />
//         <input type="password" placeholder="Confirm Password" style={styles.input} />
//         <button style={styles.button}>Register</button>
//         <p style={styles.linkText}>
//           Already have an account?{" "}
//           <Link to="/login" style={styles.loginLink}>
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;

// import React from "react";
// import { Link } from "react-router-dom";

// const Register = () => {
//   const styles = {
//     container: {
//       position: "fixed",
//       top: 0,
//       left: 0,
//       width: "100vw",
//       height: "100vh",
//       backgroundImage:
//         "url('https://img.freepik.com/premium-photo/colorful-flower-petals-scattered-turquoise-background-creating-vibrant-artistic-composition_923559-32212.jpg?semt=ais_hybrid&w=740&q=80')",
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
//       backgroundColor: "rgba(0, 0, 0, 0.5)",
//       zIndex: 1,
//     },
//     card: {
//       position: "relative",
//       background: "rgba(87, 87, 87, 0.2)",
//       backdropFilter: "blur(15px)",
//       padding: "50px 40px",
//       borderRadius: "20px",
//       boxShadow: "0 20px 50px rgba(86, 86, 86, 0.3)",
//       width: "380px",
//       textAlign: "center",
//       zIndex: 2,
//       color: "#000000ff",
//       animation: "fadeInCard 1s ease",
//     },
//     title: {
//       fontSize: "2rem",
//       fontWeight: "700",
//       marginBottom: "30px",
//       color: "#fff",
//     },
//     input: {
//       width: "100%",
//       padding: "15px",
//       margin: "12px 0",
//       borderRadius: "12px",
//       border: "1px solid rgba(0, 0, 0, 0.5)",
//       outline: "none",
//       fontSize: "1rem",
//       backgroundColor: "rgba(0, 0, 0, 0.1)",
//       color: "#f1f1f1ff",
//       boxShadow: "inset 0 2px 5px rgba(0, 0, 0, 0.2)",
//       transition: "none", // no shrink or animation on click
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
//       boxShadow: "inset 0 3px 6px rgba(0,0,0,0.2)",
//     },
//     linkText: {
//       marginTop: "20px",
//       fontSize: "0.95rem",
//       color: "#ffffffff",
//     },
//     loginLink: {
//       color: "#080909ff",
//       textDecoration: "none",
//       fontWeight: "500",
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.overlay}></div>
//       <div style={styles.card}>
//         <h2 style={styles.title}>Create Your FoodLink Account</h2>
//         <input type="text" placeholder="Full Name" style={styles.input} />
//         <input type="email" placeholder="Email" style={styles.input} />
//         <input type="password" placeholder="Password" style={styles.input} />
        
//         <button style={styles.button}>Register</button>
//         <p style={styles.linkText}>
//           Already have an account?{" "}
//           <Link to="/login" style={styles.loginLink}>
//             Login
//           </Link>
//         </p>
//       </div>

//       {/* Card fade-in animation */}
//       <style>{`
//         @keyframes fadeInCard {
//           from { opacity: 0; transform: translateY(-20px);}
//           to { opacity: 1; transform: translateY(0);}
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Register;

// import React, { useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const Register = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//     role: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:3000/register", formData);
//       alert(res.data.message || "User registered successfully!");
//       setFormData({ fullName: "", email: "", password: "",role: "" });
//     } catch (err) {
//       console.error(err);
//       alert("❌ Registration failed. Please check your backend connection.");
//     }
//   };

//   const styles = {
//     container: {
//       position: "fixed",
//       top: 0,
//       left: 0,
//       width: "100vw",
//       height: "100vh",
//       backgroundImage:
//         "url('https://img.freepik.com/premium-photo/colorful-flower-petals-scattered-turquoise-background-creating-vibrant-artistic-composition_923559-32212.jpg?semt=ais_hybrid&w=740&q=80')",
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
//       backgroundColor: "rgba(0, 0, 0, 0.5)",
//       zIndex: 1,
//     },
//     card: {
//       position: "relative",
//       background: "rgba(87, 87, 87, 0.2)",
//       backdropFilter: "blur(15px)",
//       padding: "50px 40px",
//       borderRadius: "20px",
//       boxShadow: "0 20px 50px rgba(86, 86, 86, 0.3)",
//       width: "380px",
//       textAlign: "center",
//       zIndex: 2,
//       color: "#000000ff",
//       animation: "fadeInCard 1s ease",
//     },
//     title: {
//       fontSize: "2rem",
//       fontWeight: "700",
//       marginBottom: "30px",
//       color: "#fff",
//     },
//     input: {
//       width: "100%",
//       padding: "15px",
//       margin: "12px 0",
//       borderRadius: "12px",
//       border: "1px solid rgba(0, 0, 0, 0.5)",
//       outline: "none",
//       fontSize: "1rem",
//       backgroundColor: "rgba(0, 0, 0, 0.1)",
//       color: "#f1f1f1ff",
//       boxShadow: "inset 0 2px 5px rgba(0, 0, 0, 0.2)",
//     },
    
//     linkText: {
//       marginTop: "20px",
//       fontSize: "0.95rem",
//       color: "#ffffffff",
//     },
//     loginLink: {
//       color: "#080909ff",
//       textDecoration: "none",
//       fontWeight: "500",
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.overlay}></div>
//       <form style={styles.card} onSubmit={handleSubmit}>
//         <h2 style={styles.title}>Create Your FoodLink Account</h2>

//         <input
//           type="text"
//           name="fullName"
//           placeholder="Full Name"
//           style={styles.input}
//           value={formData.fullName}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           style={styles.input}
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           style={styles.input}
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />
//         <select
//           name="role"
//           style={styles.select}
//           value={formData.role}
//           onChange={handleChange}
//           required
//         >
//           <option value="donor">Donor</option>
//           <option value="receiver">Receiver</option>
//         </select>

//         <button type="submit" style={styles.button}>Register</button>

//         <p style={styles.linkText}>
//           Already have an account?{" "}
//           <Link to="/login" style={styles.loginLink}>
//             Login
//           </Link>
//         </p>
//       </form>

//       {/* Card fade-in animation */}
//       <style>{`
//         @keyframes fadeInCard {
//           from { opacity: 0; transform: translateY(-20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Register;



import React, { useState } from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";


const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "",
  });

  
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRoleSelect = (role) => {
    setFormData({ ...formData, role });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://foodlink-0jeg.onrender.com/request-food", formData);
      alert(res.data.message || "User registered successfully!");
      setFormData({ fullName: "", email: "", password: "", role: "" });

      navigate("/login");
       

    } catch (err) {
      console.error(err);
      alert("❌ Registration failed. Please check your backend connection.");
    }
  };

  const styles = {
    container: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundImage:
        "url('https://img.freepik.com/premium-photo/colorful-flower-petals-scattered-turquoise-background-creating-vibrant-artistic-composition_923559-32212.jpg?semt=ais_hybrid&w=740&q=80')",
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
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 1,
    },
    card: {
      position: "relative",
      background: "rgba(87, 87, 87, 0.2)",
      backdropFilter: "blur(15px)",
      padding: "50px 40px",
      borderRadius: "20px",
      boxShadow: "0 20px 50px rgba(86, 86, 86, 0.3)",
      width: "380px",
      textAlign: "center",
      zIndex: 2,
      color: "white",
      animation: "fadeInCard 1s ease",
    },
    title: {
      fontSize: "2rem",
      fontWeight: "700",
      marginBottom: "30px",
      color: "white",
    },
    input: {
      width: "100%",
      padding: "15px",
      margin: "12px 0",
      borderRadius: "12px",
      border: "1px solid rgba(238, 235, 235, 0.3)",
      outline: "none",
      fontSize: "1rem",
      backgroundColor: "rgba(228, 220, 220, 0.59)",
      color: "white",
      boxShadow: "inset 0 2px 5px rgba(0, 0, 0, 0.2)",
    },
    roleContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "15px",
      marginTop: "15px",
      marginBottom: "25px",
    },
    roleButton: (active) => ({
      flex: 1,
      padding: "12px 0",
      borderRadius: "10px",
      border: "2px solid #22c55e",
      background: active
        ? "linear-gradient(135deg, #22c55e, #16a34a)"
        : "transparent",
      color: active ? "white" : "#22c55e",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
    }),
    button: {
      width: "100%",
      padding: "15px",
      background: "linear-gradient(135deg, #22c55e, #16a34a)",
      color: "white",
      border: "none",
      borderRadius: "12px",
      cursor: "pointer",
      marginTop: "10px",
      fontSize: "1rem",
      fontWeight: "600",
      boxShadow: "0 3px 8px rgba(0,0,0,0.3)",
      transition: "transform 0.2s ease",
    },
    linkText: {
      marginTop: "20px",
      fontSize: "0.95rem",
      color: "white",
    },
    loginLink: {
      color: "#16a34a",
      textDecoration: "none",
      fontWeight: "600",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}></div>
      <form style={styles.card} onSubmit={handleSubmit}>
        <h2 style={styles.title}>Create Your FoodLink Account</h2>

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

        {/* Role selection buttons */}
        <div style={styles.roleContainer}>
          <button
            type="button"
            onClick={() => handleRoleSelect("donor")}
            style={styles.roleButton(formData.role === "donor")}
          >
            Donor
          </button>
          <button
            type="button"
            onClick={() => handleRoleSelect("receiver")}
            style={styles.roleButton(formData.role === "receiver")}
          >
            Receiver
          </button>
        </div>

        <button type="submit" style={styles.button}>
          Register
        </button>

        <p style={styles.linkText}>
          Already have an account?{" "}
          <Link to="/login" style={styles.loginLink}>
            Login
          </Link>
        </p>
      </form>

      <style>{`
        @keyframes fadeInCard {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        button:hover {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default Register;

