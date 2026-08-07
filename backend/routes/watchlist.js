const express = require("express");

const router = express.Router();

const verifyToken = require("../middleware/auth");
const { WatchlistModel } = require("../model/WatchlistModel");
const { getQuote } = require("../services/finnhubService");

// =======================
// Add Stock to Watchlist
// =======================
router.post("/", verifyToken, async (req, res) => {
  try {
    const { symbol } = req.body;

    if (!symbol || !symbol.trim()) {
      return res.status(400).json({
        message: "Stock symbol is required",
      });
    }

    const formattedSymbol = symbol.trim().toUpperCase();

    // Check duplicate
    const existingStock = await WatchlistModel.findOne({
      userId: req.user.id,
      symbol: formattedSymbol,
    });

    if (existingStock) {
      return res.status(400).json({
        message: "Stock already exists in watchlist",
      });
    }

    // Limit to 50 stocks
    const totalStocks = await WatchlistModel.countDocuments({
      userId: req.user.id,
    });

    if (totalStocks >= 50) {
      return res.status(400).json({
        message: "Maximum 50 stocks allowed",
      });
    }

    // Save stock
    const newStock = await WatchlistModel.create({
      userId: req.user.id,
      symbol: formattedSymbol,
    });

    res.status(201).json({
      message: "Stock added successfully",
      stock: newStock,
    });
  } catch (error) {
    console.error("Add Watchlist Error:", error);

    res.status(500).json({
      message: "Server Error",
    });
  }
});

// =======================
// Get User Watchlist
// =======================
router.get("/", verifyToken, async (req, res) => {
  try {
    const watchlist = await WatchlistModel.find({
      userId: req.user.id,
    }).sort({ createdAt: -1 });

    const watchlistWithPrices = await Promise.all(
      watchlist.map(async (stock) => {
        const quote = await getQuote(stock.symbol);

        return {
          symbol: stock.symbol,
          name: stock.symbol,
          price: quote.currentPrice,
          percent: `${quote.percentChange.toFixed(2)}%`,
          isDown: quote.change < 0,
        };
      })
    );

    res.status(200).json(watchlistWithPrices);
  } catch (error) {
    console.error("Fetch Watchlist Error:", error);

    res.status(500).json({
      message: "Server Error",
    });
  }
});

// =======================
// Remove Stock
// =======================
router.delete("/:symbol", verifyToken, async (req, res) => {
  try {
    const symbol = req.params.symbol.trim().toUpperCase();

    const deletedStock = await WatchlistModel.findOneAndDelete({
      userId: req.user.id,
      symbol,
    });

    if (!deletedStock) {
      return res.status(404).json({
        message: "Stock not found",
      });
    }

    res.status(200).json({
      message: "Stock removed successfully",
    });
  } catch (error) {
    console.error("Delete Watchlist Error:", error);

    res.status(500).json({
      message: "Server Error",
    });
  }
});

module.exports = router;