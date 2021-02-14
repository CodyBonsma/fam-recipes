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

// delete recipe by ID
router.delete("/api/recipe/", jsonParser, (req, res) => {
  console.log(req.body)
  let {recipeID} = req.body;
  let {ID} = recipeID
  console.log(ID)
  db.Recipe.findByIdAndDelete({ _id: ID })
    .then((deletedRecipe) => {
      console.log(deletedRecipe);
      res.json(deletedRecipe);
    })
    .catch((err) => {
      res.json({
        error: true,
        data: null,
        message: "unable to delete selected recipe",
      });
    });
});
module.exports = router;
