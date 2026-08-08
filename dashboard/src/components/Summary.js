import React, { useEffect, useState } from "react";
import api from "../api/axios";

const Summary = ({ user }) => {
  const [holdings, setHoldings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchHoldings = async () => {
    try {
      const { data } = await api.get("/api/holdings");
      setHoldings(data);
    } catch (error) {
      console.error("Failed to fetch holdings:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHoldings();

    const interval = setInterval(() => {
      fetchHoldings();
    }, 15000);

    return () => clearInterval(interval);
  }, []);

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

  const pnlClass = totalPnL >= 0 ? "profit" : "loss";

  return (
    <>
      {/* User */}
      <div className="username">
        <h6>Hi, {user?.name || "User"}!</h6>
        <hr className="divider" />
      </div>

      {/* Equity */}
      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>—</h3>
            <p>Margin available</p>
          </div>

          <hr />

          <div className="second">
            <p>
              Margins used <span>—</span>
            </p>

            <p>
              Opening balance <span>—</span>
            </p>
          </div>
        </div>

        <hr className="divider" />
      </div>

      {/* Holdings */}
      <div className="section">
        <span>
          <p>
            Holdings ({loading ? "..." : holdings.length})
          </p>
        </span>

        {loading ? (
          <div className="summary-loading">
            Loading portfolio...
          </div>
        ) : (
          <div className="data">
            <div className="first">
              <h3 className={pnlClass}>
                ₹{totalPnL.toFixed(2)}{" "}
                <small>
                  {totalPnL >= 0 ? "+" : ""}
                  {totalPnLPercent.toFixed(2)}%
                </small>
              </h3>

              <p>P&amp;L</p>
            </div>

            <hr />

            <div className="second">
              <p>
                Current Value
                <span>
                  ₹{totalCurrentValue.toFixed(2)}
                </span>
              </p>

              <p>
                Investment
                <span>
                  ₹{totalInvestment.toFixed(2)}
                </span>
              </p>
            </div>
          </div>
        )}

        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;