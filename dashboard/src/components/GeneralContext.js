import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: () => {},
  closeBuyWindow: () => {},
  openSellWindow: () => {},
  closeSellWindow: () => {},
});

export const GeneralContextProvider = ({ children }) => {
  const [selectedStock, setSelectedStock] = useState("");

  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);

  const openBuyWindow = (symbol) => {
    setSelectedStock(symbol);
    setIsBuyWindowOpen(true);
  };

  const closeBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStock("");
  };

  const openSellWindow = (symbol) => {
    setSelectedStock(symbol);
    setIsSellWindowOpen(true);
  };

  const closeSellWindow = () => {
    setIsSellWindowOpen(false);
    setSelectedStock("");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow,
        closeBuyWindow,
        openSellWindow,
        closeSellWindow,
      }}
    >
      {children}

      {isBuyWindowOpen && (
        <BuyActionWindow uid={selectedStock} />
      )}

      {isSellWindowOpen && (
        <SellActionWindow uid={selectedStock} />
      )}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;