const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
    },

    profileImage: {
      type: String,
      default: "",
    },

    preferredBudget: {
      type: String,
      default: "",
    },

    favouriteDestination: {
      type: String,
      default: "",
    },

    travelStyle: {
      type: String,
      enum: ["Solo", "Family", "Friends", "Couple", ""],
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);