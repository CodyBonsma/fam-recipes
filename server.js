const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

// set server PORT -- using 3001 to not collide with react app use of 3000
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(
  process.env.MONGODB_CONNECTION_STRING || "mongodb://localhost/famRecipe",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongoose connection is a success!");
});

connection.on("error", (err) => {
  console.log("Mongoose connection error: ", err);
});

app.get("/api/config", (req, res) => {
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
