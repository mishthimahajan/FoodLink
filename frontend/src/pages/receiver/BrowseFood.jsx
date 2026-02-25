

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const BrowseFood = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // 🔹 Fetch food data from backend
  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await axios.get("https://foodlink-0jeg.onrender.com/browse-food");
        setFoods(response.data.foods || []);
      } catch (error) {
        console.error("Error fetching food:", error);
        toast.error("❌ Failed to fetch food items. Please check your backend.");
      } finally {
        setLoading(false);
      }
    };

    fetchFoods();
  }, []);



const handleRequest = async (foodId) => {
  try {
    const token = localStorage.getItem("token");
    console.log("Token:", token);

    const res = await axios.post(
      "https://foodlink-0jeg.onrender.com/request-food",
      { foodId },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },
      }
    );

    toast.success(res.data.message || "Request sent! ✅");
    navigate("/receiver/my-requests");

  } catch (err) {
    console.error("Error requesting food:", err);
    toast.error("❌ Failed to request food. Please try again.");
  }
};


  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "linear-gradient(135deg, #059669, #10b981, #34d399)",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "60px 20px",
        overflowX: "hidden",
      }}
    >
      <div style={{ width: "100%", maxWidth: "1300px" }}>
        <h1
          style={{
            textAlign: "center",
            color: "#fff",
            fontSize: "3rem",
            fontWeight: "800",
            marginBottom: "50px",
            textShadow: "0 2px 10px rgba(0,0,0,0.3)",
          }}
        >
          🍛 Available Food Listings
        </h1>

        {loading ? (
          <p style={{ color: "white", textAlign: "center" }}>Loading food items...</p>
        ) : foods.length === 0 ? (
          <p style={{ color: "white", textAlign: "center" }}>No available food found 🥲</p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "30px",
            }}
          >
            {foods.map((food, index) => (
              <div
                key={food._id || index}
                style={{
                  background: "rgba(255, 255, 255, 0.9)",
                  borderRadius: "16px",
                  padding: "20px",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <h2 style={{ color: "#065f46", fontSize: "1.5rem", fontWeight: "700", marginBottom: "10px" }}>
                  {food.foodName}
                </h2>
                <p style={{ color: "#334155", margin: "5px 0" }}>
                  <strong>Quantity:</strong> {food.quantity}
                </p>
                <p style={{ color: "#334155", margin: "5px 0" }}>
                  <strong>Location:</strong> {food.location}
                </p>
                <p style={{ color: "#334155", margin: "5px 0" }}>
                  <strong>Contact:</strong> {food.contact}
                </p>
                <p style={{ color: "#334155", margin: "5px 0 15px" }}>
                  <strong>Donor:</strong> {food?.donorId?.fullName || "Anonymous"}
                </p>
                <button
                  onClick={() => handleRequest(food._id)}
                  style={{
                    backgroundColor: "#16a34a",
                    color: "white",
                    padding: "10px",
                    width: "100%",
                    border: "none",
                    borderRadius: "8px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "background 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = "#15803d")}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = "#16a34a")}
                >
                  Request Food 🍽️
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowseFood;



