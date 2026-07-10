const mongoose = require("mongoose");

const foodGuideSchema = new mongoose.Schema(
  {
    destination: {
      type: String,
      required: true,
    },

    budget: {
      type: Number,
      required: true,
    },

    cuisine: {
      type: String,
      required: true,
    },

    cafes: [
      {
        name: String,
        cost: String,
        description: String,
        searchQuery: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("FoodGuide", foodGuideSchema);