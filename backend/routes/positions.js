const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/auth");

const { HoldingsModel } = require("../model/HoldingsModel");
const { getQuote } = require("../services/finnhubService");

// Get user's real positions
router.get("/", verifyToken, async (req, res) => {
  try {
    const holdings = await HoldingsModel.find({
      userId: req.user.id,
    });

    const positions = await Promise.all(
      holdings.map(async (holding) => {
        const quote = await getQuote(holding.symbol);

        const currentPrice = quote.currentPrice;

        const pnl =
          (currentPrice - holding.averagePrice) *
          holding.quantity;

        return {
          product: "CNC",
          name: holding.symbol,

          qty: holding.quantity,

          avg: holding.averagePrice,

          price: currentPrice,

          pnl,

          day: quote.percentChange,

          isLoss: quote.percentChange < 0,
        };
      })
    );

    res.status(200).json(positions);
  } catch (error) {
    console.error("Failed to fetch positions:", error);

    res.status(500).json({
      message: "Failed to fetch positions",
    });
  }
});

module.exports = router;