const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

// set server PORT -- using 3001 to not collide with react app use of 3000
const PORT = process.env.PORT || 3001;

app.get("/api/config", (req, res) => {
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
