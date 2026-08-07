const express = require("express");

const router = express.Router();

const verifyToken = require("../middleware/auth");

const { OrdersModel } = require("../model/OrdersModel");
const { HoldingsModel } = require("../model/HoldingsModel");

// =======================
// Create Order
// =======================
router.post("/", verifyToken, async (req, res) => {
  try {
    const { symbol, quantity, price, orderType } = req.body;

    if (!symbol || !quantity || !price || !orderType) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const stockSymbol = symbol.toUpperCase();
    const qty = Number(quantity);
    const stockPrice = Number(price);

    let holding = await HoldingsModel.findOne({
      userId: req.user.id,
      symbol: stockSymbol,
    });

    // =======================
    // BUY
    // =======================
    if (orderType === "BUY") {
      if (!holding) {
        holding = await HoldingsModel.create({
          userId: req.user.id,
          symbol: stockSymbol,
          quantity: qty,
          averagePrice: stockPrice,
        });
      } else {
        const totalCost =
          holding.averagePrice * holding.quantity +
          stockPrice * qty;

        const totalQuantity =
          holding.quantity + qty;

        holding.averagePrice =
          totalCost / totalQuantity;

        holding.quantity = totalQuantity;

        await holding.save();
      }
    }

    // =======================
    // SELL
    // =======================
    else if (orderType === "SELL") {
      if (!holding) {
        return res.status(400).json({
          message: "Stock not found in holdings",
        });
      }

      if (holding.quantity < qty) {
        return res.status(400).json({
          message: "Insufficient quantity",
        });
      }

      holding.quantity -= qty;

      if (holding.quantity === 0) {
        await HoldingsModel.deleteOne({
          _id: holding._id,
        });
      } else {
        await holding.save();
      }
    }

    // =======================
    // Save Order
    // =======================
    const order = await OrdersModel.create({
      userId: req.user.id,
      symbol: stockSymbol,
      quantity: qty,
      price: stockPrice,
      orderType,
    });

    res.status(201).json({
      message: "Order executed successfully",
      order,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

// =======================
// Get User Orders
// =======================
router.get("/", verifyToken, async (req, res) => {
  try {
    const orders = await OrdersModel.find({
      userId: req.user.id,
    }).sort({
      createdAt: -1,
    });

    res.status(200).json(orders);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch orders",
    });
  }
});

module.exports = router;