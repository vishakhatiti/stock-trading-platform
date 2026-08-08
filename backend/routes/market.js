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
// const WATCHLIST = [
//   // Technology
//   "AAPL",
//   "MSFT",
//   "NVDA",
//   "AVGO",
//   "ORCL",
//   "CSCO",
//   "IBM",
//   "QCOM",
//   "AMD",
//   "INTC",
//   "AMAT",
//   "MU",
//   "ADI",
//   "TXN",
//   "LRCX",
//   "KLAC",
//   "MRVL",
//   "NXPI",
//   "MCHP",
//   "ON",
//   "ARM",
//   "INTU",
//   "ADBE",
//   "CRM",
//   "NOW",
//   "PANW",
//   "SNOW",
//   "PLTR",
//   "CRWD",
//   "FTNT",

//   // Internet / Consumer Technology
//   "AMZN",
//   "GOOGL",
//   "GOOG",
//   "META",
//   "NFLX",
//   "TSLA",
//   "UBER",
//   "ABNB",
//   "BKNG",
//   "DASH",
//   "SHOP",
//   "SPOT",
//   "PYPL",
//   "SQ",
//   "COIN",

//   // Financial
//   "JPM",
//   "BAC",
//   "WFC",
//   "C",
//   "GS",
//   "MS",
//   "BLK",
//   "SCHW",
//   "AXP",
//   "USB",
//   "PNC",
//   "TFC",
//   "COF",
//   "BK",
//   "CB",
//   "CME",

//   // Healthcare / Pharma
//   "LLY",
//   "UNH",
//   "JNJ",
//   "MRK",
//   "ABBV",
//   "PFE",
//   "AMGN",
//   "GILD",
//   "BMY",
//   "CVS",
//   "ISRG",
//   "ABT",
//   "TMO",
//   "DHR",
//   "MDT",

//   // Consumer
//   "WMT",
//   "COST",
//   "HD",
//   "LOW",
//   "TGT",
//   "NKE",
//   "MCD",
//   "SBUX",
//   "CMG",
//   "KO",
//   "PEP",
//   "PG",
//   "CL",
//   "EL",
//   "DIS",

//   // Energy
//   "XOM",
//   "CVX",
//   "COP",
//   "SLB",
//   "EOG",
//   "OXY",
//   "PSX",
//   "VLO",
//   "MPC",
//   "HAL",

//   // Industrial / Aerospace
//   "CAT",
//   "DE",
//   "GE",
//   "HON",
//   "UPS",
//   "RTX",
//   "BA",
//   "LMT",
//   "NOC",
//   "MMM",

//   // Telecom / Media / Other
//   "T",
//   "VZ",
//   "TMUS",
//   "CMCSA",
//   "TMO",
//   "FDX",
//   "GM",
//   "F",
//   "RIVN",
//   "FSLR",
// ];

// =======================
// Simple Cache (2 minutes)
// =======================

let cachedWatchlist = [];
let lastUpdated = 0;
const CACHE_DURATION = 120000; // 2 minutes

// =======================
// GET /api/market/watchlist
// =======================
router.get("/watchlist", async (req, res) => {
  try {
    const now = Date.now();

    if (cachedWatchlist.length > 0 && now - lastUpdated < CACHE_DURATION) {
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
      }),
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
