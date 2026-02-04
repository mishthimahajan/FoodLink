import React from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaClipboardList, FaHandshake } from "react-icons/fa";

const DonorDashboard = () => {
  const [stats, setStats] = useState({
    totalListings: 0,
    requestsReceived: 0,
    successfulDonations: 0,
  });

  useEffect(() => {
    const fetchDonorData = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          "http://localhost:5000/donor/data",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setStats(res.data);
      } catch (error) {
        console.error("Error fetching donor data:", error);
      }
    };

    fetchDonorData();
  }, []);
  
  return (
    <div className="p-6 bg-white w-screen h-screen">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        👋 Welcome, Donor!
      </h1>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

        <div className="bg-gray-200 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-gray-700">Total Listings</h2>
          <p className="text-4xl font-bold text-green-400 mt-3"></p>
        </div>

        <div className="bg-gray-200 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-gray-700">Requests Received</h2>
          <p className="text-4xl font-bold text-blue-600 mt-3"></p>
        </div>

        <div className="bg-gray-200 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-gray-700">Successful Donations</h2>
          <p className="text-4xl font-bold text-purple-600 mt-3"></p>
        </div>
      </div>

      {/* Quick Actions */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Quick Actions</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <Link
          to="/donor/add-food"
          className="bg-green-300 text-white p-6 rounded-xl shadow flex items-center gap-4 hover:bg-green-400 transition"
        >
          <FaPlus size={32} />
          <div>
            <h3 className="text-lg font-bold">Add Food Listing</h3>
            <p className="text-sm">Donate fresh food items</p>
          </div>
        </Link>

        <Link
          to="/donor/requests"
          className="bg-blue-300 text-white p-6 rounded-xl shadow flex items-center gap-4 hover:bg-blue-400 transition"
        >
          <FaClipboardList size={32} />
          <div>
            <h3 className="text-lg font-bold">View Requests</h3>
            <p className="text-sm">Check who needs your listed food</p>
          </div>
        </Link>

        <Link
          to="/donor/my-listings"
          className="bg-purple-300 text-white p-6 rounded-xl shadow flex items-center gap-4 hover:bg-purple-400 transition"
        >
          <FaHandshake size={32} />
          <div>
            <h3 className="text-lg font-bold">My Listings</h3>
            <p className="text-sm">Manage your donated food items</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DonorDashboard;

