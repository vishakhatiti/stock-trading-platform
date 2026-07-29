const express = require("express");
const { OrdersModel } = require("../model/OrdersModel");

const router = express.Router();

// Create a new order
router.post("/", async (req, res) => {
  try {
    const newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrder.save();

    res.status(201).json({
      message: "Order saved successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to save order",
    });
  }
});

module.exports = router;