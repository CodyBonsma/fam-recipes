const express = require("express");
const router = express.Router();
// object came back undefined, use json parser -- but why?
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const db = require('../models/index');

// create post route to add recipes 
router.post("/api/recipe", jsonParser, (req, res) => {
  console.log(req.body);
  db.Recipe.create(req.body)
    .then((newRecipe) => {
      res.json(newRecipe);
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
