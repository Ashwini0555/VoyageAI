const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    destination: {
      type: String,
      required: true,
    },

    budget: {
      type: String,
      required: true,
    },

    days: {
      type: Number,
      required: true,
    },

    travelStyle: {
      type: String,
      required: true,
    },

    travelers: {
      type: Number,
      required: true,
    },

    startDate: {
      type: String,
      required: true,
    },

    interests: [String],

    itinerary: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Trip", tripSchema);