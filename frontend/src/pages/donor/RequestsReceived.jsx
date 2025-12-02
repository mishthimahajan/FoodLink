// import React, { useState } from "react";

// const RequestsReceived = () => {
//   const [requests, setRequests] = useState([
//     { foodName: "Rice & Curry", requester: "Rahul", quantity: "2 plates", status: "Pending" },
//     { foodName: "Bread Packets", requester: "Sanya", quantity: "5 pcs", status: "Pending" },
//   ]);

//   const handleUpdateStatus = (index, newStatus) => {
//     const updated = [...requests];
//     updated[index].status = newStatus;
//     setRequests(updated);
//   };

//   const statusColors = {
//     Pending: "bg-yellow-200 text-yellow-800",
//     Approved: "bg-green-200 text-green-800",
//     Rejected: "bg-red-200 text-red-800",
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-8">
//       <h1 className="text-4xl font-extrabold text-center text-green-800 mb-12 drop-shadow-lg">
//         📥 Requests Received
//       </h1>

//       {requests.length === 0 ? (
//         <p className="text-center text-gray-700 text-lg">No requests received yet.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {requests.map((req, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 transition-transform duration-300 border-l-4 border-green-500"
//             >
//               <div>
//                 <h2 className="text-xl font-bold text-green-700 mb-2">{req.foodName}</h2>
//                 <p className="text-gray-700"><span className="font-semibold">Requester:</span> {req.requester}</p>
//                 <p className="text-gray-700"><span className="font-semibold">Quantity:</span> {req.quantity}</p>
//               </div>
//               <div className="mt-4 flex justify-between items-center">
//                 <span className={`px-3 py-1 rounded-full font-semibold text-sm ${statusColors[req.status]}`}>
//                   {req.status}
//                 </span>
//                 {req.status === "Pending" && (
//                   <div className="flex gap-2">
//                     <button
//                       className="bg-green-600 hover:bg-green-700 text-white font-semibold px-3 py-1 rounded-lg transition-colors duration-300"
//                       onClick={() => handleUpdateStatus(index, "Approved")}
//                     >
//                       Approve
//                     </button>
//                     <button
//                       className="bg-red-600 hover:bg-red-700 text-white font-semibold px-3 py-1 rounded-lg transition-colors duration-300"
//                       onClick={() => handleUpdateStatus(index, "Rejected")}
//                     >
//                       Reject
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default RequestsReceived;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const RequestsReceived = () => {
//   const [requests, setRequests] = useState([]);

//   // Fetch all received requests
//   useEffect(() => {
//     const fetchRequests = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/requests/received");
//         setRequests(res.data);
//       } catch (err) {
//         console.error("Error fetching requests:", err);
//       }
//     };
//     fetchRequests();
//   }, []);

//   // Update request status
//   const handleUpdateStatus = async (id, newStatus) => {
//     try {
//       const res = await axios.put(`http://localhost:3000/requests/update-status/${id}`, {
//         status: newStatus,
//       });
//       setRequests((prev) =>
//         prev.map((r) => (r._id === id ? { ...r, status: res.data.status } : r))
//       );
//     } catch (err) {
//       console.error("Error updating status:", err);
//     }
//   };

//   const statusColors = {
//     Pending: "bg-yellow-200 text-yellow-800",
//     Approved: "bg-green-200 text-green-800",
//     Rejected: "bg-red-200 text-red-800",
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-8">
//       <h1 className="text-4xl font-extrabold text-center text-green-800 mb-12 drop-shadow-lg">
//         📥 Requests Received
//       </h1>

//       {requests.length === 0 ? (
//         <p className="text-center text-gray-700 text-lg">No requests received yet.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {requests.map((req) => (
//             <div
//               key={req._id}
//               className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 transition-transform duration-300 border-l-4 border-green-500"
//             >
//               <div>
//                 <h2 className="text-xl font-bold text-green-700 mb-2">{req.foodName}</h2>
//                 <p className="text-gray-700"><span className="font-semibold">Requester:</span> {req.receiverName}</p>
//                 <p className="text-gray-700"><span className="font-semibold">Quantity:</span> {req.quantity}</p>
//               </div>
//               <div className="mt-4 flex justify-between items-center">
//                 <span className={`px-3 py-1 rounded-full font-semibold text-sm ${statusColors[req.status]}`}>
//                   {req.status}
//                 </span>
//                 {req.status === "Pending" && (
//                   <div className="flex gap-2">
//                     <button
//                       className="bg-green-600 hover:bg-green-700 text-white font-semibold px-3 py-1 rounded-lg transition-colors duration-300"
//                       onClick={() => handleUpdateStatus(req._id, "Approved")}
//                     >
//                       Approve
//                     </button>
//                     <button
//                       className="bg-red-600 hover:bg-red-700 text-white font-semibold px-3 py-1 rounded-lg transition-colors duration-300"
//                       onClick={() => handleUpdateStatus(req._id, "Rejected")}
//                     >
//                       Reject
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default RequestsReceived;


import React, { useState, useEffect } from "react";
import axios from "axios";

const RequestsReceived = () => {
  const [requests, setRequests] = useState([]);

  // ✅ Fetch all received requests
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await axios.get("https://foodlink-0jeg.onrender.com/request-food");
        setRequests(res.data);
      } catch (err) {
        console.error("Error fetching requests:", err);
      }
    };
    fetchRequests();
  }, []);

  // ✅ Update request status
  const handleUpdateStatus = async (id, newStatus) => {
    try {
      const res = await axios.put(`http://localhost:3000/requests/update-status/${id}`, {
        status: newStatus,
      });
      setRequests((prev) =>
        prev.map((r) => (r._id === id ? { ...r, status: res.data.status } : r))
      );
    } catch (err) {
      console.error("Error updating status:", err);
    }
  };

  const statusColors = {
    Pending: "bg-yellow-200 text-yellow-800",
    Approved: "bg-green-200 text-green-800",
    Rejected: "bg-red-200 text-red-800",
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 to-green-100 p-8">
      <h1 className="text-4xl font-extrabold text-center text-green-800 mb-12 drop-shadow-lg">
        📥 Requests Received
      </h1>

      {requests.length === 0 ? (
        <p className="text-center text-gray-700 text-lg">No requests received yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {requests.map((req) => (
            <div
              key={req._id}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 transition-transform duration-300 border-l-4 border-green-500"
            >
              <div>
                <h2 className="text-xl font-bold text-green-700 mb-2">{req.foodName}</h2>
                <p className="text-gray-700">
                  <span className="font-semibold">Requester:</span> {req.receiverName}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Quantity:</span> {req.quantity}
                </p>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span
                  className={`px-3 py-1 rounded-full font-semibold text-sm ${statusColors[req.status]}`}
                >
                  {req.status}
                </span>
                {req.status === "Pending" && (
                  <div className="flex gap-2">
                    <button
                      className="bg-green-600 hover:bg-green-700 text-white font-semibold px-3 py-1 rounded-lg transition-colors duration-300"
                      onClick={() => handleUpdateStatus(req._id, "Approved")}
                    >
                      Approve
                    </button>
                    <button
                      className="bg-red-600 hover:bg-red-700 text-white font-semibold px-3 py-1 rounded-lg transition-colors duration-300"
                      onClick={() => handleUpdateStatus(req._id, "Rejected")}
                    >
                      Reject
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RequestsReceived;
