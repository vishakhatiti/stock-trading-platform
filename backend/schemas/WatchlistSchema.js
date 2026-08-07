const { Schema } = require("mongoose");

const WatchlistSchema = new Schema(
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
  },
  {
    timestamps: true,
  }
);

module.exports = { WatchlistSchema };