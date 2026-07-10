const express = require("express");

const router = express.Router();

const {
  generateFoodGuide,
} = require("../controllers/foodGuideController");

router.post("/generate", generateFoodGuide);

module.exports = router;