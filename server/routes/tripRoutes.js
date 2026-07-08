const express = require("express");

const router = express.Router();

const {
  getMyTrips,
  getTripById,
  deleteTrip,
} = require("../controllers/tripController");

// Get all trips of a user
router.get("/my-trips/:userId", getMyTrips);

// Get a single trip by ID
router.get("/:id", getTripById);

// Delete a trip
router.delete("/:id", deleteTrip);

module.exports = router;