const mongoose = require("mongoose");

const packingSchema = new mongoose.Schema(
  {
    trip: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Trip",
      required: true,
      unique: true,
    },

    items: [
      {
        name: {
          type: String,
          required: true,
        },

        packed: {
          type: Boolean,
          default: false,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Packing", packingSchema);