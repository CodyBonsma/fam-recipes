const express = require("express");
const router = express.Router();
require("../models/Recipe")

const db = require("../models/Recipe");

router.post("/api/recipe", (req, res) => {
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
