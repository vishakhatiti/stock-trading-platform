import React, { useEffect, useState } from "react";
import { searchStocks } from "../api/market";
import "./SearchStock.css";

const SearchStock = ({ onSelect, onSearchChange }) => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (onSearchChange) {
      onSearchChange(search);
    }

    if (!search.trim()) {
      setResults([]);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        setLoading(true);

        const data = await searchStocks(search);

        setResults(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [search, onSearchChange]);

  return (
    <div className="search-wrapper">
      <input
        className="search"
        placeholder="Search company or symbol..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {search && (
        <div className="search-dropdown">
          {loading ? (
            <div className="search-item">
              Searching...
            </div>
          ) : results.length === 0 ? (
            <div className="search-item">
              No results found
            </div>
          ) : (
            results.map((stock) => (
              <div
                key={stock.symbol}
                className="search-item"
                onClick={() => {
                  setSearch(stock.symbol);
                  setResults([]);

                  if (onSelect) {
                    onSelect(stock.symbol);
                  }
                }}
              >
                <div className="symbol">
                  {stock.symbol}
                </div>

                <div className="company">
                  {stock.description}
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default SearchStock;