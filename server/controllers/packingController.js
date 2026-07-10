const generatePackingList = require("../services/packingGeminiService");
const Trip = require("../models/Trip");
const Packing = require("../models/Packing");


exports.generatePacking = async (req, res) => {
  try {

    const { trip } = req.body;

    const tripData = await Trip.findById(trip);

    if (!tripData) {
      return res.status(404).json({
        success: false,
        message: "Trip not found.",
      });
    }

   const aiResponse = await generatePackingList(tripData);

const cleanedResponse = aiResponse
  .replace(/```json/g, "")
  .replace(/```/g, "")
  .trim();

let parsedItems;

try {
  parsedItems = JSON.parse(cleanedResponse);
} catch (err) {
  return res.status(500).json({
    success: false,
    message: "AI returned an invalid packing list.",
  });
}

const items = parsedItems.map((item) => ({
  name: item,
  packed: false,
}));

    const existing = await Packing.findOne({ trip });

    if (existing) {
      existing.items = items;

      await existing.save();

      return res.json({
        success: true,
        packing: existing,
      });
    }

    const packing = await Packing.create({
      trip,
      items,
    });

    res.status(201).json({
      success: true,
      packing,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to generate packing list.",
    });
  }
};
exports.getPacking = async (req, res) => {
  try {
    const packing = await Packing.findOne({
      trip: req.params.tripId,
    });

    res.json({
      success: true,
      packing,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch packing list.",
    });
  }
};
exports.updatePacking = async (req, res) => {
  try {
    const packing = await Packing.findOne({
      trip: req.params.tripId,
    });

    if (!packing) {
      return res.status(404).json({
        success: false,
        message: "Packing list not found.",
      });
    }

    packing.items = req.body.items;

    await packing.save();

    res.json({
      success: true,
      packing,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to save packing progress.",
    });
  }
};