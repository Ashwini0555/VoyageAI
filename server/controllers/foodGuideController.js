const getNearbyCafes = require("../services/geoapifyService");

exports.generateFoodGuide = async (req, res) => {
  try {
    const { destination } = req.body;

    const cafes = await getNearbyCafes(destination);

    res.json({
      success: true,
      cafes,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};