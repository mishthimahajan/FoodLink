// import React, { useState, useEffect } from "react";
// import FoodCard from "../../components/FoodCard";

// const BrowseFood = () => {
//   const [foods, setFoods] = useState([
//     { name: "Rice & Curry", quantity: "3 plates", location: "Delhi", expiryDate: "2025-10-23", donorName: "Anita" },
//     { name: "Bread Packets", quantity: "10 pcs", location: "Noida", expiryDate: "2025-10-22", donorName: "Ravi" },
//   ]);

//   const handleRequest = (food) => {
//     alert(`Requested food: ${food.name}`);
//   };

//   return (
//     <div className="p-8 bg-gray-50 min-h-screen">
//       <h1 className="text-3xl font-bold text-center text-green-700 mb-8">🍛 Available Food Listings</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {foods.map((food, index) => (
//           <FoodCard key={index} food={food} onRequest={handleRequest} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BrowseFood;


// import React, { useState } from "react";
// import FoodCard from "../../components/FoodCard";

// const BrowseFood = () => {
//   const [foods, setFoods] = useState([
//     { name: "Rice & Curry", quantity: "3 plates", location: "Delhi", expiryDate: "2025-10-23", donorName: "Anita" },
//     { name: "Bread Packets", quantity: "10 pcs", location: "Noida", expiryDate: "2025-10-22", donorName: "Ravi" },
//     { name: "Fruit Basket", quantity: "5 items", location: "Gurgaon", expiryDate: "2025-10-24", donorName: "Sunita" },
//     { name: "Vegetable Pack", quantity: "2 kg", location: "Faridabad", expiryDate: "2025-10-23", donorName: "Ajay" },
//   ]);

//   const handleRequest = (food) => {
//     alert(`✅ Requested food: ${food.name}`);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-8">
//       <h1 className="text-4xl font-extrabold text-center text-green-800 mb-12 drop-shadow-lg">
//         🍛 Available Food Listings
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {foods.map((food, index) => (
//           <FoodCard key={index} food={food} onRequest={handleRequest} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BrowseFood;



// import React, { useState } from "react";
// import FoodCard from "../../components/FoodCard";

// const BrowseFood = () => {
//   const [foods, setFoods] = useState([
//     { name: "Rice & Curry", quantity: "3 plates", location: "Delhi", expiryDate: "2025-10-23", donorName: "Anita" },
//     { name: "Bread Packets", quantity: "10 pcs", location: "Noida", expiryDate: "2025-10-22", donorName: "Ravi" },
//     { name: "Fruit Basket", quantity: "5 items", location: "Gurgaon", expiryDate: "2025-10-24", donorName: "Sunita" },
//     { name: "Vegetable Pack", quantity: "2 kg", location: "Faridabad", expiryDate: "2025-10-23", donorName: "Ajay" },
//   ]);

//   const handleRequest = (food) => {
//     alert(`✅ Requested food: ${food.name}`);
//   };

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         width: "100vw",
//         background: "linear-gradient(135deg, #059669, #10b981, #34d399)",
//         backgroundAttachment: "fixed",
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "cover",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         padding: "60px 20px",
//         overflowX: "hidden",
//       }}
//     >
//       <div style={{ width: "100%", maxWidth: "1300px" }}>
//         <h1
//           style={{
//             textAlign: "center",
//             color: "#fff",
//             fontSize: "3rem",
//             fontWeight: "800",
//             marginBottom: "50px",
//             textShadow: "0 2px 10px rgba(0,0,0,0.3)",
//           }}
//         >
//           🍛 Available Food Listings
//         </h1>

//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//             gap: "30px",
//           }}
//         >
//           {foods.map((food, index) => (
//             <div
//               key={index}
//               style={{
//                 background: "rgba(255, 255, 255, 0.9)",
//                 borderRadius: "16px",
//                 padding: "20px",
//                 boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
//                 transition: "transform 0.3s ease, box-shadow 0.3s ease",
//               }}
//               onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
//               onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
//             >
//               <h2 style={{ color: "#065f46", fontSize: "1.5rem", fontWeight: "700", marginBottom: "10px" }}>
//                 {food.name}
//               </h2>
//               <p style={{ color: "#334155", margin: "5px 0" }}>
//                 <strong>Quantity:</strong> {food.quantity}
//               </p>
//               <p style={{ color: "#334155", margin: "5px 0" }}>
//                 <strong>Location:</strong> {food.location}
//               </p>
//               <p style={{ color: "#334155", margin: "5px 0" }}>
//                 <strong>Expiry:</strong> {food.expiryDate}
//               </p>
//               <p style={{ color: "#334155", margin: "5px 0 15px" }}>
//                 <strong>Donor:</strong> {food.donorName}
//               </p>
//               <button
//                 onClick={() => handleRequest(food)}
//                 style={{
//                   backgroundColor: "#16a34a",
//                   color: "white",
//                   padding: "10px",
//                   width: "100%",
//                   border: "none",
//                   borderRadius: "8px",
//                   fontWeight: "600",
//                   cursor: "pointer",
//                   transition: "background 0.3s ease",
//                 }}
//                 onMouseEnter={(e) => (e.target.style.backgroundColor = "#15803d")}
//                 onMouseLeave={(e) => (e.target.style.backgroundColor = "#16a34a")}
//               >
//                 Request Food 🍽️
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BrowseFood;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
        alert("❌ Failed to fetch food items. Please check your backend.");
      } finally {
        setLoading(false);
      }
    };

    fetchFoods();
  }, []);


//   useEffect(() => {
//   const fetchRequests = async () => {
//     try {
//       console.log("📡 Fetching requests...");
//       const res = await axios.get("http://localhost:3000/my-requests", {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });
//       console.log("✅ Response:", res.data);
//       setRequests(res.data.requests || []);
//     } catch (err) {
//       console.error("❌ Error fetching requests:", err);
//       setError("Failed to load your requests.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   fetchRequests();
// }, []);

  // const handleRequest = async (food) => {
  //   alert(`✅ You requested food: ${food.foodName}`);
  //   // Optionally, you can call an API to mark the food as "Requested" here.
  // };


//   const handleRequest = async (food) => {
//   try {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       alert("⚠️ Please login to request food!");
//       return;
//     }

//     // Send request to backend
//     const response = await axios.post(
//   "http://localhost:3000/request-food",
//   { foodId },
//   {
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem("token")}`,
//     }
//   }
// );

//     // Backend should respond with something like: { message: "Request successful!" }
//     alert(response.data.message || `✅ You requested ${food.foodName}`);

//   } catch (error) {
//     console.error("Error requesting food:", error);
//     alert("❌ Failed to request this food. Please try again.");
//   }
// };

const handleRequest = async (foodId) => {
  try {
    const token = localStorage.getItem("token");
    console.log("Token:", token);

    const res = await axios.post(
      "http://localhost:3000/request-food",
      { foodId },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },
      }
    );

    alert(res.data.message || "Request sent!");
    navigate("/receiver/my-requests");

  } catch (err) {
    console.error("Error requesting food:", err);
    alert("Failed to request food");
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



