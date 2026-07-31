const express = require("express");
const { HoldingsModel } = require("../model/HoldingsModel");

const router = express.Router();

const verifyToken = require("../middleware/auth");

// Get all holdings
router.get("/", verifyToken, async (req, res) => {
  try {
    const holdings = await HoldingsModel.find({});
    res.json(holdings);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch holdings" });
  }
});

module.exports = router;