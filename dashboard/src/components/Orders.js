import React, { useEffect, useState } from "react";
import api from "../api/axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const { data } = await api.get("/api/orders");
      setOrders(data);
    } catch (error) {
      console.error(error);
    }
  };

  if (orders.length === 0) {
    return (
      <div className="orders">
        <div className="no-orders">
          <p>You haven't placed any orders yet.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="orders">
      <h3 className="title">Orders ({orders.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Date & Time</th>
              <th>Type</th>
              <th>Symbol</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>
                  {new Date(order.createdAt).toLocaleString()}
                </td>

                <td
                  className={
                    order.orderType === "BUY"
                      ? "profit"
                      : "loss"
                  }
                >
                  {order.orderType}
                </td>

                <td>{order.symbol}</td>

                <td>{order.quantity}</td>

                <td>₹{order.price.toFixed(2)}</td>

                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;