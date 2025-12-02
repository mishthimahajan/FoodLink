// import React, { useState } from "react";

// const AddFood = () => {
//   const [formData, setFormData] = useState({
//     foodName: "",
//     quantity: "",
//     location: "",
//     expiry: "",
//     description: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Food added:", formData);
//     alert("🍱 Food added successfully!");
//     setFormData({
//       foodName: "",
//       quantity: "",
//       location: "",
//       expiry: "",
//       description: "",
//     });
//   };

//   const styles = {
//     container: {
//       width: "100vw",
//       height: "100vh",
//       background: "linear-gradient(135deg, #0f172a 0%, #065f46 100%)",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       fontFamily: "'Poppins', sans-serif",
//       color: "#f8fafc",
//     },
//     card: {
//       background: "rgba(255, 255, 255, 0.1)",
//       backdropFilter: "blur(20px)",
//       borderRadius: "16px",
//       padding: "40px 50px",
//       width: "450px",
//       boxShadow: "0 8px 25px rgba(0,0,0,0.4)",
//     },
//     heading: {
//       fontSize: "2rem",
//       fontWeight: "700",
//       textAlign: "center",
//       marginBottom: "25px",
//       color: "#86efac",
//     },
//     label: {
//       display: "block",
//       fontWeight: "600",
//       fontSize: "0.95rem",
//       marginBottom: "6px",
//       marginTop: "15px",
//     },
//     input: {
//       width: "100%",
//       padding: "10px 14px",
//       borderRadius: "8px",
//       border: "none",
//       outline: "none",
//       backgroundColor: "rgba(255,255,255,0.2)",
//       color: "#f1f5f9",
//       fontSize: "1rem",
//       transition: "all 0.3s ease",
//     },
//     textarea: {
//       width: "100%",
//       padding: "10px 14px",
//       borderRadius: "8px",
//       border: "none",
//       outline: "none",
//       backgroundColor: "rgba(255,255,255,0.2)",
//       color: "#f1f5f9",
//       fontSize: "1rem",
//       resize: "none",
//       height: "80px",
//     },
//     button: {
//       marginTop: "25px",
//       width: "100%",
//       backgroundColor: "#22c55e",
//       border: "none",
//       borderRadius: "8px",
//       padding: "12px",
//       color: "#0f172a",
//       fontWeight: "600",
//       fontSize: "1rem",
//       cursor: "pointer",
//       transition: "all 0.3s ease",
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.card}>
//         <h2 style={styles.heading}>🍱 Add Food Donation</h2>
//         <form onSubmit={handleSubmit}>
//           <label style={styles.label}>Food Name</label>
//           <input
//             type="text"
//             name="foodName"
//             value={formData.foodName}
//             onChange={handleChange}
//             style={styles.input}
//             placeholder="e.g., Cooked Rice, Fruits"
//             required
//           />

//           <label style={styles.label}>Quantity</label>
//           <input
//             type="text"
//             name="quantity"
//             value={formData.quantity}
//             onChange={handleChange}
//             style={styles.input}
//             placeholder="e.g., 5 plates, 10 kg"
//             required
//           />

//           <label style={styles.label}>Location</label>
//           <input
//             type="text"
//             name="location"
//             value={formData.location}
//             onChange={handleChange}
//             style={styles.input}
//             placeholder="Enter pickup address or area"
//             required
//           />

//           <label style={styles.label}>Expiry Time</label>
//           <input
//             type="text"
//             name="expiry"
//             value={formData.expiry}
//             onChange={handleChange}
//             style={styles.input}
//             placeholder="e.g., 4 hours, Today 8 PM"
//             required
//           />

//           <label style={styles.label}>Description</label>
//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             style={styles.textarea}
//             placeholder="Write additional details about food"
//             required
//           />

//           <button
//             type="submit"
//             style={styles.button}
//             onMouseOver={(e) => (e.target.style.backgroundColor = "#16a34a")}
//             onMouseOut={(e) => (e.target.style.backgroundColor = "#22c55e")}
//           >
//             Add Food
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddFood;


// import React, { useState } from "react";

// const AddFood = () => {
//   const [formData, setFormData] = useState({
//     foodName: "",
//     quantity: "",
//     location: "",
//     contact: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Food added successfully!");
//   };

//   const styles = {
//     container: {
//       minHeight: "100vh",
//       background: "linear-gradient(135deg, #14532d 0%, #052e16 100%)",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       padding: "50px 0",
//     },
//     formCard: {
//       background: "rgba(255,255,255,0.12)",
//       backdropFilter: "blur(14px)",
//       borderRadius: "16px",
//       padding: "40px",
//       width: "90%",
//       maxWidth: "600px",
//       color: "#f8fafc",
//       boxShadow: "0 8px 25px rgba(0,0,0,0.4)",
//     },
//     heading: {
//       fontSize: "2rem",
//       textAlign: "center",
//       marginBottom: "25px",
//       color: "#86efac",
//       fontWeight: "700",
//     },
//     input: {
//       width: "100%",
//       padding: "12px",
//       margin: "10px 0",
//       border: "none",
//       borderRadius: "8px",
//       background: "rgba(255,255,255,0.1)",
//       color: "#fff",
//       fontSize: "1rem",
//     },
//     button: {
//       width: "100%",
//       backgroundColor: "#22c55e",
//       color: "#0f172a",
//       border: "none",
//       padding: "12px",
//       borderRadius: "8px",
//       fontWeight: "600",
//       fontSize: "1rem",
//       cursor: "pointer",
//       marginTop: "15px",
//       transition: "0.3s",
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <form style={styles.formCard} onSubmit={handleSubmit}>
//         <h2 style={styles.heading}>🍱 Add Food</h2>

//         <input
//           type="text"
//           name="foodName"
//           placeholder="Food Name"
//           style={styles.input}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="text"
//           name="quantity"
//           placeholder="Quantity"
//           style={styles.input}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="text"
//           name="location"
//           placeholder="Pickup Location"
//           style={styles.input}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="text"
//           name="contact"
//           placeholder="Contact Number"
//           style={styles.input}
//           onChange={handleChange}
//           required
//         />

//         <button type="submit" style={styles.button}>
//           Add Food
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddFood;


// import React, { useState } from "react";

// const AddFood = () => {
//   const [formData, setFormData] = useState({
//     foodName: "",
//     quantity: "",
//     location: "",
//     contact: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Food added successfully!");
//     setFormData({ foodName: "", quantity: "", location: "", contact: "" });
//   };

//   const styles = {
//     container: {
//       minHeight: "100vh",
//       width: "100vw",
//       background: "linear-gradient(135deg, #064e3b, #022c22)",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       padding: "50px 0",
//     },
//     card: {
//       background: "rgba(255, 255, 255, 0.12)",
//       backdropFilter: "blur(16px)",
//       borderRadius: "16px",
//       padding: "40px 50px",
//       width: "90%",
//       maxWidth: "600px",
//       color: "#f8fafc",
//       boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
//     },
//     heading: {
//       textAlign: "center",
//       fontSize: "2rem",
//       fontWeight: "700",
//       color: "#86efac",
//       marginBottom: "25px",
//     },
//     input: {
//       width: "100%",
//       padding: "12px",
//       marginBottom: "15px",
//       border: "none",
//       borderRadius: "8px",
//       background: "rgba(244, 236, 236, 1)",
//       color: "#070707ff",
//       fontSize: "1rem",
//       outline: "none",
//     },
//     button: {
//       width: "100%",
//       backgroundColor: "#22c55e",
//       color: "#0f172a",
//       border: "none",
//       borderRadius: "8px",
//       padding: "12px",
//       fontWeight: "600",
//       fontSize: "1rem",
//       cursor: "pointer",
//       transition: "0.3s ease",
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <form style={styles.card} onSubmit={handleSubmit}>
//         <h2 style={styles.heading}>🍱 Add Food</h2>

//         <input
//           type="text"
//           name="foodName"
//           placeholder="Food Name"
//           style={styles.input}
//           value={formData.foodName}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="text"
//           name="quantity"
//           placeholder="Quantity"
//           style={styles.input}
//           value={formData.quantity}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="text"
//           name="location"
//           placeholder="Pickup Location"
//           style={styles.input}
//           value={formData.location}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="text"
//           name="contact"
//           placeholder="Contact Number"
//           style={styles.input}
//           value={formData.contact}
//           onChange={handleChange}
//           required
//         />

//         <button type="submit" style={styles.button}>
//           Submit Food
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddFood;


import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddFood = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    foodName: "",
    quantity: "",
    location: "",
    contact: "",
  });

  const [message, setMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit form to backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://foodlink-0jeg.onrender.com/request-food", formData);

      if (res.status === 201) {
        setMessage("🍱 Food added successfully!");
        setFormData({ foodName: "", quantity: "", location: "", contact: "" });
        setTimeout(() => {
          navigate("/receiver/browse-food");
        }, 1000);
      }
    } catch (error) {
      console.error("Error adding food:", error);
      setMessage("❌ Failed to add food. Please check the backend connection.");
    }
  };

  const styles = {
    container: {
      minHeight: "100vh",
      width: "100vw",
      background: "linear-gradient(135deg, #064e3b, #022c22)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "50px 0",
    },
    card: {
      background: "rgba(255, 255, 255, 0.12)",
      backdropFilter: "blur(16px)",
      borderRadius: "16px",
      padding: "40px 50px",
      width: "90%",
      maxWidth: "600px",
      color: "#f8fafc",
      boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
    },
    heading: {
      textAlign: "center",
      fontSize: "2rem",
      fontWeight: "700",
      color: "#86efac",
      marginBottom: "25px",
    },
    input: {
      width: "100%",
      padding: "12px",
      marginBottom: "15px",
      border: "none",
      borderRadius: "8px",
      background: "rgba(244, 236, 236, 1)",
      color: "#070707ff",
      fontSize: "1rem",
      outline: "none",
    },
    button: {
      width: "100%",
      backgroundColor: "#22c55e",
      color: "#0f172a",
      border: "none",
      borderRadius: "8px",
      padding: "12px",
      fontWeight: "600",
      fontSize: "1rem",
      cursor: "pointer",
      transition: "0.3s ease",
    },
    message: {
      textAlign: "center",
      color: "#fff",
      marginTop: "15px",
      fontWeight: "500",
    },
  };

  return (
    <div style={styles.container}>
      <form style={styles.card} onSubmit={handleSubmit}>
        <h2 style={styles.heading}>🍱 Add Food</h2>

        <input
          type="text"
          name="foodName"
          placeholder="Food Name"
          style={styles.input}
          value={formData.foodName}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="quantity"
          placeholder="Quantity"
          style={styles.input}
          value={formData.quantity}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Pickup Location"
          style={styles.input}
          value={formData.location}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="contact"
          placeholder="Contact Number"
          style={styles.input}
          value={formData.contact}
          onChange={handleChange}
          required
        />

        <button type="submit" style={styles.button}>
          Submit Food
        </button>

        {message && <p style={styles.message}>{message}</p>}
      </form>
    </div>
  );
};

export default AddFood;
