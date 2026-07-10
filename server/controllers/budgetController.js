const Budget = require("../models/Budget");

exports.createBudget = async (req, res) => {
  try {
    const {
      trip,
      flight,
      hotel,
      food,
      transport,
      activities,
      shopping,
      miscellaneous,
    } = req.body;

    const total =
      Number(flight) +
      Number(hotel) +
      Number(food) +
      Number(transport) +
      Number(activities) +
      Number(shopping) +
      Number(miscellaneous);

    const budget = await Budget.create({
      trip,
      flight,
      hotel,
      food,
      transport,
      activities,
      shopping,
      miscellaneous,
      total,
    });

    res.status(201).json({
      success: true,
      budget,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to create budget.",
    });
  }
};

exports.getBudget = async (req, res) => {
  try {
    const budget = await Budget.findOne({
      trip: req.params.tripId,
    });

    if (!budget) {
      return res.status(404).json({
        success: false,
        message: "Budget not found.",
      });
    }

    res.json({
      success: true,
      budget,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch budget.",
    });
  }
};