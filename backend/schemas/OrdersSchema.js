const { Schema } = require("mongoose");

const OrdersSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },

    symbol: {
      type: String,
      required: true,
      uppercase: true,
      trim: true,
    },

    quantity: {
      type: Number,
      required: true,
      min: 1,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    orderType: {
      type: String,
      enum: ["BUY", "SELL"],
      required: true,
    },

    status: {
      type: String,
      enum: ["COMPLETED"],
      default: "COMPLETED",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = { OrdersSchema };