const mongoose = require("mongoose");

const budgetSchema = new mongoose.Schema(
  {
    trip: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Trip",
      required: true,
    },

    flight: {
      type: Number,
      default: 0,
    },

    hotel: {
      type: Number,
      default: 0,
    },

    food: {
      type: Number,
      default: 0,
    },

    transport: {
      type: Number,
      default: 0,
    },

    activities: {
      type: Number,
      default: 0,
    },

    shopping: {
      type: Number,
      default: 0,
    },

    miscellaneous: {
      type: Number,
      default: 0,
    },

    total: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Budget", budgetSchema);