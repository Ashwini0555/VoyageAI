const express = require("express");

const router = express.Router();

const {
  generateTripPlan,
} = require("../controllers/plannerController");

router.post("/generate", generateTripPlan);

module.exports = router;