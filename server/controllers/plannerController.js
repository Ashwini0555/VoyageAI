const generateTrip = require("../services/geminiService");

exports.generateTripPlan = async (req, res) => {
  try {
    const itinerary = await generateTrip(req.body);

    res.status(200).json({
      success: true,
      itinerary,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to generate trip.",
    });
  }
};