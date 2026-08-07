require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const holdingsRoutes = require("./routes/holdings");
const positionsRoutes = require("./routes/positions");
const ordersRoutes = require("./routes/orders");
const authRoutes = require("./routes/auth");

const app = express();

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;
const marketRoutes = require("./routes/market");

const watchlistRoutes = require("./routes/watchlist");

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/watchlist", watchlistRoutes);
app.use("/api/market", marketRoutes);
app.use("/api/holdings", holdingsRoutes);
app.use("/api/positions", positionsRoutes);
app.use("/api/orders", ordersRoutes);
app.use("/api/auth", authRoutes);

// Connect to MongoDB
mongoose
  .connect(uri)
  .then(() => {
    console.log("Database Connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });