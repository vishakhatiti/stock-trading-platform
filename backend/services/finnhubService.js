const axios = require("axios");

const BASE_URL = "https://finnhub.io/api/v1";

// Get live stock quote
const getQuote = async (symbol) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/quote`, {
      params: {
        symbol,
        token: process.env.FINNHUB_API_KEY,
      },
    });

    return {
      symbol,
      currentPrice: data.c,
      change: data.d,
      percentChange: data.dp,
      high: data.h,
      low: data.l,
      open: data.o,
      previousClose: data.pc,
      timestamp: data.t,
    };
  } catch (error) {
    console.error("Finnhub API Error:", error.message);
    throw error;
  }
};

// Search stocks
const searchStocks = async (query) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/search`, {
      params: {
        q: query,
        token: process.env.FINNHUB_API_KEY,
      },
    });

    return data.result
      .filter(
        (stock) =>
          stock.symbol &&
          stock.description &&
          stock.type === "Common Stock"
      )
      .slice(0, 10)
      .map((stock) => ({
        symbol: stock.symbol,
        displaySymbol: stock.displaySymbol,
        description: stock.description,
      }));
  } catch (error) {
    console.error("Finnhub API Error:", error.message);
    throw error;
  }
};

module.exports = {
  getQuote,
  searchStocks,
};