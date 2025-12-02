// const express = require("express");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const path = require("path");
// const indexRouter = require("./routes/index");
// const usersRouter = require("./routes/users");

// dotenv.config();

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // MongoDB Connection
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("✅ MongoDB Connected Successfully"))
//   .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// // Routes
// app.use("/", indexRouter);
// app.use("/api/users", usersRouter);

// // Static uploads folder (optional)
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// module.exports = app;


// backend/app.js
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const dotenv = require("dotenv");

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// // connect to MongoDB
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log("✅ Connected to MongoDB"))
//   .catch((err) => console.error("❌ MongoDB connection error:", err));

// // routes
// const userRoutes = require("./routes/index");
// app.use("/api", userRoutes);

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();

// const routes = require("./routes/index.js");

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Database connection
// mongoose
//   .connect("mongodb://127.0.0.1:27017/FoodLink")
//   .then(() => console.log("✅ MongoDB Connected"))
//   .catch((err) => console.error("❌ MongoDB connection error:", err));

// // Routes
// app.use("/", routes); // 🔹 removed /api prefix

// // Start server
// app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));


// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import bodyParser from "body-parser";
// import router from "./routes/index.js";
// import bcrypt from "bcrypt";






// const app = express();



import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routes/index.js";
// import { config } from "dotenv";
// config()

const app = express();

app.use(cors({
  origin:["https://food-link-five.vercel.app","http://localhost:5173/"],
  methods:["GET","POST","DELETE","PUT","PATCH"],
  credentials:true,
})); // ✅ Allow requests from frontend
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// mongoose
//   .connect("mongodb://127.0.0.1:27017/FoodLink")
//   .then(() => console.log("✅ MongoDB connected"))
//   .catch((err) => console.log("❌ MongoDB Error:", err));

app.use("/", router);

app.listen(3000, () => console.log("🚀 Server running on http://localhost:3000"));


