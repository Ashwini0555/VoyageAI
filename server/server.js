require("dotenv").config();
const foodGuideRoutes = require("./routes/foodGuideRoutes");
const authRoutes = require("./routes/authRoutes");
const plannerRoutes = require("./routes/plannerRoutes");
const tripRoutes = require("./routes/tripRoutes");
const express = require("express");
const cors = require("cors");
const packingRoutes = require("./routes/packingRoutes");
const budgetRoutes = require("./routes/budgetRoutes");
const connectDB = require("./config/db");
const assistantRoutes = require("./routes/assistantRoutes");

const app = express();

// Connect Database
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/planner", plannerRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/trips", tripRoutes);
app.use("/api/budget", budgetRoutes);
app.use("/api/packing", packingRoutes);
app.use("/api/food-guide", foodGuideRoutes);
app.use("/api/assistant", assistantRoutes);

app.get("/", (req, res) => {
  res.send("🚀 VoyageAI Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});