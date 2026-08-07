const express = require("express");
const router = express.Router();

const { getQuote, searchStocks } = require("../services/finnhubService");

// =======================
// Predefined Market Watchlist
// =======================
const WATCHLIST = [
  "AAPL",
  "MSFT",
  "NVDA",
  "AMZN",
  "GOOGL",
  "META",
  "TSLA",
  "NFLX",
  "AMD",
  "INTC",
  "ORCL",
  "CRM",
  "IBM",
  "QCOM",
  "ADBE",
  "AVGO",
  "CSCO",
  "AMAT",
  "TXN",
  "SHOP",
];

// =======================
// Simple Cache (15 seconds)
// =======================
let cachedWatchlist = [];
let lastUpdated = 0;

// =======================
// GET /api/market/watchlist
// =======================
router.get("/watchlist", async (req, res) => {
  try {
    const now = Date.now();

    if (
      cachedWatchlist.length > 0 &&
      now - lastUpdated < 15000
    ) {
      return res.json(cachedWatchlist);
    }

    const stocks = await Promise.all(
      WATCHLIST.map(async (symbol) => {
        const quote = await getQuote(symbol);

        return {
          symbol,
          name: symbol,
          price: quote.currentPrice,
          percent: `${quote.percentChange.toFixed(2)}%`,
          isDown: quote.change < 0,
        };
      })
    );

    cachedWatchlist = stocks;
    lastUpdated = now;

    res.json(stocks);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Unable to fetch watchlist",
    });
  }
});

// =======================
// GET /api/market/quote/AAPL
// =======================
router.get("/quote/:symbol", async (req, res) => {
  try {
    const symbol = req.params.symbol.toUpperCase();

    if (!symbol) {
      return res.status(400).json({
        message: "Stock symbol is required",
      });
    }

    const data = await getQuote(symbol);

    res.json(data);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Unable to fetch market data",
    });
  }
});

// =======================
// GET /api/market/search?q=apple
// =======================
router.get("/search", async (req, res) => {
  try {
    const { q } = req.query;

    if (!q) {
      return res.status(400).json({
        message: "Search query is required",
      });
    }

    const stocks = await searchStocks(q);

    res.json(stocks);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Unable to search stocks",
    });
  }
});

module.exports = router;