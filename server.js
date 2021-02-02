const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

// set server PORT
const PORT = process.env.PORT || 3001;

app.get("/api/config", (req, res) => {
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
