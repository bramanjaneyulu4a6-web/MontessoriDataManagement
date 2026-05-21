// // ==================================
// // FILE: server/routes/authRoutes.js
// // ==================================

// import express from "express";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import dotenv from "dotenv";
// import User from "../models/User.js";

// dotenv.config();

// const router = express.Router();

// /**
//  * REGISTER
//  */
// router.post("/register", async (req, res) => {
//   try {

//     const userCount = await User.countDocuments();

//     // LIMIT CONTROL
//     if (userCount >= Number(process.env.MAX_USERS)) {
//       return res.status(403).json({
//         message: "Maximum user limit reached"
//       });
//     }

//     const { name, email, password } = req.body;

//     const existingUser = await User.findOne({ email });

//     if (existingUser) {
//       return res.status(400).json({
//         message: "Email already exists"
//       });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const user = await User.create({
//       name,
//       email,
//       password: hashedPassword
//     });

//     const token = jwt.sign(
//       { id: user._id },
//       process.env.JWT_SECRET,
//       { expiresIn: "7d" }
//     );

//     res.json({
//       message: "Registration successful",
//       token
//     });

//   } catch (error) {
//     console.error(error);

//     res.status(500).json({
//       message: "Server error"
//     });
//   }
// });

// /**
//  * LOGIN
//  */
// router.post("/login", async (req, res) => {
//   try {

//     const { email, password } = req.body;

//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(400).json({
//         message: "Invalid credentials"
//       });
//     }

//     const isMatch = await bcrypt.compare(
//       password,
//       user.password
//     );

//     if (!isMatch) {
//       return res.status(400).json({
//         message: "Invalid credentials"
//       });
//     }

//     const token = jwt.sign(
//       { id: user._id },
//       process.env.JWT_SECRET,
//       { expiresIn: "7d" }
//     );

//     res.json({
//       message: "Login successful",
//       token
//     });

//   } catch (error) {
//     res.status(500).json({
//       message: "Server error"
//     });
//   }
// });

// /**
//  * FORGOT PASSWORD
//  */
// router.post("/forgot-password", async (req, res) => {
//   try {

//     const { email, newPassword } = req.body;

//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(404).json({
//         message: "User not found"
//       });
//     }

//     // HASH NEW PASSWORD
//     const hashedPassword = await bcrypt.hash(newPassword, 10);

//     // UPDATE PASSWORD
//     user.password = hashedPassword;

//     await user.save();

//     res.json({
//       message: "Password updated successfully"
//     });

//   } catch (error) {

//     console.error(error);

//     res.status(500).json({
//       message: "Server error"
//     });

//   }
// });

// export default router;




















import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import crypto from "crypto";
import nodemailer from "nodemailer";

import User from "../models/User.js";

dotenv.config();

const router = express.Router();

/**
 * EMAIL TRANSPORTER
 */
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

/**
 * REGISTER
 */
router.post("/register", async (req, res) => {
  try {

    const userCount = await User.countDocuments();

    if (userCount >= Number(process.env.MAX_USERS)) {
      return res.status(403).json({
        message: "Maximum user limit reached"
      });
    }

    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "Email already exists"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword
    });

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      message: "Registration successful",
      token
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Server error"
    });

  }
});

/**
 * LOGIN
 */
router.post("/login", async (req, res) => {
  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Invalid credentials"
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid credentials"
      });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      message: "Login successful",
      token
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Server error"
    });

  }
});

/**
 * FORGOT PASSWORD EMAIL
 */
router.post("/forgot-password", async (req, res) => {
  try {

    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    // GENERATE RESET TOKEN
    const resetToken = crypto.randomBytes(32).toString("hex");

    // HASH TOKEN
    const hashedToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");

    // SAVE TOKEN
    user.resetPasswordToken = hashedToken;

    user.resetPasswordExpire =
      Date.now() + 15 * 60 * 1000;

    await user.save();

    // RESET URL
    const resetUrl =
      `${process.env.CLIENT_URL}/reset-password/${resetToken}`;

    // EMAIL MESSAGE
    const message = `
      Click the link below to reset your password:

      ${resetUrl}

      This link expires in 15 minutes.
    `;

    // SEND EMAIL
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Password Reset Request",
      text: message
    });

    res.json({
      message: "Password reset link sent to email"
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Server error"
    });

  }
});

/**
 * RESET PASSWORD
 */
router.post("/reset-password/:token", async (req, res) => {
  try {

    const hashedToken = crypto
      .createHash("sha256")
      .update(req.params.token)
      .digest("hex");

    const user = await User.findOne({
      resetPasswordToken: hashedToken,
      resetPasswordExpire: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).json({
        message: "Invalid or expired token"
      });
    }

    const hashedPassword = await bcrypt.hash(
      req.body.password,
      10
    );

    user.password = hashedPassword;

    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    res.json({
      message: "Password reset successful"
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Server error"
    });

  }
});

export default router;