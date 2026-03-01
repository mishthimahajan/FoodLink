

import express, { response } from "express";
import rateLimit from "express-rate-limit";
const router = express.Router();
import User from "../models/User.js";
import Food from "../models/food.js";
import Request from "../models/request.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import authenticateToken from "../middleware/auth.js";
import FoodRequest from "../models/foodrequest.js";

// Stricter limiter for auth endpoints to prevent brute-force
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: "Too many authentication attempts, please try again later." },
});

router.get("/receiver/data", authenticateToken, async (req, res) => {
  try {
    if (req.user.role !== "receiver") {
      return res.status(403).json({ message: "Access denied" });
    }

    const receiverId = req.user.id;

    const availableFood = await Food.countDocuments({ status: "available" });

    const myRequests = await Request.countDocuments({
      receiver: receiverId
    });

    const approvedRequests = await Request.countDocuments({
      receiver: receiverId,
      status: "approved"
    });

    res.json({
      availableFood,
      myRequests,
      approvedRequests
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/donor/data", authenticateToken, async (req, res) => {
  try {
    if (req.user.role !== "donor") {
      return res.status(403).json({ message: "Access denied" });
    }

    const donorId = req.user.id;

    
    

    const totalListings = await Food.countDocuments({ donor: donorId });
    const requestsReceived = await Request.countDocuments({ donor: donorId });
    const successfulDonations = await Food.countDocuments({
      donor: donorId,
      status: "donated",
    });

    res.json({
      totalListings,
      requestsReceived,
      successfulDonations,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/register", authLimiter, async (req, res) => {
  try {
    const { fullName, email, password, role } = req.body;

    if (!fullName || !email || !password || !role) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      fullName,
      email,
      password: hashedPassword,
      role,
    });

    res.status(201).json({ message: "User registered successfully" });

  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({ message: "Server error" });
  }
});





router.post("/login", authLimiter, async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid email or password" });

    // Generate JWT
    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      "MISHTHI",
      { expiresIn: "1d" }
    );

    res.json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,   
      },
    });

  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});
router.post("/add-food", async (req, res) => {
  try {
    const { foodName, quantity, location, contact } = req.body;

    if (!foodName || !quantity || !location || !contact) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const food = new Food({
      foodName,
      quantity,
      location,
      contact,
      status: "Available",
    });

    await food.save();
    res.status(201).json({ message: "Food added successfully", food });
  } catch (error) {
    console.error("Error adding food:", error);
    res.status(500).json({ message: "Server error", error });
  }
});
router.get("/browse-food", async (req, res) => {
  try {
    const foods = await Food.find({ status: "Available" }).populate("donorId", "fullName email");

    if (!foods || foods.length === 0) {
      return res.status(404).json({ message: "No available food items found" });
    }

    res.status(200).json({
      message: "Available food items fetched successfully",
      foods,
    });
  } catch (error) {
    console.error("Error fetching food items:", error);
    res.status(500).json({
      message: "Server error while fetching food items",
      error,
    });
  }
});


router.post("/add-request", async (req, res) => {
  try {
    const { foodId, receiverName } = req.body;

    if (!foodId || !receiverName) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const food = await Food.findById(foodId);
    if (!food) {
      return res.status(404).json({ message: "Food not found" });
    }

    const newRequest = new Request({
      foodName: food.foodName,
      donorName: food.donorName,
      quantity: food.quantity,
      location: food.location,
      receiverName,
      status: "Pending",
    });

    await newRequest.save();
    console.log("✅ Request saved:", newRequest);

    res.status(201).json({ message: "Request added successfully", request: newRequest });
  } catch (error) {
    console.error("❌ Error adding request:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

router.post("/request-food", authenticateToken, async (req, res) => {
  try {
    const { foodId } = req.body;

    if (!foodId) {
      return res.status(400).json({ message: "Food ID is required" });
    }

    const newRequest = await FoodRequest.create({
      foodId,
      requesterId: req.user.id
    });

    res.json({
      success: true,
      message: "Food requested successfully!",
      request: newRequest,
    });
  } catch (error) {
    console.error("❌ Error in /request-food:", error);
    res.status(500).json({ message: "Server Error", error });
  }
});


router.get("/my-requests", authenticateToken, async (req, res) => {
  try {
    const requests = await FoodRequest.find({ requesterId: req.user.id })
      .populate("foodId");

    res.json({
      requests: requests.map((r) => ({
        foodName: r.foodId?.foodName || "Unknown",
        quantity: r.foodId?.quantity || "N/A",
        donorName: r.foodId?.donorName || "Anonymous",
        location: r.foodId?.location || "Not provided",
        status: r.status || "Pending",
      }))
    });

  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});


router.get("/my-listings", authenticateToken, async (req, res) => {
  try {
    const donorId = req.user.id; 

    const foods = await Food.find({ donorId }).sort({ createdAt: -1 });

    res.status(200).json({ message: "Listings fetched successfully", foods });
  } catch (error) {
    console.error("Error fetching listings:", error);
    res.status(500).json({ message: "Server error while fetching listings" });
  }
});


router.get("/requests-received", authenticateToken, async (req, res) => {
  try {
    const { donorId } = req.query;

    if (!donorId) {
      return res.status(400).json({ message: "donorId is required" });
    }

    const requests = await Request.find({ donorId })
      .populate("foodId", "foodName quantity location")
      .populate("receiverId", "fullName email");

    if (!requests.length) {
      return res.status(404).json({ message: "No requests received" });
    }

    res.status(200).json({ message: "Requests received fetched successfully", requests });
  } catch (err) {
    console.error("Error fetching received requests:", err);
    res.status(500).json({ error: err.message });
  }
});

router.put("/requests/update-status/:id",authenticateToken,  async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!["Pending", "Approved", "Rejected"].includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const updatedRequest = await Request.findByIdAndUpdate(id, { status }, { new: true });
    if (!updatedRequest) {
      return res.status(404).json({ message: "Request not found" });
    }

    res.status(200).json({ message: "Request status updated successfully", updatedRequest });
  } catch (err) {
    console.error("Error updating request status:", err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
