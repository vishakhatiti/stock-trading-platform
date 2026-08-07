import React, { useState, useContext, useEffect } from "react";
import GeneralContext from "./GeneralContext";
import { Tooltip, Grow } from "@mui/material";

import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

import { getMarketWatchlist } from "../api/market";
import SearchStock from "./SearchStock";
import { DoughnutChart } from "./DoughnoutChart";

const WatchList = () => {
  const [allStocks, setAllStocks] = useState([]);
  const [filteredStocks, setFilteredStocks] = useState([]);

  useEffect(() => {
    fetchMarketWatchlist();

    const interval = setInterval(() => {
      fetchMarketWatchlist();
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const fetchMarketWatchlist = async () => {
    try {
      const data = await getMarketWatchlist();
      setAllStocks(data);
      setFilteredStocks(data);
    } catch (error) {
      console.error(error);
    }
  };

  const chartData = {
    labels: filteredStocks.map((stock) => stock.symbol),
    datasets: [
      {
        label: "Price",
        data: filteredStocks.map((stock) => stock.price),
        backgroundColor: [
          "#4caf50",
          "#2196f3",
          "#ff9800",
          "#e91e63",
          "#9c27b0",
          "#00bcd4",
          "#ffc107",
          "#795548",
          "#3f51b5",
          "#8bc34a",
        ],
      },
    ],
  };

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <SearchStock
          onSearchChange={(value) => {
            if (!value) {
              setFilteredStocks(allStocks);
            }
          }}
          onSelect={(symbol) => {
            const stock = allStocks.find((item) => item.symbol === symbol);

            if (stock) {
              setFilteredStocks([stock]);
            }
          }}
        />

        <span className="counts">
          {filteredStocks.length} / {allStocks.length}
        </span>
      </div>

      <ul className="list">
        {filteredStocks.map((stock) => (
          <WatchListItem key={stock.symbol} stock={stock} />
        ))}
      </ul>

      <DoughnutChart data={chartData} />
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showActions, setShowActions] = useState(false);

  return (
    <li
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.symbol}</p>

        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>

          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}

          <span className="price">₹{stock.price.toFixed(2)}</span>
        </div>
      </div>

      {showActions && <WatchListActions symbol={stock.symbol} />}
    </li>
  );
};

const WatchListActions = ({ symbol }) => {
  const generalContext = useContext(GeneralContext);

  return (
    <span className="actions">
      <span>
        <Tooltip title="Buy" placement="top" arrow TransitionComponent={Grow}>
          <button
            className="buy"
            onClick={() => generalContext.openBuyWindow(symbol)}
          >
            Buy
          </button>
        </Tooltip>

        <Tooltip title="Sell" placement="top" arrow TransitionComponent={Grow}>
          <button
            className="sell"
            onClick={() => generalContext.openSellWindow(symbol)}
          >
            Sell
          </button>
        </Tooltip>

        <Tooltip
          title="Analytics"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>

        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};
