import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingBasket, FaHistory } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";

const ReceiverDashboard = () => {
  const [stats, setStats] = useState({
    availableFood: 0,
    myRequests: 0,
    approvedRequests: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://foodlink-0jeg.onrender.com/receiver/data",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        setStats(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        toast.error("❌ Session expired or unauthorized. Please log in again.");
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p className="p-6 text-xl">Loading Dashboard...</p>;
  }

  return (
    <div className="p-6 bg-white w-screen h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        🙏 Welcome, Receiver!
      </h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-200 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl text-black font-semibold">Available Food</h2>
          <p className="text-4xl font-bold text-green-600 mt-3">
            {stats.availableFood}
          </p>
        </div>

        <div className="bg-gray-200 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl text-black font-semibold">My Requests</h2>
          <p className="text-4xl font-bold text-blue-600 mt-3">
            {stats.myRequests}
          </p>
        </div>

        <div className="bg-gray-200 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl text-black font-semibold">Approved</h2>
          <p className="text-4xl font-bold text-purple-600 mt-3">
            {stats.approvedRequests}
          </p>
        </div>
      </div>

      {/* Actions */}
      <h2 className="text-2xl font-semibold text-black mb-4">
        Quick Actions
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          to="/receiver/browse-food"
          className="bg-green-300 text-black p-6 rounded-xl shadow flex items-center gap-4 hover:bg-green-400 transition"
        >
          <FaSearch size={32} />
          <div>
            <h3 className="font-bold">Browse Food</h3>
            <p className="text-sm">Find available food donations</p>
          </div>
        </Link>

        <Link
          to="/receiver/my-requests"
          className="bg-blue-300 text-black p-6 rounded-xl shadow flex items-center gap-4 hover:bg-blue-400 transition"
        >
          <FaShoppingBasket size={32} />
          <div>
            <h3 className="font-bold">My Requests</h3>
            <p className="text-sm">View pending & approved</p>
          </div>
        </Link>

        <Link
          to="/receiver/my-history"
          className="bg-purple-300 text-black p-6 rounded-xl shadow flex items-center gap-4 hover:bg-purple-400 transition"
        >
          <FaHistory size={32} />
          <div>
            <h3 className="font-bold">History</h3>
            <p className="text-sm">Request history</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ReceiverDashboard;

