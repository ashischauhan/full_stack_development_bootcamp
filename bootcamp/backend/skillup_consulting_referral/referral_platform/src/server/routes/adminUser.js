import express from "express";
import omit from "lodash/omit.js";

import * as adminUserService from "../services/adminUserService.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const token = await adminUserService.registerAdminUser(req.body);
    res.status(201).json({ token });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Could not register admin user", error: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const token = await adminUserService.loginAdminUser(req.body);
    res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ message: "Could not log in admin user", error: error.message });
  }
});

export default router;
