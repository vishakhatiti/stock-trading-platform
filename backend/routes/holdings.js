const express = require("express");
const { HoldingsModel } = require("../model/HoldingsModel");

const router = express.Router();

// Get all holdings
router.get("/", async (req, res) => {
  try {
    const holdings = await HoldingsModel.find({});
    res.json(holdings);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch holdings" });
  }
});

module.exports = router;