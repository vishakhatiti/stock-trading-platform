const express = require("express");

const router = express.Router();

const verifyToken = require("../middleware/auth");

const { HoldingsModel } = require("../model/HoldingsModel");
const { getQuote } = require("../services/finnhubService");

// =======================
// Get User Holdings
// =======================
router.get("/", verifyToken, async (req, res) => {
  try {
    const holdings = await HoldingsModel.find({
      userId: req.user.id,
    });

    const portfolio = await Promise.all(
      holdings.map(async (holding) => {
        const quote = await getQuote(holding.symbol);

        const currentPrice = quote.currentPrice;

        const investedValue =
          holding.quantity * holding.averagePrice;

        const currentValue =
          holding.quantity * currentPrice;

        const profitLoss =
          currentValue - investedValue;

        const profitLossPercent =
          investedValue === 0
            ? 0
            : (profitLoss / investedValue) * 100;

        return {
          symbol: holding.symbol,
          quantity: holding.quantity,
          averagePrice: holding.averagePrice,

          currentPrice,

          investedValue,

          currentValue,

          profitLoss,

          profitLossPercent,
        };
      })
    );

    res.status(200).json(portfolio);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch holdings",
    });
  }
});

module.exports = router;