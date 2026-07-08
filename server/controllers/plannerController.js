const generateTrip = require("../services/geminiService");
const Trip = require("../models/Trip");

exports.generateTripPlan = async (req, res) => {
  console.log("REQ BODY:");
  console.log(req.body);
    try {
    const itinerary = await generateTrip(req.body);

    const trip = await Trip.create({
      user: req.body.user,
      destination: req.body.destination,
      budget: req.body.budget,
      days: req.body.days,
      travelStyle: req.body.travelStyle,
      travelers: req.body.travelers,
      startDate: req.body.startDate,
      interests: req.body.interests,
      itinerary,
    });

    res.status(200).json({
      success: true,
      itinerary,
      trip,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to generate trip.",
    });
  }
};