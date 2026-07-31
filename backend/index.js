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

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/allHoldings", holdingsRoutes);
app.use("/allPositions", positionsRoutes);
app.use("/newOrder", ordersRoutes);
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