require("dotenv").config();
const authRoutes = require("./routes/authRoutes");
const plannerRoutes = require("./routes/plannerRoutes");
const tripRoutes = require("./routes/tripRoutes");
const express = require("express");
const cors = require("cors");


const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/planner", plannerRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/trips", tripRoutes);

app.get("/", (req, res) => {
  res.send("🚀 VoyageAI Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});