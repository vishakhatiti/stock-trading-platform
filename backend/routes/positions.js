const express = require("express");
const { PositionsModel } = require("../model/PositionsModel");

const router = express.Router();
const verifyToken = require("../middleware/auth");

// Get all positions
router.get("/", verifyToken, async (req, res) => {
  try {
    const positions = await PositionsModel.find({});
    res.json(positions);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch positions" });
  }
});

module.exports = router;