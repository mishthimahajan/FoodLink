import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import router from "./routes/index.js";

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: ["https://food-link-five.vercel.app", "http://localhost:5173"],
  methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
  credentials: true,
}));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use("/", router);

// Database Connection Check
const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/foodlink";
mongoose.connect(mongoURI)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

export default app;