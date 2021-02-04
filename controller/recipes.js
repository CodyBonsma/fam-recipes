const express = require("express");
const router = express.Router();

const db = require('../models/index');

router.post("/api/recipe", (req, res) => {
  console.log(req.body);
  db.Recipe.create(req.body)
    .then((newRecipe) => {
      console.log(newRecipe);
    })
    .catch((err) => {
      res.json({
        error: true,
        data: null,
        message: "failed to create new recipe",
      });
    });
});

module.exports = router;
