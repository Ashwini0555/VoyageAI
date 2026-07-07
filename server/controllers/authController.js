const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// =======================
// REGISTER USER
// =======================

exports.register = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      preferredBudget,
      favouriteDestination,
      travelStyle,
    } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      preferredBudget,
      favouriteDestination,
      travelStyle,
    });

    res.status(201).json({
      message: "User Registered Successfully",
      user: newUser,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });

  }
};

// =======================
// LOGIN USER
// =======================

exports.login = async (req, res) => {

  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {

      return res.status(400).json({
        message: "User Not Found",
      });

    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {

      return res.status(400).json({
        message: "Invalid Password",
      });

    }

    const token = jwt.sign(

      {
        id: user._id,
      },

      process.env.JWT_SECRET,

      {
        expiresIn: "7d",
      }

    );

    res.json({

      message: "Login Successful",

      token,

      user,

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      message: "Server Error",

    });

  }

};