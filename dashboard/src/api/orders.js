import api from "./axios";

// Place a new BUY/SELL order
export const placeOrder = async (order) => {
  const { data } = await api.post("/api/orders", order);
  return data;
};

// Fetch all user orders
export const getOrders = async () => {
  const { data } = await api.get("/api/orders");
  return data;
};