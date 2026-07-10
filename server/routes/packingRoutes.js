const express = require("express");

const router = express.Router();

const {
  generatePacking,
  getPacking,
  updatePacking,
} = require("../controllers/packingController");

router.post("/generate", generatePacking);

router.get("/:tripId", getPacking);

router.put("/:tripId", updatePacking);

module.exports = router;