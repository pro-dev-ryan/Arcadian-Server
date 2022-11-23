const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// app initialization
app.get("/", (req, res) => {
  res.send("Server is ok, No issues");
});

// basic routes

// dashboard routes

// Admin Routes

// Payment Routes

// Listen
app.listen(process.env.PORT || 5000, () => {
  ("app running");
});
