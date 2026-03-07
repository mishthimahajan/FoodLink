import React from "react";
import "./Loader.css";

const Loader = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="loader-overlay">
      <div className="loader-container">
        <div className="loader">
          <div className="loader-circle"></div>
          <div className="loader-circle"></div>
          <div className="loader-circle"></div>
        </div>
        <p className="loader-text">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
