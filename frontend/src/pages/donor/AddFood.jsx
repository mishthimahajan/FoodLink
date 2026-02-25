
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AddFood = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    foodName: "",
    quantity: "",
    location: "",
    contact: "",
  });

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
      const res = await axios.post("https://foodlink-0jeg.onrender.com/add-food", formData);

      if (res.status === 201) {
        toast.success("🍱 Food added successfully!");
        setFormData({ foodName: "", quantity: "", location: "", contact: "" });
        setTimeout(() => {
          navigate("/receiver/browse-food");
        }, 1000);
      }
    } catch (error) {
      console.error("Error adding food:", error);
      toast.error("❌ Failed to add food. Please check the backend connection.");
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
      </form>
    </div>
  );
};

export default AddFood;
