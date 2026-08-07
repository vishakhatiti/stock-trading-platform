import React, { useState, useEffect } from "react";
import api from "../api/axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [holdings, setHoldings] = useState([]);

  useEffect(() => {
    fetchHoldings();
  }, []);

  const fetchHoldings = async () => {
    try {
      const { data } = await api.get("/api/holdings");
      setHoldings(data);
    } catch (error) {
      console.error(error);
    }
  };

  const graphData = {
    labels: holdings.map((stock) => stock.symbol),
    datasets: [
      {
        label: "Current Value",
        data: holdings.map((stock) => stock.currentValue),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const totalInvestment = holdings.reduce(
    (sum, stock) => sum + stock.investedValue,
    0
  );

  const totalCurrentValue = holdings.reduce(
    (sum, stock) => sum + stock.currentValue,
    0
  );

  const totalPnL = totalCurrentValue - totalInvestment;

  const totalPnLPercent =
    totalInvestment === 0
      ? 0
      : (totalPnL / totalInvestment) * 100;

  return (
    <>
      <h3 className="title">
        Holdings ({holdings.length})
      </h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. Cost</th>
              <th>LTP</th>
              <th>Investment</th>
              <th>Current Value</th>
              <th>P&amp;L</th>
            </tr>
          </thead>

          <tbody>
            {holdings.map((stock) => (
              <tr key={stock.symbol}>
                <td>{stock.symbol}</td>

                <td>{stock.quantity}</td>

                <td>₹{stock.averagePrice.toFixed(2)}</td>

                <td>₹{stock.currentPrice.toFixed(2)}</td>

                <td>₹{stock.investedValue.toFixed(2)}</td>

                <td>₹{stock.currentValue.toFixed(2)}</td>

                <td
                  className={
                    stock.profitLoss >= 0
                      ? "profit"
                      : "loss"
                  }
                >
                  ₹{stock.profitLoss.toFixed(2)}
                  <br />
                  <small>
                    ({stock.profitLossPercent.toFixed(2)}%)
                  </small>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>₹{totalInvestment.toFixed(2)}</h5>
          <p>Total Investment</p>
        </div>

        <div className="col">
          <h5>₹{totalCurrentValue.toFixed(2)}</h5>
          <p>Current Value</p>
        </div>

        <div className="col">
          <h5
            className={
              totalPnL >= 0 ? "profit" : "loss"
            }
          >
            ₹{totalPnL.toFixed(2)}
            <br />
            <small>
              ({totalPnLPercent.toFixed(2)}%)
            </small>
          </h5>

          <p>Total P&amp;L</p>
        </div>
      </div>

      {holdings.length > 0 && (
        <VerticalGraph data={graphData} />
      )}
    </>
  );
};

export default Holdings;