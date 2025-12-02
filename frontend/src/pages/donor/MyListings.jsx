// import React, { useState, useEffect } from "react";

// const MyListing = () => {
//   const [listings, setListings] = useState([
//     { name: "Rice & Curry", quantity: "3 plates", location: "Delhi", expiryDate: "2025-10-23" },
//     { name: "Bread Packets", quantity: "10 pcs", location: "Noida", expiryDate: "2025-10-22" },
//     { name: "Fruit Basket", quantity: "5 items", location: "Gurgaon", expiryDate: "2025-10-24" },
//   ]);

//   // Example: fetch donor listings from backend
//   // useEffect(() => {
//   //   fetch("/api/my-listings")
//   //     .then(res => res.json())
//   //     .then(data => setListings(data));
//   // }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-8">
//       <h1 className="text-4xl font-extrabold text-center text-green-800 mb-12 drop-shadow-lg">
//         🗂️ My Food Listings
//       </h1>

//       {listings.length === 0 ? (
//         <p className="text-center text-gray-700 text-lg">You have not added any food yet.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {listings.map((item, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 transition-transform duration-300 border-l-4 border-green-500"
//             >
//               <h2 className="text-xl font-bold text-green-700 mb-2">{item.name}</h2>
//               <p className="text-gray-700"><span className="font-semibold">Quantity:</span> {item.quantity}</p>
//               <p className="text-gray-700"><span className="font-semibold">Location:</span> {item.location}</p>
//               <p className="text-gray-700"><span className="font-semibold">Expiry:</span> {item.expiryDate}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyListing;


// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const MyListing = () => {
//   const [listings, setListings] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch donor listings from backend
//   useEffect(() => {
//     const fetchListings = async () => {
//       try {
//         const res = await axios.get("http://localhost:3000/my-listings");
//         setListings(res.data);
//       } catch (err) {
//         console.error("Error fetching listings:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchListings();
//   }, []);

//   return (
//     <div className="min-h-screen w-full bg-gradient-to-br from-green-200 via-green-100 to-green-300 flex flex-col items-center p-8">
//       <h1 className="text-4xl font-extrabold text-center text-green-800 mb-12 drop-shadow-lg">
//         🗂️ My Food Listings
//       </h1>

//       {loading ? (
//         <p className="text-center text-gray-700 text-lg">Loading your listings...</p>
//       ) : listings.length === 0 ? (
//         <p className="text-center text-gray-700 text-lg">
//           You have not added any food yet.
//         </p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
//           {listings.map((item) => (
//             <div
//               key={item._id}
//               className="bg-white/90 rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 transition-transform duration-300 border-l-4 border-green-500 backdrop-blur-sm"
//             >
//               <h2 className="text-xl font-bold text-green-700 mb-2">{item.foodName}</h2>
//               <p className="text-gray-700">
//                 <span className="font-semibold">Quantity:</span> {item.quantity}
//               </p>
//               <p className="text-gray-700">
//                 <span className="font-semibold">Location:</span> {item.location}
//               </p>
//               <p className="text-gray-700">
//                 <span className="font-semibold">Expiry:</span> {item.expiryDate}
//               </p>
//               <p className="text-gray-700">
//                 <span className="font-semibold">Status:</span> {item.status || "Available"}
//               </p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyListing;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const MyListing = () => {
//   const [listings, setListings] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchListings = async () => {
//       try {
//         const res = await axios.get("http://localhost:3000/my-listings");
//         setListings(res.data);
//       } catch (err) {
//         console.error("Error fetching listings:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchListings();
//   }, []);

//   return (
//     <div
//       className="min-h-screen w-full flex flex-col items-center justify-start p-10
//                  bg-gradient-to-br from-green-400 via-emerald-200 to-lime-100
//                  bg-cover bg-center"
//       style={{
//         backgroundImage:
//           "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80')",
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//         backgroundAttachment: "fixed",
//       }}
//     >
//       {/* Overlay for better contrast */}
//       <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

//       <div className="relative z-10 w-full max-w-6xl">
//         <h1 className="text-5xl font-extrabold text-center text-white drop-shadow-lg mb-12">
//           🗂️ My Food Listings
//         </h1>

//         {loading ? (
//           <p className="text-center text-white text-lg">Loading your listings...</p>
//         ) : listings.length === 0 ? (
//           <p className="text-center text-white text-lg">
//             You have not added any food yet.
//           </p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//             {listings.map((item) => (
//               <div
//                 key={item._id}
//                 className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl 
//                            p-6 flex flex-col justify-between border border-green-200 
//                            hover:scale-105 hover:shadow-2xl transition-transform duration-300"
//               >
//                 <h2 className="text-2xl font-bold text-green-700 mb-2">
//                   {item.foodName}
//                 </h2>
//                 <p className="text-gray-700">
//                   <span className="font-semibold">Quantity:</span> {item.quantity}
//                 </p>
//                 <p className="text-gray-700">
//                   <span className="font-semibold">Location:</span> {item.location}
//                 </p>
//                 <p className="text-gray-700">
//                   <span className="font-semibold">Expiry:</span> {item.expiryDate}
//                 </p>
//                 <p className="text-gray-700">
//                   <span className="font-semibold">Status:</span>{" "}
//                   {item.status || "Available"}
//                 </p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MyListing;


// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const MyListing = () => {
//   const [listings, setListings] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch donor listings from backend
//   useEffect(() => {
//     const fetchListings = async () => {
//       try {
//         const res = await axios.get("http://localhost:3000/my-listings");
//         setListings(res.data);
//       } catch (err) {
//         console.error("Error fetching listings:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchListings();
//   }, []);

//   return (
//     <div className="min-h-screen w-full bg-gradient-to-br from-green-200 via-green-100 to-green-300 flex flex-col items-center p-8">
//       <h1 className="text-4xl font-extrabold text-center text-green-800 mb-12 drop-shadow-lg">
//         🗂️ My Food Listings
//       </h1>

//       {loading ? (
//         <p className="text-center text-gray-700 text-lg">Loading your listings...</p>
//       ) : listings.length === 0 ? (
//         <p className="text-center text-gray-700 text-lg">
//           You have not added any food yet.
//         </p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
//           {listings.map((item) => (
//             <div
//               key={item._id}
//               className="bg-white/90 rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 transition-transform duration-300 border-l-4 border-green-500 backdrop-blur-sm"
//             >
//               <h2 className="text-xl font-bold text-green-700 mb-2">{item.foodName}</h2>
//               <p className="text-gray-700">
//                 <span className="font-semibold">Quantity:</span> {item.quantity}
//               </p>
//               <p className="text-gray-700">
//                 <span className="font-semibold">Location:</span> {item.location}
//               </p>
//               <p className="text-gray-700">
//                 <span className="font-semibold">Expiry:</span> {item.expiryDate}
//               </p>
//               <p className="text-gray-700">
//                 <span className="font-semibold">Status:</span> {item.status || "Available"}
//               </p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyListing;


// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const MyListing = () => {
//   const [listings, setListings] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchListings = async () => {
//       try {
//         const res = await axios.get("http://localhost:3000/my-listings");
//         setListings(res.data);
//       } catch (err) {
//         console.error("Error fetching listings:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchListings();
//   }, []);

//   return (
//     <div
//       className="fixed inset-0 flex flex-col items-center overflow-y-auto py-10"
//       style={{
//         background: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//         minHeight: "100vh",
//         width: "100vw",
//       }}
//     >
//       <h1 className="text-5xl font-extrabold text-green-900 mb-14 drop-shadow-lg">
//         🗂️ My Food Listings
//       </h1>

//       {loading ? (
//         <p className="text-gray-700 text-lg">Loading your listings...</p>
//       ) : listings.length === 0 ? (
//         <p className="text-gray-700 text-lg">You have not added any food yet.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full max-w-6xl px-6 pb-10">
//           {listings.map((item) => (
//             <div
//               key={item._id}
//               className="bg-white/90 rounded-2xl shadow-xl p-6 flex flex-col justify-between 
//                          border-l-4 border-green-500 hover:shadow-2xl transition-transform 
//                          duration-300 hover:-translate-y-2 backdrop-blur-sm"
//             >
//               <div>
//                 <h2 className="text-2xl font-bold text-green-700 mb-2">{item.foodName}</h2>
//                 <p className="text-gray-700">
//                   <span className="font-semibold">Quantity:</span> {item.quantity}
//                 </p>
//                 <p className="text-gray-700">
//                   <span className="font-semibold">Location:</span> {item.location}
//                 </p>
//                 <p className="text-gray-700">
//                   <span className="font-semibold">Expiry:</span> {item.expiryDate}
//                 </p>
//               </div>
//               <div className="mt-4">
//                 <span
//                   className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${
//                     item.status === "Available"
//                       ? "bg-green-100 text-green-800"
//                       : "bg-yellow-100 text-yellow-800"
//                   }`}
//                 >
//                   {item.status || "Available"}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyListing;

import React, { useEffect, useState } from "react";
import axios from "axios";

const MyListings = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await axios.get("https://foodlink-0jeg.onrender.com/request-food", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        setListings(res.data.listings || []);
      } catch (err) {
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, []);

  const statusColors = {
    available: "bg-green-500 text-white",
    requested: "bg-yellow-500 text-black",
    completed: "bg-gray-500 text-white",
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
        Loading your listings...
      </div>
    );
  }

  return (
    <div className="min-h-screen w-screen bg-linear-to-br from-emerald-900 to-green-700 text-white py-10 px-6">
      <h1 className="text-4xl font-extrabold text-center mb-10 drop-shadow-xl">
        📦 My Food Listings
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {listings.map((item, index) => (
          <div
            key={index}
            className="bg-white/90 shadow-2xl p-6 rounded-3xl text-gray-900 hover:-translate-y-2 transition"
          >
            <h2 className="text-2xl font-bold text-green-700">{item.foodName}</h2>

            <p className="mt-2">
              <span className="font-semibold">Quantity:</span> {item.quantity}
            </p>

            <p>
              <span className="font-semibold">Location:</span> {item.location}
            </p>

            <p>
              <span className="font-semibold">Created:</span>{" "}
              {new Date(item.createdAt).toLocaleDateString()}
            </p>

            <span
              className={`mt-4 inline-block px-4 py-1 rounded-full text-sm font-semibold ${statusColors[item.status]}`}
            >
              {item.status.toUpperCase()}
            </span>
          </div>
        ))}
      </div>

      {listings.length === 0 && (
        <p className="text-center text-lg mt-10 bg-white text-gray-800 px-5 py-3 rounded-xl shadow-lg">
          You haven't listed any food yet.
        </p>
      )}
    </div>
  );
};

export default MyListings;
