import React, { useEffect, useState } from "react";
import api from "../api/axios";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPositions = async () => {
    try {
      const { data } = await api.get("/api/positions");

      setAllPositions(data);
    } catch (error) {
      console.error("Failed to fetch positions:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPositions();

    // Refresh live prices every 15 seconds
    const interval = setInterval(() => {
      fetchPositions();
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="title">
        Positions ({loading ? "..." : allPositions.length})
      </div>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&amp;L</th>
              <th>Chg.</th>
            </tr>
          </thead>

          <tbody>
            {allPositions.map((stock, index) => {
              const pnlClass =
                stock.pnl >= 0 ? "profit" : "loss";

              const dayClass =
                stock.isLoss ? "loss" : "profit";

              return (
                <tr key={`${stock.name}-${index}`}>
                  <td>{stock.product}</td>

                  <td>{stock.name}</td>

                  <td>{stock.qty}</td>

                  <td>
                    ₹{Number(stock.avg).toFixed(2)}
                  </td>

                  <td>
                    ₹{Number(stock.price).toFixed(2)}
                  </td>

                  <td className={pnlClass}>
                    ₹{Number(stock.pnl).toFixed(2)}
                  </td>

                  <td className={dayClass}>
                    {Number(stock.day).toFixed(2)}%
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {!loading && allPositions.length === 0 && (
        <p
          style={{
            textAlign: "center",
            color: "#999",
            marginTop: "30px",
          }}
        >
          No open positions
        </p>
      )}
    </>
  );
};

export default Positions;