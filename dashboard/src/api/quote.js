import api from "./axios";

export const getQuote = async (symbol) => {
  const { data } = await api.get(`/api/market/quote/${symbol}`);
  return data;
};