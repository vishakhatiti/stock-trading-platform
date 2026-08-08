import React, { useState, useEffect, useContext } from "react";

import { placeOrder } from "../api/orders";
import { getQuote } from "../api/quote";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [currentPrice, setCurrentPrice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [placingOrder, setPlacingOrder] = useState(false);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        setLoading(true);

        const quote = await getQuote(uid);

        setCurrentPrice(quote.currentPrice);
      } catch (error) {
        console.error(error);
        alert("Unable to fetch market price.");
      } finally {
        setLoading(false);
      }
    };

    fetchQuote();
  }, [uid]);

  const handleBuyClick = async () => {
    if (!currentPrice) return;

    try {
      setPlacingOrder(true);

      await placeOrder({
        symbol: uid,
        quantity: Number(stockQuantity),
        price: currentPrice,
        orderType: "BUY",
      });

      alert("Order placed successfully!");

      generalContext.closeBuyWindow();
    } catch (error) {
      alert(error.response?.data?.message || "Order failed");
    } finally {
      setPlacingOrder(false);
    }
  };

  const handleCancelClick = () => {
    generalContext.closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window">
      <div className="regular-order">
        <h3 style={{ marginBottom: "20px" }}>Buy {uid}</h3>

        {loading ? (
          <p>Loading market price...</p>
        ) : (
          <>
            <div style={{ marginBottom: "20px" }}>
              <strong>Current Price</strong>
              <h2>₹{currentPrice.toFixed(2)}</h2>
            </div>

            <div className="inputs">
              <fieldset>
                <legend>Quantity</legend>

                <input
                  type="number"
                  min="1"
                  value={stockQuantity}
                  onChange={(e) =>
                    setStockQuantity(Math.max(1, Number(e.target.value)))
                  }
                />
              </fieldset>
            </div>

            <div
              style={{
                marginTop: "20px",
                fontWeight: "600",
              }}
            >
              Estimated Cost ₹{(stockQuantity * currentPrice).toFixed(2)}
            </div>
          </>
        )}
      </div>

      <div className="buttons">
        <span></span>

        <div>
          <button
            className="btn btn-blue"
            onClick={handleBuyClick}
            disabled={loading || placingOrder}
          >
            {placingOrder ? "Buying..." : "Buy"}
          </button>

          <button
            className="btn btn-grey"
            onClick={handleCancelClick}
            disabled={placingOrder}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
