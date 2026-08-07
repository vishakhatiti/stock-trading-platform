import api from "./axios";

// Get all stocks in user's watchlist
export const getWatchlist = async () => {
  const { data } = await api.get("/api/watchlist");
  return data;
};

// Add a stock
export const addToWatchlist = async (symbol) => {
  const { data } = await api.post("/api/watchlist", {
    symbol,
  });

  return data;
};

// Remove a stock
export const removeFromWatchlist = async (symbol) => {
  const { data } = await api.delete(`/api/watchlist/${symbol}`);
  return data;
};