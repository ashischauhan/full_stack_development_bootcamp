import express, { response } from "express";
import * as authService from "../services/authService.js";
import omit from "lodash/omit.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  // Registration logic here
  try {
    // Simulate user registration logic
    const body = req.body;

    const token = await authService.registerUser(body);
    res.status(201).json({ message: "User registered successfully", token });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ message: "Could not register user", error: error.message });
  }
});

router.post("/login", async (req, res) => {
  // Login logic here
  try {
    const body = req.body;
    const token = await authService.loginUser(body);
    res.status(200).json({ message: "User logged in successfully", token });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ message: "Could not log in user", error: error.message });
  }
});

router.post("/forgot-password", async (req, res) => {
  // Forgot password logic here
  try {
    const body = req.body;
    const message = await authService.forgotPassword(body);
    res.status(200).json({ message });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: "Could not initiate password reset",
      error: error.message,
    });
  }
});

router.post("/reset-password", async (req, res) => {
  // Reset password logic here
  try {
    const body = req.body;
    const token = req.rawHeaders[1];
    await authService.resetPassword(body, token);
    const message = "Password reset successfully";

    res.status(200).json({ message });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: "Could not reset password",
      error: error.message,
    });
  }
});

export default router;
