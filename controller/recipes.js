const express = require("express");
const router = express.Router();
// object came back undefined, use json parser -- but why?
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

const db = require("../models/index");

// create post route to add recipes
router.post("/api/recipe", jsonParser, (req, res) => {
  console.log("REQ.BODY: ", req.body);
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

// grab all recipes stored in mongo
router.get("/api/recipe", jsonParser, (req, res) => {
  console.log(req.body);
  db.Recipe.find({})
    .then((foundRecipes) => {
    //   console.log("recipes found: ", foundRecipes);
      res.json(foundRecipes);
    })
    .catch((err) => {
      res.json({
        error: true,
        data: null,
        message: "Unable to retrieve recipes",
      });
    });
});

module.exports = router;
