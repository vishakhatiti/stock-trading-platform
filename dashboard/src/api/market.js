import api from "./axios";

// Get predefined market watchlist
export const getMarketWatchlist = async () => {
  const { data } = await api.get("/api/market/watchlist");
  return data;
};

// Get single stock quote
export const getQuote = async (symbol) => {
  const { data } = await api.get(`/api/market/quote/${symbol}`);
  return data;
};

// Search stocks
export const searchStocks = async (query) => {
  const { data } = await api.get(`/api/market/search?q=${query}`);
  return data;
};