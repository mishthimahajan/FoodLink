// import React from "react";
// import Navbar from "./components/Navbar";
// import Herosection from "./components/Herosection";
// import Login from "./pages/Login";     // ← import Login
// import Register from "./pages/Register";

// function App() {
//   return (
//     <div className="font-sans bg-[#fdfcf7] min-h-screen">
//       <Navbar />
//       <Herosection />
       
//     </div>
//   );
// }

// export default App;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import HeroSection from "./components/HeroSection";
// import Login from "./pages/Login";
// import Register from "./pages/Register";

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<HeroSection />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Herosection";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import RequestsReceived from "./pages/donor/RequestsReceived";
import BrowseFood from "./pages/receiver/BrowseFood";
import AddFood from "./pages/donor/AddFood";
import FoodCard from "./components/FoodCard";
import MyRequests from "./pages/receiver/MyRequests";
import MyListing from "./pages/donor/MyListings";
import Protected from "./components/Protected";
import DonorDashboard from "./pages/DonorDashboard";
import ReceiverDashboard from "./pages/ReceiverDashboard";
import TermsOfService from "./pages/TermsOfService";
import Footer from "./components/Footer";


const App = () => {
  return (
    <Router>   
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
      <Navbar />
      <div style={{ paddingTop: "80px" }}>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donor/requests" element={<RequestsReceived />} />
          <Route path="/receiver/browse-food" element={<BrowseFood />} />
          <Route path="/donor/add-food" element={<AddFood />} />
          <Route path="/components/foodcard" element={<FoodCard />} />
          <Route path="/receiver/my-requests" element={<MyRequests />} />
          <Route path="/donor/my-listings" element={<MyListing />} />
          <Route path="/dashboard" element={<Protected><Dashboard /></Protected>} />
          <Route path="/donor-dashboard" element={<Protected><DonorDashboard /></Protected>} />
          <Route path="/receiver-dashboard" element={<Protected><ReceiverDashboard /></Protected>} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          
        </Routes>
      </div>
      <Footer />
    </Router>   
  );
};

export default App;
